import React from 'react';
import styles from './Analise.module.css';

{/* calculo para a porcentagem */}

function CircularProgress({ percentage }) {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#fff"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset,
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
          transition: 'stroke-dashoffset 0.5s ease',
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fill="#fff"
        fontSize="16"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
}

{/* constante para os cards */}

const Analise = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Analise</h1>
      <p className={styles.subtitle}>Sua atividade com o nosso site</p>
      <div className={styles.cardsContainer}>
        <div className={styles.leftCards}>
          <div className={styles.cardBlue}>
            <div className={styles.circle}>
              <CircularProgress percentage={65} />
            </div>
            <div className={styles.cardContent}>
              <h3>Descartado esse mês</h3>
              <p>Porcentagem de medicamentos descartado esse mês</p>
              <button className={styles.verTabelaButton}>Ver tabela</button>
            </div>
          </div>

          <div className={styles.cardDark}>
            <div className={styles.circle}>
              <div className={styles.pointsContainer}>
                <span className={styles.pointsValue}>2540</span>
                <span className={styles.pointsLabel}>PTS</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>Pontos Acumulados</h3>
              <p>Converta seus pontos acumulados por descontos!</p>
              <button className={styles.converterButton}>Converter</button>
            </div>
          </div>
        </div> {/* Fechamento correto do leftCards */}

        <div className={styles.qrCard}>
          <div className={styles.qrImageContainer}>
            <img 
              src="/src/assets/img/qr-code.png"
              alt="QR Code"
              className={styles.qrImage}
            />
          </div>
          <h3>QR CODE</h3>
          <div className={styles.qrText}>
            <p>Obtenha seu QR code e</p>
            <p>troque por cupons de</p>
            <p>descontos através de uma</p>
            <p>de nossas parceiras</p>
          </div>
          <button className={styles.qrButton}>
            QR CODE
          </button>
        </div>
      </div> {/* Fechamento do cardsContainer */}
    </div> // Fechamento do container
  );
};

export default Analise;