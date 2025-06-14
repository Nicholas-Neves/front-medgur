import Styles from './Footer.module.css';
import med from '../img/med.webp';
import imagens from '../img/instaNovo.png';
import whatsapp from '../img/whatsapp.png';
import linkedin from '../img/LinkeNovo1.png';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer1}>

        {/* Coluna 1: Logo + texto + redes */}
        <div className={Styles.coluna}>
          <img className={Styles.logo} src={med} alt="Logo MedGur" />
          <p className={Styles.textoDescricao}>
            Transformando o descarte de medicamentos em benefícios tangíveis para você e para o planeta.
          </p>
          <div className={Styles.redes}>
            <img className={Styles.icone} src={imagens} alt="Instagram" />
            <img className={Styles.icone} src={whatsapp} alt="WhatsApp" />
            <img className={Styles.icone} src={linkedin} alt="Linkedin" />
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className={Styles.coluna}>
          <h1 className={Styles.tituloColuna}>Navegação</h1>
          <ul className={Styles.lista}>
            <li className={Styles.itemLista}>Início</li>
            <li className={Styles.itemLista}>Pontos de coleta</li>
            <li className={Styles.itemLista}>Notícias</li>
            <li className={Styles.itemLista}>Sobre nós</li>
            <li className={Styles.itemLista}>Parceiros</li>
            <li className={Styles.itemLista}>Cupons</li>
          </ul>
        </div>

        {/* Coluna 3: Feedback */}
        <div className={Styles.coluna}>
          <h1 className={Styles.tituloColuna}>Sua opinião é importante</h1>
          <p className={Styles.feedbackTexto}>
            Dê seu feedback sobre a nossa plataforma. Com ele, aprimoraremos e otimizaremos ainda mais.
          </p>
          <form className={Styles.formulario}>
            <input
              type="email"
              placeholder="E-mail"
              className={Styles.input}
            />
            <textarea
              placeholder="Deixe seu feedback"
              className={Styles.textarea}
            ></textarea>
            <button type="submit" className={Styles.botao}>
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className={Styles.rodape}>
        <p className={Styles.textoRodape}>
          © 2025 EcoDescarte. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
