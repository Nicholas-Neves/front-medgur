import Styles from './Voce.module.css';
import Img from '../img/Apertar.png';

function Voce() {
    return (
        <>
    <h1 className={Styles.Titulo}>Você conosco!</h1>
    <section className={Styles.VoceSection}>
      <img src={Img} alt="Mãos unidas" className={Styles.BackgroundImage} />
      <div className={Styles.Overlay}>
        <div className={Styles.TextoContainer}>
          <p className={Styles.TextoEsquerda}>
            Com a colaboração de parceiros, ampliamos nosso alcance e promovemos o descarte seguro de medicamentos.
          </p>
          <p className={Styles.TextoDireita}>
            Juntos, promovemos responsabilidade social e impacto positivo no meio ambiente.
          </p>
        </div>
      </div>
    </section>
    </>
    );
}


export default Voce;
