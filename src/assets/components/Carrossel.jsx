import React, { useState, useEffect } from 'react';
import styles from './Carrossel.module.css'; // importa o CSS modular
import banner1 from '../../assets/img/banner1.png'; // importa as imagens
import banner2 from '../../assets/img/banner2.png';
import banner3 from '../../assets/img/banner3.png';

// array com os banners
const banners = [banner1, banner2, banner3];

// intervalo de tempo entre a troca automática dos banners (5 segundos)
const INTERVALO_TROCA = 5000;

// duração da transição de fade (0.8 segundos)
const DURACAO_TRANSICAO = 800;

const Carrossel = () => {
  // estado que guarda o índice do banner atual
  const [indexAtual, setIndexAtual] = useState(0);

  // estado que controla o efeito de fade (true = visível, false = invisível)
  const [fade, setFade] = useState(true);

  // efeito para trocar os banners automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // aplica o fade-out

      setTimeout(() => {
        // avança para o próximo banner (loop infinito com %)
        setIndexAtual((prev) => (prev + 1) % banners.length);
        setFade(true); // aplica o fade-in
      }, DURACAO_TRANSICAO);
    }, INTERVALO_TROCA);

    // limpa o intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, []);

  // função chamada ao clicar nos pontinhos (indicadores)
  const handlePontoClick = (i) => {
    if (i !== indexAtual) { // só troca se for um banner diferente do atual
      setFade(false); // aplica o fade-out
      setTimeout(() => {
        setIndexAtual(i); // muda o banner
        setFade(true); // aplica o fade-in
      }, DURACAO_TRANSICAO);
    }
  };

  return (
    <div className={styles.carrossel}>
      {/* container do banner visível */}
      <div className={styles.bannerContainer}>
        <img
          src={banners[indexAtual]} // imagem atual
          alt={`Banner ${indexAtual + 1}`} // acessibilidade
          className={`${styles.banner} ${fade ? styles.fadeIn : styles.fadeOut}`} // efeito de fade
        />
      </div>

      {/* indicadores abaixo do banner */}
      <div className={styles.indicadores}>
        {banners.map((_, i) => (
          <span
            key={i}
            className={`${styles.ponto} ${i === indexAtual ? styles.ativo : ''}`} // ativa o ponto atual
            onClick={() => handlePontoClick(i)} // troca de banner ao clicar
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
