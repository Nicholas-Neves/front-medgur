import styles from './Cupons.module.css'; // importa os estilos css com escopo de módulo
import raia from '../img/raia.png'; // importa imagem da farmácia raia
import saopaulo from '../img/saopaulo.png'; // importa imagem da drogaria são paulo
import bifarma from '../img/bifarma.png'; // importa imagem da bifarma
import conde from '../img/conde.png'; // importa imagem da conde
import popular from '../img/popular.png'; // importa imagem da farmácia popular
import { useState, useEffect } from 'react'; // importa hooks do react

// array com os dados dos cupons que serão exibidos
const cupons = [
  { id: 1, dias: '3 dias', desconto: '30%', marca: 'Droga', nome: 'Raia', imagem: raia, pontos: 2000 },
  { id: 2, dias: '24 horas', desconto: '20%', marca: 'Drogaria', nome: 'São Paulo', imagem: saopaulo, pontos: 1500 },
  { id: 3, dias: '4 dias', desconto: '10%', marca: 'Drogarias', nome: 'Bifarma', imagem: bifarma, pontos: 500 },
  { id: 4, dias: '3 dias', desconto: '25%', marca: 'Farma', nome: 'Conde', imagem: conde, pontos: 1800 },
  { id: 5, dias: '2 dias', desconto: '15%', marca: 'Farmácia', nome: 'Popular', imagem: popular, pontos: 1000 },
];

export default function Cupons() {
  const [startIndex, setStartIndex] = useState(0); // controla o índice inicial do carrossel
  const [visibleCount, setVisibleCount] = useState(4); // define quantos cupons são exibidos ao mesmo tempo

  useEffect(() => {
    const handleResize = () => {
      // altera a quantidade de cupons visíveis com base no tamanho da tela
      setVisibleCount(window.innerWidth <= 768 ? 1 : 4);
    };

    handleResize(); // executa na primeira renderização
    window.addEventListener('resize', handleResize); // adiciona ouvinte para resize

    return () => window.removeEventListener('resize', handleResize); // limpa o ouvinte ao desmontar
  }, []);

  const next = () => {
    // avança o carrossel se não estiver no final
    if (startIndex + visibleCount < cupons.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    // retrocede o carrossel se não estiver no início
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // pega os cupons que devem ser exibidos atualmente
  const visibleCupons = cupons.slice(startIndex, startIndex + visibleCount);

  return (
    <section className={styles.cuponsSection}> {/* seção principal de cupons */}
      <h2 className={styles.title}>Cupons</h2>
      <p className={styles.subtitle}>Troque seus pontos por descontos!</p>

      <div className={styles.carouselContainer}> {/* container do carrossel */}
        <div className={styles.carouselWrapper}> {/* wrapper para controle dos botões */}
          <button onClick={prev} className={styles.arrow} disabled={startIndex === 0}>
            &lt;
          </button>

          <div className={styles.carousel}> {/* área onde os cupons são exibidos */}
            {visibleCupons.map((cupom) => (
              <div key={cupom.id} className={styles.card}> {/* card de cada cupom */}
                <div className={styles.cardHeader}> {/* cabeçalho do card com prazo e desconto */}
                  <span className={styles.dias}>{cupom.dias}</span>
                  <h3 className={styles.desconto}>{cupom.desconto}</h3>
                </div>
                <div className={styles.marcaContainer}> {/* mostra marca e nome */}
                  <span className={styles.marca}>{cupom.marca}</span>
                  <span className={styles.nome}>{cupom.nome}</span>
                </div>
                <img src={cupom.imagem} alt={cupom.nome} className={styles.logo} /> {/* logo da farmácia */}
                <p className={styles.descricao}>
                  A {cupom.marca} {cupom.nome} está disponibilizando {cupom.desconto} de desconto
                </p>
                <p className={styles.pontos}>{cupom.pontos} pontos!</p> {/* pontos necessários */}
                <button className={styles.botao}>Acessar site</button> {/* botão de ação */}
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className={styles.arrow}
            disabled={startIndex + visibleCount >= cupons.length}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
