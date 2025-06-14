import Styles from "./Descarte.module.css";
import Local1 from "../img/localizacao.png";
import faixad from "../img/faixad.png";
import Localbotao from "../img/botaolocal.png";
import Pessoa1pg from "../img/pessoa1.png";
import Kitdescarte from "../img/kit.png";
import Mao from "../img/mão.png";
import Lixo from "../img/lixo.png";
import Ana from "../img/ana.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pontoc from "../img/localazul.png";

function Descarte() {
  return (
    <main>
    <section className={Styles.pgdescarte}>
      <Header />
      {/* -------- DESCARTE INTELIGENTE -------- */}
      <section className={Styles.descarte1}>
        <div className={Styles.textd1}>
          <h1 className={Styles.frased}>Descarte Inteligente</h1>
          <p className={Styles.t1}>
            Descarte corretamente e faça parte da transformação que protege nosso planeta!
          </p>
        </div>
        <img className={Styles.imglocal} src={Local1} alt="Ícone localização" />
      </section>

      {/* -------- POR QUE DESCARTAR -------- */}
      <section className={Styles.descarte2}>
        <div className={Styles.textd2}>
          <h1 className={Styles.frasepq}>Por que descartar?</h1>
          <p className={Styles.t2}>
            Para entender porque o descarte precisa ser feito da maneira correta, nós da Medgur preparamos um vídeo para você!
          </p>
        </div>
      </section>

      <p className={Styles.aperte}>Aperte e assista!</p>
      <div className={Styles.video}>
        <iframe
          src="https://www.youtube.com/embed/ID_DO_VIDEO"
          frameBorder="0"
          allowFullScreen
          title="Vídeo Descarte"
        ></iframe>
      </div>

      {/* -------- FAIXA -------- */}
      <div className={Styles.fx}>
        <div className={Styles.textfx}>
          <h1>Onde o cuidado termina, a responsabilidade começa</h1>
        </div>
        <div className={Styles.faixa_azul}>
          <img className={Styles.faixadd} src={faixad} alt="Faixa de descarte" />
        </div>
      </div>

      {/* -------- PASSO A PASSO -------- */}
      <section className={Styles.passoapasso}>
        <h1 className={Styles.frasepp}>Como fazer o descarte correto?</h1>

        <section className={Styles.conteudopp}>
          {/* Etapa 1 */}
          <div className={Styles.c1}>
            <div className={Styles.Pp}>
              <h4 className={Styles.n1}>1</h4>
            </div>
            <p className={Styles.frasepp1}>
              Separe os medicamentos vencidos ou sem uso e confira a validade.
            </p>
            <img className={Styles.mao} src={Mao} alt="Mão descarte" />
          </div>

          {/* Etapa 2 */}
          <div className={Styles.c2}>
            <div className={Styles.Sp}>
              <h4 className={Styles.n2}>2</h4>
            </div>
            <p className={Styles.frasepp2}>
              Nunca jogue medicamentos no lixo ou no vaso sanitário, isso contamina o meio ambiente.
            </p>
            <img className={Styles.lixo} src={Lixo} alt="Imagem lixo" />
          </div>

          {/* Etapa 3 */}
          <div className={Styles.c3}>
            <div className={Styles.Tp}>
              <h4 className={Styles.n3}>3</h4>
            </div>
            <p className={Styles.frasepp3}>
              Guarde os medicamentos no nosso kit de descarte, com segurança para o transporte.
            </p>
            <img className={Styles.anad} src={Ana} alt="Imagem Ana" />
          </div>

          {/* Etapa 4 */}
          <div className={Styles.c4}>
            <div className={Styles.Qp}>
              <h4 className={Styles.n4}>4</h4>
            </div>
            <p className={Styles.frasepp4}>
              Leve os medicamentos até uma farmácia ou UBS mais próxima.
            </p>
            <img className={Styles.pontoc} src={Pontoc} alt="Ponto de descarte" />
          </div>
        </section>
      </section>

      {/* -------- KIT DE COLETA -------- */}
      <section className={Styles.kitdescarte}>
        <div className={Styles.textkit}>
          <h1 className={Styles.frasekit}>Nosso kit sustentável!</h1>
          <p className={Styles.t4}>
            Com nosso kit de descarte, você consegue descartar seus medicamentos de maneira segura e sem prejudicar o meio ambiente!
          </p>
        </div>

        <div className={Styles.conteudokit}>
          <div className={Styles.imgkit}>
            <img src={Kitdescarte} alt="Kit de descarte" />
          </div>

          <section className={Styles.informacaokit}>
            <div className={Styles.frase1}>
              <h3>Feito de PLA</h3>
            </div>
            <div className={Styles.frase2}>
              <h3>Biodegradável</h3>
            </div>
            <div className={Styles.frase3}>
              <h3>Resistente</h3>
            </div>
          </section>
        </div>
      </section>

      {/* -------- PONTOS DE COLETA -------- */}
      <section className={Styles.pontos}>
        <div className={Styles.conteudoponto}>
          <h1 className={Styles.frasepontos}>Pontos de coleta</h1>
          <p className={Styles.t3}>
            Encontre os melhores lugares para descartar seus medicamentos!
          </p>

          <div className={Styles.botao}>
            <a
              className={Styles.botaotexto}
              href="https://maps.app.goo.gl/qoYdBo4gGEqam2Ks6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={Styles.btlocal} src={Localbotao} alt="Botão local" />
              Encontrar pontos
            </a>
          </div>
        </div>

        <img className={Styles.pessoapg} src={Pessoa1pg} alt="Pessoa da página" />
      </section>
      
    </section>
    <Footer />
    </main>
  );
}

export default Descarte;
