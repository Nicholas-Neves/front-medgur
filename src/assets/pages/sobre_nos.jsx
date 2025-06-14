import Sobre from '../components/Sobre'
import Header from '../components/Header';
import Quem from '../components/quem'
import Tres from '../components/tres' 
import Styles from "../components/tres.module.css"; 
import Alvo from '../img/Alvo.png'
import Oculos from '../img/Binóculo.png'
import Estrela from '../img/Estrela_mão.png'
import Equipe from '../components/Equipe';
import Medgur from '../components/Medgur';
import Footer from '../components/Footer';

function Sobre_Nos() {
  return (
    <div className={Styles.pageContainer}>
      <Header />
      <main className={Styles.mainContent}>
        <Sobre />
        <Quem />
        <div className={Styles.area}>
          <Tres
            imagens={Alvo}
            titulo='Missão'
            texto='Descarte seguro para um futuro saudável.' />
          <Tres
            imagens={Oculos}
            titulo='Visão'
            texto='Liderar soluções sustentáveis no descarte farmacêutico.' />
          <Tres
            imagens={Estrela}
            titulo='Valores'
            texto='Segurança, sustentabilidade e compromisso social.' />
        </div>
        <div className={Styles.faixa}>
          <h1 className={Styles.Frase}>Onde o cuidado termina, a responsabilidade começa</h1>
        </div>
        <Equipe />
        <Medgur />
      </main>
      <Footer />
    </div>
  )
}

export default Sobre_Nos;