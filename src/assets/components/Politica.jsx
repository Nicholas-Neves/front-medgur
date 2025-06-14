import React from 'react';
import styles from './Politica.module.css';

const Politica = () => {
  return (
    <section className={styles.politicaContainer}>
      <h2 className={styles.subtitulo}>Política de privacidade</h2>
      <div className={styles.conteudo}>
        <p>
          Na Medgur, a proteção dos seus dados é prioridade. Valorizamos a transparência e o respeito à privacidade dos nossos usuários, clientes e parceiros. Todas as informações coletadas por nossos sistemas, seja por formulários, cadastros ou interações digitais, são utilizadas exclusivamente para fins operacionais, melhoria contínua dos serviços e comunicação com o usuário.
        </p>
        <p>
          Os dados pessoais são armazenados de forma segura, com acesso restrito e criptografia adequada, conforme os padrões da Lei Geral de Proteção de Dados (LGPD - Lei nº13.709/2018). Não vendemos, alugamos ou compartilhamos informações com terceiros sem o seu consentimento prévio.
        </p>
        <p>
          Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Em caso de dúvidas ou solicitações, entre em contato com nosso canal de atendimento.
        </p>
        <p>
          Nos comprometemos a revisar e atualizar constantemente nossa política, assegurando total conformidade com as melhores práticas de segurança digital e ética no tratamento de informações.
        </p>
      </div>
    </section>
  );
};

export default Politica;