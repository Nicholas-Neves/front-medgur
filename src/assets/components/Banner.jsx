import styles from './Banner.module.css';
import bannerImg from '../img/banner.png';

export default function Banner() {
  return (
    <img 
      src={bannerImg} 
      alt="Onde o cuidado termina, a responsabilidade começa" 
      className={styles.bannerImage}
    />
  );
}