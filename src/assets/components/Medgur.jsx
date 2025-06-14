import Styles from './Medgur.module.css';
import MedgurImg from '../img/Medgur.png';

function Medgur() {
    return (
        <>
            <section className={Styles.Med}>
                <img src={MedgurImg} alt="Medgur" className={Styles.Medgur} />
                <p className={Styles.Pequeno}>Descarte, ajude e contribua com a MedGur.</p>
            </section>
            
        </>
    );
}

export default Medgur;
