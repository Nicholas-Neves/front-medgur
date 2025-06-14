import styles from "./Dados1.module.css"
import { RefreshCw, RotateCcw } from "lucide-react"
import qrCode from "../img/qr-code.png"

// Placeholder para o QR code
// const qrCodePlaceholder = "/placeholder.svg?height=120&width=120"

export default function Dados() {
  return (
    <div className={styles.container}>
      <a className={styles.voltar} href="#">
        {"\u2190"} Voltar
      </a>

      <div className={styles.cardsContainer}>
        {/* Card Principal Azul */}
        <div className={styles.pontosCard}>
          <RefreshCw className={styles.refreshIcon} size={20} />

          <div className={styles.mainContent}>
            <div className={styles.leftContent}>
              <div className={styles.infoContainer}>
                <div className={styles.circulo}>

                  <span className={styles.numero}>2540</span>
                  <span className={styles.unidade}>PTS</span>

                </div>
                <div className={styles.texto}>
                  <span className={styles.tituloVerde}>Pontos</span>
                  <span className={styles.textoAcumulados}>acumulados</span>
                  <p className={styles.subTexto}>Você tem pontos para converter</p>
                </div>
              </div>

              <div className={styles.infoContainer}>
                <div className={styles.circulo}>
                  <span className={styles.numero}>25%</span>
                  <span className={styles.unidadePequena}>cupons</span>
                </div>

                <div className={styles.texto}>
                  <span className={styles.tituloVerde}>Cupons</span>
                  <span className={styles.textoAcumulados}>acumulados</span>
                  <p className={styles.subTexto}>Você tem cupons para gastar</p>
                </div>
              </div>
            </div>

            <div className={styles.rightContent}>
              <img src={qrCode || "/placeholder.svg"} alt="QR Code" className={styles.qrImage} />
              <div className={styles.qrTexto}>
                <strong>QR CODE</strong>
                <p>Gere um QR code com seus cupons acumulados e gaste em uma de nossas farmácias parceiras</p>
                <button className={styles.botaoQRCode}>QR CODE</button>
              </div>

            </div>
          </div>

          <p className={styles.obsTexto}>
            Todos os pontos trocados por cupons serão redigidos para o seu perfil onde será feita um novo QR CODE que
            poderá ser apresentado até uma de nossas parceiras.
          </p>
        </div>

        {/* Cards Laterais */}
        <div className={styles.sideCards}>
          {/* Card Verde/Teal - Descartado */}

          <div className={styles.descartadoCard}>
            <RotateCcw className={styles.descartadoIcon} size={20} />

            <div className={styles.descartadoContent}>
              <div className={styles.circuloDescartado}>
                <span className={styles.numeroDescartado}>65%</span>
              </div>

              <div className={styles.descartadoTexto}>
                <h3 className={styles.descartadoTitulo}>Descartado esse mês</h3>
                <p className={styles.descartadoSubtexto}>Porcentagem de medicamentos descartado esse mês</p>
                <button className={styles.botaoGrafico}>Ver Gráfico</button>
              </div>

            </div>
          </div>

          {/* Card Branco - Medirush */}
          <div className={styles.medirushCard}>
            <div className={styles.medirushContent}>
              
              <h3 className={styles.medirushTitulo}>
                <span className={styles.querMais}>Quer mais</span> <span className={styles.pontos}>pontos ?</span>
              </h3>

              <p className={styles.medirushSubtitulo}>Jogue o MedRush</p>
              <button className={styles.botaoJogar}>Jogar</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
