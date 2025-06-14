import Styles from './Funciona.module.css';
import Foguete from '../img/Foguete.png';
import Seta from '../img/setaNova.png';

function Funciona() {
  return (
    <>
      <div className={Styles.Container}>
        <div className={Styles.Texto}>
          <h1 className={Styles.Titulo}>Como funciona a MedGur</h1>
          <p className={Styles.Paragrafo}>
            A Medgur atua promovendo o descarte correto de medicamentos e materiais perfurocortantes, como seringas.
            <br /><br />
            Fornecemos kits práticos e seguros para que a população possa armazenar esses resíduos em casa com responsabilidade.
            <br /><br />
            Depois, recolhemos os materiais e garantimos seu destino final adequado, reduzindo riscos à saúde e impactos ambientais.
          </p>
        </div>
        <img src={Foguete} alt="Foguete" className={Styles.Imagem} />
      </div>

      <div className={Styles.Container}>
        <div className={Styles.Texto}>
          <h1 className={Styles.Titu}>Planos para o futuro</h1>
          <p className={Styles.Para}>
            Juntos, promovemos responsabilidade social e impacto positivo no meio ambiente.
          </p>
        </div>
        <img src={Seta} alt="Seta" className={Styles.Imagem} />
      </div>
    </>
  );
}

export default Funciona;
