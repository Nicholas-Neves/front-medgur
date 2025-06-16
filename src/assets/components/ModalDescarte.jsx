import { useState } from 'react';
import styles from './ModalDescartar.module.css';

export default function ModalDescartar({ onClose }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = () => {
    if (!nome || !quantidade || !motivo || !tipo) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const dados = {
      nome,
      quantidade,
      motivo,
      tipo,
    };

    const listaAntiga = JSON.parse(localStorage.getItem('descartes')) || [];
    const novaLista = [...listaAntiga, dados];

    localStorage.setItem('descartes', JSON.stringify(novaLista));

    // Redireciona para página de perfil
    window.location.href = '/profile';
  };

  const handleLimpar = () => {
    setNome('');
    setQuantidade('');
    setMotivo('');
    setTipo('');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Descartar medicamento</h2>

        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Nome do remédio"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Quantidade</label>
            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.sections}>
          <div className={styles.left}>
            <h3>Motivos</h3>
            <div className={styles.buttons}>
              {[
                'Vencimento da validade',
                'Mudança na prescrição médica',
                'Interrupção do tratamento',
                'Armazenamento incorreto',
                'Embalagem danificada ou violada',
                'Esquecimento ou abandono do tratamento',
                'Reação adversa ao medicamento',
                'Outros',
              ].map((item, index) => (
                <button
                  key={index}
                  className={motivo === item ? styles.selecionado : ''}
                  onClick={() => setMotivo(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <h3>Tipo</h3>
            <div className={styles.buttons}>
              {[
                'Comprimidos',
                'Cápsulas',
                'Gotas (Solução oral)',
                'Xaropes',
                'Injetáveis (ampolas/seringas)',
                'Pomadas',
                'Cremes',
                'Supositórios',
                'Sprays/Aerossóis',
                'Outros',
              ].map((item, index) => (
                <button
                  key={index}
                  className={tipo === item ? styles.selecionado : ''}
                  onClick={() => setTipo(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.finalizar} onClick={handleSubmit}>
            Finalizar Descarte
          </button>
          <button className={styles.limpar} onClick={handleLimpar}>
            Limpar
          </button>
        </div>

        <button onClick={onClose} className={styles.close}>
          ❌
        </button>
      </div>
    </div>
  );
}
