import Styles from './tres.module.css';

function Tres({ imagens, titulo, texto }) {
  return (
    <div className={Styles.caixa}>
      <img className={Styles.imagens} src={imagens} alt="Imagem ilustrativa" />
      <h3 className={Styles.titulo}>{titulo}</h3>
      <p className={Styles.texto}>{texto}</p>
    </div>
  );
}

export default Tres;
