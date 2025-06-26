import React from 'react';
import styles from './Jogar_cupons.module.css';
import guaxinimImg from '../img/guaxinim.png';
import iconeJogarImg from '../img/icone_jogar.png';

const Jogar_cupons = () => {
  return (
    <section className={styles.wrapper}>
        
      <div className={styles.content}>

        <img src={guaxinimImg} alt="Guaxinim MedRush" className={styles.guaxinim} />

        <div className={styles.textos}>
          <h2 className={styles.titulo}>Quer mais cupons ?</h2>

          <p className={styles.subtitulo}>
            Acesse nosso jogo gratuito! Acumule pontos e troque por descontos
          </p>

          <button className={styles.botao}>
            <img src={iconeJogarImg} alt="Ícone Jogar" className={styles.iconeImg} />
            Jogar
          </button>

        </div>
      </div>
    </section>
  );
};

export default Jogar_cupons;