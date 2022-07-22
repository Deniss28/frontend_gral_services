import styles from '../styles/Politicas.module.css';
import Garantia from '../assets/images/garantia.png'
import Honestidad from '../assets/images/honestidad.png'
import Puntualidad from '../assets/images/puntualidad.png'

const Politicas = () => {
  return (
    <section className={styles.politicas}>
      <div className={styles.politicas__container}>
        <div className={styles.politicas__grid}>
          <div className={styles.politicas__squares}>
            <img src={Honestidad} alt="honestidad-img" />
            <h4 className={styles.politicas__title}>Honestidad</h4>
          </div>
          <div className={styles.politicas__squares}>
            <img src={Garantia} alt="garantia-img" />
            <h4 className={styles.politicas__title}>Garantía</h4>
          </div>
          <div className={styles.politicas__squares}>
            <img src={Puntualidad} alt="garantia-img" />
            <h4 className={styles.politicas__title}>Puntualidad</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Politicas