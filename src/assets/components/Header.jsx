import Styles from "./Header.module.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <img src={logo} alt="" />
      </div>
      <nav className={Styles.navegation}>
        <Link to="/">Início</Link>
        <Link to="/descarte">Pontos de descarte</Link>
        <Link to="#">Notícias</Link>
        <Link to="/sobre-nos">Sobre nós</Link>
        <Link to="/parceiros">Parcerias</Link>
        <Link to="/cupom">Cupons</Link>
      </nav>
      <div className={Styles.login}>
        <Link to="/profile">Entrar</Link>
        <div className={Styles.fundo}></div>
      </div>
    </header>
  );
}
export default Header;