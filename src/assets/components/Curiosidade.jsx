import styles from './Curiosidade.module.css';
import pessoas from '../img/pessoas.png'; 

export default function Curiosidade() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Curiosidade</h2>
          <p className={styles.subtitle}>
            Além dos cupons nossos parceiros são comprometidos com a sustentabilidade, é mais que descarte, 
            se preocupar com o meio ambiente e a saúde pública.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={pessoas} alt="Pessoas cuidando do meio ambiente" className={styles.image} />
        </div>
      </div>
    </section>
  );
}