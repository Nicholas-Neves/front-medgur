import React from 'react';
import styles from './Requisitos_do_Brasil.module.css';

const RequisitosDoBrasil = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Requisitos do Brasil</h2>
      <div className={styles.conteudo}>
        <p>
          Se a legislação brasileira de proteção de dados (como a Lei Geral de Proteção de Dados - LGPD) se aplicar ao tratamento das suas informações, a Medgur garante os seguintes direitos aos usuários:
        </p>

        <ul className={styles.lista}>
          <li>receber confirmação sobre o tratamento de suas informações;</li>
          <li>atualizar, corrigir, anonimizar, remover ou solicitar acesso aos seus dados pessoais;</li>
          <li>restringir ou se opor ao tratamento das suas informações;</li>
          <li>exportar suas informações para outro serviço.</li>
        </ul>

        <p>
          Para usuários localizados no Brasil, a Medgur é a controladora dos dados e se compromete a cumprir integralmente a legislação aplicável, assegurando a transparência, segurança e responsabilidade no uso dos seus dados.
        </p>
      </div>
    </section>
  );
};

export default RequisitosDoBrasil;