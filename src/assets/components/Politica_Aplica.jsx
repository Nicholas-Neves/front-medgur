import React from 'react';
import styles from './Politica_Aplica.module.css';

const PoliticaAplica = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Quando esta política se aplica</h2>
      <div className={styles.conteudo}>
        <p>
          Esta Política de Privacidade se aplica a todos os serviços oferecidos pela Medpur e suas plataformas associadas, incluindo o site oficial, pontos de coleta parceiros e canais digitais utilizados para comunicação com os usuários.
        </p>
        
        <p>
          Esta política não se aplica a:
        </p>
        
        <ul className={styles.lista}>
          <li>práticas de coleta de informações de outras empresas, parceiros ou organizações que possam divulgar ou anunciar os serviços da Medpur;</li>
          <li>sites, plataformas ou produtos de terceiros que contenham links ou menções à Medpur, mas que possuam políticas de privacidade próprias e independentes.</li>
        </ul>
      </div>
    </section>
  );
};

export default PoliticaAplica;