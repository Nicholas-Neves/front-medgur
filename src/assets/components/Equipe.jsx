import Styles from './Equipe.module.css';
import Amani from '../img/amani.png';
import Aline from '../img/aline.png';
import Ebson from '../img/ebson.png';
import Vinicius from '../img/tatsumi.png';
import Gabriela from '../img/gabi.png';
import Gabriel from '../img/correa.png';
import Nicholas from '../img/nicholas.png';
import Rafael from '../img/rafa.jpg';



function Equipe() {
  return (
    <div className={Styles.Equipe}>
  <h2 className={Styles.titulo}>Nossa Equipe</h2>

  {/* Linha 1 */}
  <div className={Styles.linha}>
    <div className={Styles.membro}>
      <img src={Aline} className={Styles.foto} alt="Aline" />
      <p className={Styles.nome}>Aline</p>
    </div>
    <div className={Styles.membro}>
      <img src={Amani} className={Styles.foto} alt="Amãni" />
      <p className={Styles.nome}>Amãni</p>
    </div>
    <div className={Styles.membro}>
      <img src={Ebson} className={Styles.foto} alt="Ebson" />
      <p className={Styles.nome}>Ebson</p>
    </div>
    <div className={Styles.membro}>
      <img src={Rafael} className={Styles.foto} alt="Rafael" />
      <p className={Styles.nome}>Rafael</p>
    </div>
  </div>

  {/* Linha 2 */}
  <div className={Styles.linha}>
    <div className={Styles.membro}>
      <img src={Gabriel} className={Styles.foto} alt="Gabriel C." />
      <p className={Styles.nome}>Gabriel C.</p>
    </div>
    <div className={Styles.membro}>
      <img src={Gabriela} className={Styles.foto} alt="Gabriela" />
      <p className={Styles.nome}>Gabriela</p>
    </div>
    <div className={Styles.membro}>
      <img src={Nicholas} className={Styles.foto} alt="Nicholas" />
      <p className={Styles.nome}>Nicholas</p>
    </div>
    <div className={Styles.membro}>
      <img src={Vinicius} className={Styles.foto} alt="Vinicius" />
      <p className={Styles.nome}>Vinicius</p>
    </div>
  </div>
</div>
  )
}

export default Equipe;
