import styles from './Jogar.module.css';
import garota from '../img/garota.png';
import perfil from '../img/perfil.png'; // Adicionei a imagem do perfil

export default function Jogar() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Container do depoimento (substitui o textContainer) */}
        <div className={styles.textContainer}>
          <div className={styles.userInfo}>
            <img src={perfil} alt="Foto de perfil" className={styles.profilePic} />
            <div>
              <h3 className={styles.userName}>Ana Julia Lima</h3>
              <p className={styles.userHandle}>@anajulialima</p>
            </div>
          </div>
          <p className={styles.testimonial}>
            Eu amo os cupons da medgur, com eles eu compro medicamentos mais barato e ainda consigo me livrar dos que estão vencidos.
          </p>
        </div>

        {/* Container da imagem da garota (MANTIDO EXATAMENTE IGUAL) */}
        <div className={styles.imageContainer}>
          <img src={garota} alt="Garota segurando cupons" className={styles.image} />
        </div>
      </div>
    </section>
  );
}