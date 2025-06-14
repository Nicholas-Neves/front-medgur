import Styles from './Quem.module.css';

function Quem() {
    return (
        <>
            <header className={Styles.QuemSomos}>
                <h1 className={Styles.Somos}>Quem Somos</h1>
                <p className={Styles.Texto}>A Medgur oferece soluções seguras para o descarte de medicamentos e materiais perfurocortantes. Nosso compromisso é proteger a saúde das pessoas e o meio ambiente com praticidade, responsabilidade e inovação.</p>
            </header>
        </>
    );
}

export default Quem;
