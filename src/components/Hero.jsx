import styles from '../styles/Hero.module.css';
import worker from '../assets/images/worker.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div>
          <h1>Proveedores de Servicios <span>en General</span> </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
            corporis.
          </p>
          <a href="#">Ver más</a>
        </div>
        <div className={styles.hero__img}>
          <img src={worker} alt="worker-img" />
        </div>
      </div>
    </div>
  )
}

export default Hero;