import Styles from './Parcerias.module.css';
import Quebra from '../img/QuebraCabeca.png';
import Parça from '../img/IconeParceiros.png';

function Parcerias() {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Parcerias}>
                <h1 className={Styles.Titulo}>Parcerias</h1>
                <p className={Styles.Paragrafo}>
                    Você que se interessou na nossa empresa, saiba como se juntar a nós.
                </p>
                <button className={Styles.Botao}>
                    <img src={Parça} alt="Ícone parça" className={Styles.Icone} />
                    Sobre Nós
                </button>
            </div>
            <img src={Quebra} alt="QuebraCabeca" className={Styles.Quebra} />
        </div>
    );
}

export default Parcerias;
