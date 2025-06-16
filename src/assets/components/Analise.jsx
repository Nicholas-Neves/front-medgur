import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import styles from './Analise.module.css';

const Analise = () => {
  const [medicamentosDescartados, setMedicamentosDescartados] = useState([]);
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    const dados = localStorage.getItem('descartes');
    if (dados) {
      const dadosParse = JSON.parse(dados);
      setMedicamentosDescartados(dadosParse);

      const dadosEncoded = btoa(JSON.stringify(dadosParse));
      const link =
        `https://front-medgur-teste-7x2s1d39b-nicholas-neves-projects.vercel.app/confirmar?dados=${dadosEncoded}`;

      setQrValue(link);
    }
  }, []);

  const gerarNovoQR = () => {
    const dados = localStorage.getItem('descartes');
    if (dados) {
      const dadosParse = JSON.parse(dados);
      const dadosEncoded = btoa(JSON.stringify(dadosParse));
      const link =
        `https://front-medgur-teste-7x2s1d39b-nicholas-neves-projects.vercel.app/confirmar?dados=${dadosEncoded}`;

      setQrValue(link);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Análise</h1>
      <p className={styles.subtitle}>Sua atividade com o nosso site</p>

      <div className={styles.cardsContainer}>
        <div className={styles.leftCards}>
          {/* LISTA */}
          <div className={styles.cardBlueList}>
            <div className={styles.cardContent}>
              <h3>Medicamentos Descartados</h3>
              {medicamentosDescartados.length === 0 ? (
                <p className={styles.vazio}>Nenhum medicamento descartado ainda.</p>
              ) : (
                <div className={styles.lista}>
                  {medicamentosDescartados.map((item, index) => (
                    <div key={index} className={styles.item}>
                      <div>
                        <strong>{item.nome}</strong> ({item.quantidade} un.)
                      </div>
                      <span>{item.data}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CARD DE PONTOS */}
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
        </div>

        {/* CARD QR */}
        <div className={styles.qrCard}>
          <div className={styles.qrImageContainer}>
            {qrValue ? (
              <QRCode
                value={qrValue}
                size={128}
                bgColor="#FFFFFF"
                fgColor="#000000"
              />
            ) : (
              <p className={styles.vazio}>Nenhum QR gerado.</p>
            )}
          </div>
          <h3>QR CODE</h3>
          <div className={styles.qrText}>
            <p>Leve a uma farmácia para validar seu descarte</p>
          </div>
          <button className={styles.qrButton} onClick={gerarNovoQR}>
            Gerar QR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analise;
