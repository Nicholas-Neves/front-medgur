import Styles from "./Conteudo.module.css";
import reci from "../img/reciclagem.png";
import moca from "../img/moca.png";
import med from "../img/med.png";
import loca from "../img/loca.png";
import desc from "../img/desc.png";
import fx from "../img/fx.png";
import lucca from "../img/lucca.png";
import antonio from "../img/antonio.png";

function Conteudo() {
  return (
    <main>
      {/* inicio conteudo descarte */}
      <section className={Styles.conteudo}>
        <div className={Styles.title}>
          <h1>Descarte inteligente</h1>
        </div>
        <div className={Styles.subtitle_text}>
          <p>
            Aprenda a fazer o descarte de medicamentos corretamente e ganhe
            pontos em farmácias parceiras.
          </p>
        </div>
        <div className={Styles.button}>
          <img src={reci} alt="" />
          <a href="#">Descarte agora</a>
        </div>
      </section>
      {/* fim conteudo descarte */}
      {/* começo de dados e estatisticas */}
      <div className={Styles.estati}>
        <div className={Styles.icons}></div>
        <div className={Styles.numero}>
          <h2>0</h2>
          <br />
          <p>Medicamentos Coletados </p>
        </div>
        <div className={Styles.numero}>
          <h2>0</h2>
          <br />
          <p>Usuários Ativos</p>
        </div>
        <div className={Styles.numero}>
          <h2>0</h2>
          <br />
          <p>Farmácias Parceiras</p>
        </div>
        <div className={Styles.numero}>
          <h2>0</h2>
          <br />
          <p>Pontos Distribuídos</p>
        </div>
      </div>
      {/* fim de dados e estatisticas */}
      {/* inicio de conteudo passo a passo */}
      <section className={Styles.passo}>
        <div className={Styles.moca}>
          <img src={moca} alt="" />
        </div>
        <div className={Styles.medicamento}>
          <span>1</span>
          <img src={med} alt="Imagem 3d em vetores" />
          <div className={Styles.textpasso}>
            <h1 className={Styles.h1}>Separe</h1>
            <p>
              Reúna seus medicamentos vencidos ou que não utiliza mais em sua
              casa
            </p>
          </div>
        </div>
        <div className={Styles.localizacao}>
          <span>2</span>
          <img src={loca} alt="Imagem 3d em vetores" />
          <div className={Styles.textpasso2}>
            <h1>Encontre</h1>
            <p>
              Localize o ponto de coleta mais próximo usando nosso mapa
              interativo
            </p>
          </div>
        </div>
        <div className={Styles.desc}>
          <span>3</span>
          <img src={desc} alt="Imagem 3d em vetores" />
          <div className={Styles.textpasso3}>
            <h1>Ganhe</h1>
            <p>
              Acumule pontos e resgate descontos exclusivos nas melhores
              farmácias
            </p>
          </div>
        </div>
      </section>
      {/* fim de conteudo passo a passo */}
      {/* faixa slogam */}
      <div className={Styles.fxslogam}>
        <div className={Styles.slogam}>
          <h1>Onde o cuidado termina, a responsabilidade começa</h1>
        </div>
        <div className={Styles.faixa}>
          <div className={Styles.imgfxslogan}>
            <img src={fx} alt="" />
          </div>
        </div>
      </div>
      {/* fim de faixa slogam */}
      {/* conteudo final jogo e parceiros*/}
      {/* inicio lucca */}
      <div className={Styles.jogo}>
        <div className={Styles.lucca}>
          <img src={lucca} alt="Mascote do jogo lucca" />
        </div>
        <div className={Styles.titlejg}>
          <h1>Quer mais cupons ?</h1>
          <p>
            Acesse nosso jogo gratuito! Acumule pontos e troque por descontos
          </p>
          <div className={Styles.buttonjg}>
            <a href="#">jogar</a>
          </div>
        </div>
      </div>
      {/* fim lucca */}
      {/* inicio parceiros */}
      <div className={Styles.parceiros}>
        <div className={Styles.titleantonio}>
          <h1>Conheça nossos parceiros e veja nossos cupons!</h1>
        </div>
        <div className={Styles.buttonanto}>
          <a href="#">Cupons de descontos</a>
        </div>
        <div className={Styles.antonio}>
          <img src={antonio} alt="Mascote do jogo lucca" />
        </div>
      </div>
      {/* fim parceiros */}
      {/* fim de conteudo final jogo e parceiros*/}
    </main>
  );
}
export default Conteudo;
