import React from 'react';
import styles from './Dados.module.css';

const Dados = () => {
  return (
    <section className={styles.politicaContainer}>
      <h2 className={styles.subtitulo}>Dados</h2>
      <div className={styles.conteudo}>
        <p>
          Na Medgur, levamos a sério a proteção dos seus dados e a transparência no tratamento das informações pessoais. Esta política explica como seus dados são coletados, utilizados e protegidos em nosso ambiente digital.
        </p>

        <h3 className={styles.topico}>1. Coleta de Informações</h3>
        <p>
          Coletamos apenas os dados necessários para o funcionamento de nossos serviços, como nome, e-mail, telefone e localização, sempre com base no seu consentimento.
        </p>

        <h3 className={styles.topico}>2. Uso das Informações</h3>
        <p>As informações são usadas para:</p>
        <ul className={styles.lista}>
          <li>Processar pedidos ou cadastros;</li>
          <li>Enviar comunicações e atualizações relevantes;</li>
          <li>Melhorar nossos serviços e experiência do usuário.</li>
        </ul>

        <h3 className={styles.topico}>3. Armazenamento e Segurança</h3>
        <p>
          Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e administrativas adequadas contra acesso não autorizado, perda ou destruição.
        </p>

        <h3 className={styles.topico}>4. Compartilhamento com Terceiros</h3>
        <p>Não compartilhamos dados pessoais com terceiros, exceto em casos de:</p>
        <ul className={styles.lista}>
          <li>Cumprimento legal ou ordem judicial;</li>
          <li>Processos operacionais com empresas parceiras contratadas, sob acordo de confidencialidade.</li>
        </ul>

        <h3 className={styles.topico}>5. Direitos do Usuário</h3>
        <p>Você pode, a qualquer momento:</p>
        <ul className={styles.lista}>
          <li>Solicitar acesso, correção ou exclusão de seus dados;</li>
          <li>Revogar o consentimento para uso de informações;</li>
          <li>Saber como seus dados estão sendo tratados.</li>
        </ul>

        <h3 className={styles.topico}>6. Cookies</h3>
        <p>
          Utilizamos cookies apenas para melhorar a experiência de navegação. Você pode configurar seu navegador para recusar ou apagar cookies.
        </p>

        <h3 className={styles.topico}>7. Atualizações</h3>
        <p>
          Esta política pode ser atualizada periodicamente. Sempre informaremos aos usuários em caso de mudanças relevantes.
        </p>
      </div>
    </section>
  );
};

export default Dados;