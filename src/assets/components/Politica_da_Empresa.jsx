import React from 'react';
import styles from './Politica_da_Empresa.module.css';

const Politica_da_Empresa = () => {
  return (
    <section className={styles.politicaContainer}>
      <h2 className={styles.subtitulo}>Política da Empresa</h2>
      <div className={styles.conteudo}>
        <p>
        A Medgur é uma empresa comprometida com a responsabilidade social, a sustentabilidade e a inovação.

        Nosso propósito é oferecer soluções seguras e acessíveis para o descarte consciente de medicamentos e materiais perfurocortantes, protegendo a saúde pública e o meio ambiente. Nossos valores são baseados na ética, no respeito à vida e na transparência.
        </p>
        <p>
        Atuamos com seriedade para garantir que todas as etapas do nosso processo – desde o design dos coletores até o destino final dos resíduos – sigam normas legais e ambientais rigorosas.

        Buscamos constantemente melhorias tecnológicas e parcerias que contribuam para um futuro mais limpo e seguro. Acreditamos que a educação ambiental e o acesso à informação são pilares fundamentais para transformar hábitos e preservar o planeta. 
        </p>
        <p>
        Na Medgur, não entregamos apenas produtos: entregamos compromisso, responsabilidade e impacto positivo para a sociedade.
        </p>
      </div>
    </section>
  );
};

export default Politica_da_Empresa;