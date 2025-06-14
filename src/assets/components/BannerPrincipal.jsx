import styles from './BannerPrincipal.module.css';

export default function BannerPrincipal() {
  return (
    <section className={styles.container}>
      <div className={styles.texto}>
        <h1 className={styles.titulo}>
          Compromisso com você <br /> e com o planeta
        </h1>
        <p className={styles.subtitulo}>
          Segurança dos seus dados e compromisso <br />
          com a saúde pública e ambiental
        </p>
      </div>
    </section>
  );
}
