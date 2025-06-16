import React, { useEffect, useState } from 'react';
import styles from './Confirmar.module.css';

const Confirmar = () => {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dados = params.get('dados');

    if (dados) {
      try {
        const decoded = JSON.parse(atob(dados));
        setMedicamentos(decoded);
      } catch (error) {
        console.error('Erro ao decodificar os dados:', error);
      }
    }
  }, []);

  const handleConfirmar = () => {
    alert('Descarte confirmado com sucesso!');
    window.location.href = '/'; // Redireciona pra home ou onde quiser
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Confirmação de Descarte</h1>
      <p className={styles.subtitle}>Confira os medicamentos que você está descartando:</p>

      {medicamentos.length === 0 ? (
        <p className={styles.vazio}>Nenhum dado encontrado. Verifique se o QR Code foi gerado corretamente.</p>
      ) : (
        <div className={styles.lista}>
          {medicamentos.map((item, index) => (
            <div key={index} className={styles.item}>
              <div>
                <strong>{item.nome}</strong> ({item.quantidade} un.)
              </div>
              <span>{item.data}</span>
            </div>
          ))}
        </div>
      )}

      <button
        className={styles.confirmButton}
        onClick={handleConfirmar}
        disabled={medicamentos.length === 0}
      >
        Confirmar Descarte
      </button>
    </div>
  );
};

export default Confirmar;
