import React, { useState } from 'react';
import styles from './Perfil.module.css';
import profileImage from '../img/profile.jpg';
import { FiEye, FiEdit } from 'react-icons/fi';

const CampoEditavel = ({ valorInicial = '', ocultavel = false, onFinalizarEdicao, placeholder = '', maxLength }) => {
  const [valor, setValor] = useState(valorInicial);
  const [editando, setEditando] = useState(false);
  const [visivel, setVisivel] = useState(true);

  const alternarEdicao = () => setEditando(true);
  const finalizarEdicao = () => {
    setEditando(false);
    if (onFinalizarEdicao) {
      onFinalizarEdicao(valor);
    }
  };
  const alternarVisibilidade = () => setVisivel(!visivel);

  return (
    <div className={styles.inputGroup}>
      {ocultavel && (
        <span className={styles.icon} onClick={alternarVisibilidade}>
          <FiEye />
        </span>
      )}
      <input
        className={styles.input}
        type="text"
        value={visivel ? valor : '••••••••••••'}
        readOnly={!editando}
        onChange={(e) => setValor(e.target.value)}
        onBlur={finalizarEdicao}
        onKeyDown={(e) => e.key === 'Enter' && finalizarEdicao()}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {!editando && (
        <span className={styles.icon} onClick={alternarEdicao}>
          <FiEdit />
        </span>
      )}
    </div>
  );
};

const Perfil = () => {
  const [nome, setNome] = useState("Lucca Senna");
  const [email, setEmail] = useState("luccasennadev@gmail.com");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={profileImage} alt="Foto de perfil" className={styles.avatar} />
        <div>
          <h1 className={styles.nome}>{nome}</h1>
          <p className={styles.tipo}>Pessoa física</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>Editar foto de perfil</button>
        <button className={styles.btn}>Compartilhar perfil</button>
        <button className={styles.btn}>Sair</button>
      </div>

      <form className={styles.form}>
        <CampoEditavel valorInicial={nome} onFinalizarEdicao={setNome} />
        <CampoEditavel valorInicial={email} onFinalizarEdicao={setEmail} />
        <CampoEditavel placeholder="Telefone" maxLength={11} />

        <div className={styles.duploCampo}>
          <CampoEditavel placeholder="CPF" ocultavel maxLength={11} />
          <CampoEditavel placeholder="CEP" ocultavel maxLength={8} />
        </div>
      </form>
    </div>
  );
};

export default Perfil;
