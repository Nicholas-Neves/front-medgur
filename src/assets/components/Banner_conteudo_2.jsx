import React from 'react';
import styles from './Banner_conteudo_2.module.css';
import bannerImage from '../img/banner.png'; // Certifique-se que a imagem está na pasta correta

const Banner_conteudo_2 = () => {
  return (
    <section className={styles.bannerContainer}>
      <img 
        src={bannerImage} 
        alt="Onde o cuidado termina, a responsabilidade começa" 
        className={styles.bannerImage}
      />
    </section>
  );
};

export default Banner_conteudo_2;