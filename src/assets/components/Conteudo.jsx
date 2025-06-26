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
      {/* inicio conteudo descarte inteligente*/}
      <section className={Styles.sectiondescarte}>
        <div className={Styles.descartetexto}>
          <h1 className={Styles.descartetitulo}>
            Descarte inteligente
          </h1>
          <p className={Styles.descarteparagrafo}>
            Aprenda a fazer o descarte de medicamentos corretamente e ganhe
            pontos em farmácias parceiras.
          </p>
        </div>

        <button className={Styles.botao}>
          <img src={reci} alt="reciclagem" className={Styles.icone} />
          Descarte Agora
        </button>

      </section>
      {/* fim conteudo descarte inteligente*/}
      {/*inicio do Contador de Dados do Site*/}
      <section className={Styles.contador}>
        <div className={Styles.numerador}>
          <h1>0</h1>
          <p>Medicamentos Coletados</p>
        </div>

        <div className={Styles.numerador}>
          <h1>8</h1>
          <p>Usuários Ativos</p>
        </div>

        <div className={Styles.numerador}>
          <h1>0</h1>
          <p>Farmácias Parceiras</p>
        </div>

        <div className={Styles.numerador}>
          <h1>0</h1>
          <p>Pontos Distrubuídos</p>
        </div>
      </section>

      {/*fim do Contador de Dados do Site*/}

      <section className={Styles.passoapasso}>
        <div className={Styles.mulher}>

          <img src={moca} alt="Mulher" className={Styles.moca} />

        </div>

        <div className={Styles.passos}>





          <div className={Styles.passo1}>

            <img src={med} alt="Imagem 3d em vetores" />
            <div className={Styles.textpasso1}>
              <span>1</span>
              <h1 className={Styles.h1}>Separe</h1>
              <p>
                Reúna seus medicamentos vencidos ou que não utiliza mais em sua
                casa
              </p>
            </div>

          </div>
          <div className={Styles.passo2}>

            <img src={loca} alt="Imagem 3d em vetores" />
            <div className={Styles.textpasso1}>
              <span>2</span>
              <h1 className={Styles.h1}>Encontre</h1>
              <p>
                 Localize o ponto de coleta mais próximo usando nosso mapa
              interativo

              </p>
            </div>

          </div>
          <div className={Styles.passo3}>

            <img src={desc} alt="Imagem 3d em vetores" />
            <div className={Styles.textpasso1}>
              <span>3</span>
              <h1 className={Styles.h1}>Ganhe</h1>
              <p>
                Acumule pontos e resgate descontos exclusivos nas melhores
              farmácias
              </p>
            </div>

          </div>


        </div>
      </section>
    </main>
  );
}
export default Conteudo;