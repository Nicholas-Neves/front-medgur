import Styles from './Sobre.module.css';
import Maos from '../img/Mãos.png';
import Parça from '../img/IconeParceiros.png';

function Sobre() {
    return (
        <>
            <header className={Styles.SobreNos}>
                <h1 className={Styles.Titulo}>Sobre Nós</h1>
                <p className={Styles.Paragrafo}>Saiba um pouquinho sobre nós e no que acreditamos.</p>
                <button className={Styles.Botao}>
                    <img src={Parça} alt="Ícone parça" className={Styles.Icone} />
                    Parceiros
                </button>
            </header>
            <img src={Maos} alt="Mãos" className={Styles.Maos} />
        </>
    );
}

export default Sobre;
