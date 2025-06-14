import React, { useRef, useState, useEffect } from "react";
import styles from "./LeitorOCR.module.css";
import Tesseract from "tesseract.js";
import remedios from "./remedios";
import ocrIcon from "./teste.png"; 

function LeitorOCR() {
  var [tamanhoFonte, setTamanhoFonte] = useState(16); 
  var video = useRef(null);
  var canvas = useRef(null);
  var container = useRef(null);

  //  estados da interface
  var [telaAberta, setTelaAberta] = useState(false);
  var [estaLendo, setEstaLendo] = useState(false);
  var [textoLido, setTextoLido] = useState("");
  var [ultimoTexto, setUltimoTexto] = useState("");
  var [intervaloID, setIntervaloID] = useState(null);

  //  botão flutuante (posição e arrasto)
  var [botaoPosicao, setBotaoPosicao] = useState({
    x: window.innerWidth - 60, 
    y: window.innerHeight / 3, 
  });
  var arrastando = useRef(false);
  var offset = useRef({ x: 0, y: 0 });

  //  liga a câmera do celular (ou do PC)
  function ligarCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } }) // usar câmera de trás no celular
      .then((stream) => {
        if (video.current) video.current.srcObject = stream;
      })
      .catch(() => setTextoLido("Erro ao acessar a câmera."));
  }

  //  desliga a câmera
  function desligarCamera() {
    if (video.current && video.current.srcObject) {
      var trilhas = video.current.srcObject.getTracks();
      trilhas.forEach((t) => t.stop());
    }
    clearInterval(intervaloID);
    setEstaLendo(false);
    setTextoLido("");
  }

  //  pega imagem da câmera e tenta reconhecer texto
  function capturarImagem() {
    var ctx = canvas.current.getContext("2d");
    ctx.drawImage(
      video.current,
      0,
      0,
      canvas.current.width,
      canvas.current.height
    );
    var imagem = canvas.current.toDataURL("image/png");

    Tesseract.recognize(imagem, "por")
      .then(({ data: { text } }) => {
        var texto = text
          .toLowerCase()
          .replace(/[^a-zà-ÿ\s]/gi, "")
          .trim();

        if (texto === ultimoTexto || texto.length < 3) return;
        setUltimoTexto(texto);

        let encontrou = false;

        for (let nome in remedios) {
          if (texto.includes(nome.toLowerCase())) {
            var info = remedios[nome];
            var mensagem = `Remédio: ${nome}\n\nIndicação: ${info.indicacao}\n\nSegurança: ${info.seguranca}\n\nContraindicação: ${info.contraindicacao}`;
            setTextoLido(mensagem);
            falarTexto(mensagem);
            clearInterval(intervaloID);
            setEstaLendo(false);
            encontrou = true;
            break;
          }
        }

        if (!encontrou) {
          setTextoLido("Medicamento não reconhecido.");
        }
      })
      .catch(() => setTextoLido("Erro ao processar imagem."));
  }

  // lê o texto em voz alta
  function falarTexto(txt) {
    var fala = new SpeechSynthesisUtterance(txt);
    fala.lang = "pt-BR";
    window.speechSynthesis.cancel(); // para falas antigas
    window.speechSynthesis.speak(fala);
  }

  // abre ou fecha a api
  function alternarTela() {
    var novaVisibilidade = !telaAberta;
    setTelaAberta(novaVisibilidade);
    novaVisibilidade ? ligarCamera() : desligarCamera();
  }

  // começa ou para a leitura
  function alternarLeitura() {
    if (!estaLendo) {
      setTextoLido("Lendo...");
      var id = setInterval(capturarImagem, 1500);
      setIntervaloID(id);
      setEstaLendo(true);
    } else {
      clearInterval(intervaloID);
      setEstaLendo(false);
      setTextoLido("");
    }
  }

  //  fecha OCR
  function fecharTela() {
    setTelaAberta(false);
    desligarCamera();
  }

  //  começa arraste com mouse
  function iniciarArrasteMouse(e) {
    arrastando.current = true;
    offset.current = {
      x: e.clientX - botaoPosicao.x,
      y: e.clientY - botaoPosicao.y,
    };
  }

  //  começa arraste com dedo
  function iniciarArrasteToque(e) {
    var toque = e.touches[0];
    arrastando.current = true;
    offset.current = {
      x: toque.clientX - botaoPosicao.x,
      y: toque.clientY - botaoPosicao.y,
    };
  }

  // move o botão com mouse ou dedo
  function moverBotao(e) {
    if (!arrastando.current) return;
    var posX = e.clientX || e.touches[0].clientX;
    var posY = e.clientY || e.touches[0].clientY;
    setBotaoPosicao({
      x: posX - offset.current.x,
      y: Math.min(
        window.innerHeight - 70,
        Math.max(10, posY - offset.current.y)
      ),
    });
  }

  // solta o botão e posiciona na borda
  function soltarBotao() {
    if (!arrastando.current) return;
    arrastando.current = false;
    var metade = window.innerWidth / 2;
    setBotaoPosicao((pos) => ({
      x: pos.x < metade ? 20 : window.innerWidth - 60,
      y: pos.y,
    }));
  }

  // ativa eventos de mouse e toque
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

  function abrir() {
    document.getElementById("uso").style.display = "flex";
    document.getElementById("conteudo").style.filter = "blur(50px)";
    document.getElementById("apiBtn").style.display = "none";
  }

  function aumentarFonte() {
    setTamanhoFonte((atual) => Math.min(atual + 2, 24)); // máximo: 24px
  }

  function diminuirFonte() {
    setTamanhoFonte((atual) => Math.max(atual - 2, 12)); // mínimo: 12px
  }

  return (
    <>
      {/* botão flutuante para abrir o OCR */}

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

      {/* tela de OCR aberta */}
      {telaAberta && (
        <div className={styles.container} ref={container}>
          {/* Tela de instruções de uso (inicialmente oculta) */}
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
                1.Toque no botão azul redondo (📷) para abrir o leitor.
                <br />
                2.Aponte a câmera para o nome do remédio.(evite reflexos para
                melhor reconhecimento)
                <br />
                3.Toque em "Começar".
                <br />
                4.Aguarde a leitura.
                <br />
                5.Se reconhecido, o app fala as informações.
                <br />
                6.em caso de dificuldade para enxergar, utilize o botão "A+"
                para aumentar e "A-" para diminuir fonte.
                <br />
                7.Toque em "Parar" ou feche o leitor se quiser sair.
              </p>
              <h2>Permita o uso da câmera no navegador quando solicitado.</h2>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div
            className={styles.conteudo}
            id="conteudo"
            style={{ fontSize: `${tamanhoFonte}px` }}
          >
            <div className={styles.row}>
              <button className={styles.info} onClick={abrir}>
                ?
              </button>
              
              <button className={styles.fechar} onClick={fecharTela}>
                ✕
              </button>
            </div>
            <h1>Leitor de medicamento <span>Aponte a câmera para o nome do remédio</span></h1>
            <video ref={video} autoPlay muted playsInline />
            <canvas ref={canvas} width="640" height="480" hidden />
            <button className={styles.botao} onClick={alternarLeitura}>
              {estaLendo ? "Parar" : "Iniciar Leitura"}
            </button>
            <div className={styles.resultado}>{textoLido}</div>
            <div className={styles.lista}>
              <button
                className={styles.diminui}
                id="diminui"
                onClick={diminuirFonte}
              >
                A-
              </button>
              <button
                className={styles.aumenta}
                id="aumenta"
                onClick={aumentarFonte}
              >
                A+
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeitorOCR;
