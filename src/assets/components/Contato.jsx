import Styles from './Contato.module.css';

function Contato({ imagens, titulo, texto, grande }) {
  return (
    <div className={Styles.caixa}>
      <img className={Styles.imagens} src={imagens} alt="Imagem ilustrativa" />
      <h3 className={Styles.titulo}>{titulo}</h3>
      <p className={Styles.texto}>{texto}</p>
      <p className={Styles.grande}>{grande}</p>
    </div>
  );
}

export default Contato;
