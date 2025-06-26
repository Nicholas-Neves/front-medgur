import React from 'react';
import styles from './Velho_cupons.module.css';
import bannerAntonio from '../img/velho.png';

const Velho_cupons = () => {
  return (
    <section className={styles.wrapper}>
        
      <div className={styles.content}>

        <div className={styles.texto}>
          <h2>Conheça nossos parceiros <br />e veja nossos cupons!</h2>
        </div>

        <div className={styles.imagemEBotao}>
          <img src={bannerAntonio} alt="Banner Antonio" className={styles.imagem} />
          <button className={styles.botao}>Cupons de descontos</button>
        </div>

      </div>
    </section>
  );
};

export default Velho_cupons;