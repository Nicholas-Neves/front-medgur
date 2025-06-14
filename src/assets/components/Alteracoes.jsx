import React from 'react';
import styles from './Alteracoes.module.css';

const Alteracoes = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Alterações nesta política</h2>
      <div className={styles.conteudo}>
        <p>
          Alteramos esta Política de Privacidade periodicamente. Nós não reduziremos seus direitos nesta Política de Privacidade sem seu consentimento explícito. Indicamos sempre a data em que as últimas alterações foram publicadas e oferecemos acesso às versões arquivadas para sua análise. Se as alterações forem significativas, forneceremos um aviso com mais destaque, o que inclui, no caso de alguns serviços, notificação por e-mail das alterações da Política de Privacidade.
        </p>
      </div>
    </section>
  );
};

export default Alteracoes;