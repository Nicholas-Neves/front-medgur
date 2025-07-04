import React, { useRef, useState, useEffect } from "react";
import styles from "./LeitorOCR.module.css";
import Tesseract from "tesseract.js";
import remedios from "./remedios";
import ocrIcon from "./teste.png";

function LeitorOCR() {
  var [tamanhoFonte, setTamanhoFonte] = useState(16);
  var [vozAtiva, setVozAtiva] = useState(true);          
  var video = useRef(null);
  var canvas = useRef(null);

  var [telaAberta, setTelaAberta] = useState(false);
  var [estaLendo, setEstaLendo] = useState(false);
  var [textoLido, setTextoLido] = useState("");
  var [ultimoTexto, setUltimoTexto] = useState("");
  var [intervaloID, setIntervaloID] = useState(null);
  var encontrouRemedio = useRef(false);

  var [botaoPosicao, setBotaoPosicao] = useState({
    x: window.innerWidth - 60,
    y: window.innerHeight / 3,
  });

  var arrastando = useRef(false);
  var offset = useRef({ x: 0, y: 0 });

  /* funções da câmera */
  function ligarCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => { if (video.current) video.current.srcObject = stream; })
      .catch(() => setTextoLido("Erro ao acessar a câmera."));
  }

  function desligarCamera() {
    if (video.current?.srcObject) video.current.srcObject.getTracks().forEach(t => t.stop());
    clearInterval(intervaloID);
    setEstaLendo(false);
    encontrouRemedio.current = false;
  }

  /* filtro rgb pra melhorar a qualidade */
  function binarizar(ctx, w, h) {
    var img = ctx.getImageData(0, 0, w, h);
    var d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      var m = (d[i] + d[i + 1] + d[i + 2]) / 3;
      var c = m < 128 ? 0 : 255;
      d[i] = d[i + 1] = d[i + 2] = c;
    }
    ctx.putImageData(img, 0, 0);
  }

  /* OCR */
  function capturarImagem() {
    if (encontrouRemedio.current) return;
    var ctx = canvas.current.getContext("2d");
    ctx.drawImage(video.current, 0, 0, canvas.current.width, canvas.current.height);
    binarizar(ctx, canvas.current.width, canvas.current.height);

    var img64 = canvas.current.toDataURL("image/png");

    Tesseract.recognize(img64, "por").then(({ data: { text } }) => {
      var txt = text.toLowerCase().replace(/[^a-zà-ÿ\s]/gi, "").trim();
      if (txt === ultimoTexto || txt.length < 3) return;
      setUltimoTexto(txt);

      for (let nome in remedios) {
        if (txt.includes(nome.toLowerCase())) {
          var info = remedios[nome];
          var msg = `Remédio: ${nome}\n\nIndicação: ${info.indicacao}\n\nSegurança: ${info.seguranca}\n\nContraindicação: ${info.contraindicacao}`;
          setTextoLido(msg);
          falarTexto(msg);
          encontrouRemedio.current = true;
          clearInterval(intervaloID);
          setEstaLendo(false);
          return;
        }
      }
      setTextoLido("Medicamento não reconhecido.");
    }).catch(() => setTextoLido("Erro ao processar imagem."));
  }

  /* voz */
  function falarTexto(texto) {
    if (!vozAtiva) return;
    window.speechSynthesis.cancel();
    var fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    window.speechSynthesis.speak(fala);
  }

  function alternarVoz() { setVozAtiva(v => !v); }

  /* botões */
  function alternarTela() {
    window.speechSynthesis.cancel();                     // cancela a voz
    var open = !telaAberta;
    setTelaAberta(open);
    open ? ligarCamera() : desligarCamera();
  }

  function alternarLeitura() {
    window.speechSynthesis.cancel();                     // cancela a voz
    if (!estaLendo) {
      encontrouRemedio.current = false;
      setTextoLido("Lendo...");
      var id = setInterval(capturarImagem, 1500);
      setIntervaloID(id);
      setEstaLendo(true);
    } else {
      clearInterval(intervaloID);
      setEstaLendo(false);
      setTextoLido("");
      encontrouRemedio.current = false;
    }
  }

  function fecharTela() { alternarTela(); }

  /* arrastar API */
  function iniciarArrasteMouse(e) {
    arrastando.current = true;
    offset.current = { x: e.clientX - botaoPosicao.x, y: e.clientY - botaoPosicao.y };
  }
  function iniciarArrasteToque(e) {
    var t = e.touches[0];
    arrastando.current = true;
    offset.current = { x: t.clientX - botaoPosicao.x, y: t.clientY - botaoPosicao.y };
  }
  function moverBotao(e) {
    if (!arrastando.current) return;
    var x = (e.clientX || e.touches[0].clientX) - offset.current.x;
    var y = (e.clientY || e.touches[0].clientY) - offset.current.y;
    setBotaoPosicao({ x, y: Math.min(window.innerHeight - 70, Math.max(10, y)) });
  }
  function soltarBotao() {
    if (!arrastando.current) return;
    arrastando.current = false;
    var metade = window.innerWidth / 2;
    setBotaoPosicao(p => ({ x: p.x < metade ? 20 : window.innerWidth - 60, y: p.y }));
  }

  useEffect(() => {
    document.addEventListener("mousemove", moverBotao);
    document.addEventListener("mouseup", soltarBotao);
    document.addEventListener("touchmove", moverBotao);
    document.addEventListener("touchend", soltarBotao);
    return () => {
      document.removeEventListener("mousemove", moverBotao);
      document.removeEventListener("mouseup", soltarBotao);
      document.removeEventListener("touchmove", moverBotao);
      document.removeEventListener("touchend", soltarBotao);
    };
  }, []);

  /* modal de modo de uso */
  var abrirUso = () => {
    document.getElementById("uso").style.display = "flex";
    document.getElementById("conteudo").style.filter = "blur(50px)";
    document.getElementById("apiBtn").style.display = "none";
  };

  /* aumentar e diminuir fonte */
  var aumentarFonte = () => setTamanhoFonte(f => Math.min(f + 2, 24));
  var diminuirFonte = () => setTamanhoFonte(f => Math.max(f - 2, 12));

  /* html */
  return (
    <>
      <div
        className={styles.apiBtn}
        id="apiBtn"
        onMouseDown={iniciarArrasteMouse}
        onTouchStart={iniciarArrasteToque}
        onClick={alternarTela}
        style={{ left: botaoPosicao.x, top: botaoPosicao.y }}
      >
        <img src={ocrIcon} alt="OCR" />
      </div>

      {telaAberta && (
        <div className={styles.container}>
          {/* modal de modo de uso */}
          <div className={styles.uso} id="uso" style={{ display: "none" }}>
            <div className={styles.usoBox}>
              <button
                className={styles.fecharUso}
                onClick={() => {
                  document.getElementById("uso").style.display = "none";
                  document.getElementById("conteudo").style.filter = "none";
                  document.getElementById("apiBtn").style.display = "flex";
                }}
              >
                ✕
              </button>
              <h1>Informações de uso</h1>
              <p>
                1. Toque no botão azul redondo (📷) para abrir o leitor.
                <br />
                2. Aponte a câmera para o nome do remédio.
                <br />
                3. Toque em "Iniciar Leitura".
                <br />
                4. Aguarde. Se reconhecido, o leitor exibirá e lerá as informações.
                <br />
                5. O resultado ficará visível até que você toque novamente em
                "Iniciar Leitura".
                <br/><br/>
                OBS:o leitor em voz pode ser ligada/desligada no botão 🔊.
                    <br />
                    clique em A- ou A+ para aumentar e diminuir a fonte.
              </p>
              <h2>Permita o uso da câmera no navegador quando solicitado.</h2>
            </div>
          </div>

          {/* modal OCR */}
          <div className={styles.conteudo} id="conteudo" style={{ fontSize: `${tamanhoFonte}px` }}>
            <div className={styles.row}>
              <div className={styles.funções}>
                <button className={styles.info} onClick={abrirUso}>?</button>
                <button className={styles.info} onClick={alternarVoz}>{vozAtiva ? "🔊" : "🔈"}</button>
              </div>
              <button className={styles.fechar} onClick={fecharTela}>✕</button>
            </div>

            <h1>Leitor de medicamento <span>Aponte a câmera para o nome do remédio</span></h1>

            <video ref={video} autoPlay muted playsInline />
            <canvas ref={canvas} width="640" height="480" hidden />

            <button className={styles.botao} onClick={alternarLeitura}>
              {estaLendo ? "Parar" : "Iniciar Leitura"}
            </button>

            <div className={styles.resultado}>{textoLido}</div>

            <div className={styles.lista}>
              <button className={styles.diminui} onClick={diminuirFonte}>A-</button>
              <button className={styles.aumenta} onClick={aumentarFonte}>A+</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeitorOCR;
