"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./Carrossel1.module.css"

export default function Carrossel({ cupons }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const carrosselRef = useRef(null)

  const cuponsDefault = [
    {
      percentual: "10",
      pontos: "1000",
      pontosNecessarios: "500",
      dias: "1",
      descricao: "A Droga Raia está oferecendo 10%\nde desconto por 1000 pontos!"
    },
    {
      percentual: "15",
      pontos: "1500",
      pontosNecessarios: "750",
      dias: "2",
      descricao: "A Droga Raia está oferecendo 15%\nde desconto por 1500 pontos!"
    },
    {
      percentual: "20",
      pontos: "2000",
      pontosNecessarios: "1000",
      dias: "3",
      descricao: "A Droga Raia está oferecendo 20%\nde desconto por 2000 pontos!"
    },
    {
      percentual: "25",
      pontos: "2500",
      pontosNecessarios: "1250",
      dias: "4",
      descricao: "A Droga Raia está oferecendo 25%\nde desconto por 2500 pontos!"
    },
    {
      percentual: "30",
      pontos: "3000",
      pontosNecessarios: "1500",
      dias: "5",
      descricao: "A Droga Raia está oferecendo 30%\nde desconto por 3000 pontos!"
    },
    {
      percentual: "35",
      pontos: "3500",
      pontosNecessarios: "1750",
      dias: "6",
      descricao: "A Droga Raia está oferecendo 35%\nde desconto por 3500 pontos!"
    },
    {
      percentual: "40",
      pontos: "4000",
      pontosNecessarios: "2000",
      dias: "7",
      descricao: "A Droga Raia está oferecendo 40%\nde desconto por 4000 pontos!"
    },
    {
      percentual: "45",
      pontos: "4500",
      pontosNecessarios: "2250",
      dias: "8",
      descricao: "A Droga Raia está oferecendo 45%\nde desconto por 4500 pontos!"
    },
    {
      percentual: "50",
      pontos: "5000",
      pontosNecessarios: "2500",
      dias: "9",
      descricao: "A Droga Raia está oferecendo 50%\nde desconto por 5000 pontos!"
    },
  ]

  const cuponsData = cupons || cuponsDefault

  useEffect(() => {
    setTotalSlides(Math.ceil(cuponsData.length / 3))
  }, [cuponsData])

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.carrosselContainer}>
      <h2 className={styles.titulo}>Cupons disponíveis</h2>

      <div className={styles.carrosselWrapper}>
        <button
          className={`${styles.navButton} ${styles.prevButton} ${currentIndex === 0 ? styles.disabled : ""}`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.carrosselContent} ref={carrosselRef}>
          <div className={styles.carrosselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {cuponsData.map((cupom, index) => (
              <div className={styles.carrosselItem} key={index}>
                <div className={styles.cupomCard}>
                  <div className={styles.diasTag}>{cupom.dias} dias</div>

                  <div className={styles.cupomContent}>
                    <div className={styles.percentSection}>
                      <span className={styles.percentValue}>{cupom.percentual}</span>
                      <span className={styles.percentSymbol}>%</span>
                    </div>

                    <div className={styles.arrowSection}>
                      <span className={styles.arrow}>⟶</span>
                    </div>

                    <div className={styles.pontosSection}>
                      <span className={styles.pontosValue}>{cupom.pontos}</span>
                      <span className={styles.pontosLabel}>Pontos</span>
                    </div>
                  </div>

                  <div className={styles.descricao}>
                    {cupom.descricao.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <button className={styles.trocarButton}>trocar</button>
                    <div className={styles.logoContainer}>
                      <img
                        src="/raia-logo.png"
                        alt="Logo Droga Raia"
                        className={styles.raiaLogo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton} ${currentIndex === totalSlides - 1 ? styles.disabled : ""}`}
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={styles.indicators}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
