import Parcerias from '../components/Parcerias'
import Voce from '../components/Voce'
import VoceStyles from '../components/Voce.module.css';
import ContatoStyles from '../components/Contato.module.css';
import Funciona from '../components/Funciona';
import Gmail from '../img/gmailNova.png'
import Whats from '../img/whatsNova.png'
import Linkedin from '../img/linkedinNova.png'
import Contato from '../components/Contato'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Parceiros() {
  return (
    <>
    <Header />
      <Parcerias />
      <Voce />
      <div className={VoceStyles.faixa}>
        <h1 className={VoceStyles.Frase}>Onde o cuidado termina, a responsabilidade começa</h1>
      </div>
      <Funciona />

      <div className={ContatoStyles.area}>
        <Contato
          imagens={Gmail}
          titulo="E-mail"
          texto="medgursuporte@gmail.com"
          grande="Mande um E-mail para a gente que um de nossos integrantes o retornará o mais breve possível."
        />

        <Contato
          imagens={Whats}
          titulo="WhatsApp"
          texto="+55 11 95555-0000"
          grande="Nosso WhatsApp está fora de área no momento, mas nossa equipe logo corrigirá esse problema."
        />

        <Contato
          imagens={Linkedin}
          titulo="Linkedin"
          texto="www.linkedin.com/in/MedGur-oficial"
          grande="Mande mensagens e conexões para uma de nossas redes sociais."
        />
      </div>
      <Footer />
    </>
  )
}

export default Parceiros;