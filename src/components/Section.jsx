import styles from '../styles/Section.module.css';
import Agua from '../assets/images/agua.png'
import Luz from '../assets/images/luz.png'
import Mayolica from '../assets/images/mayolicas.png'
import Reparacion from '../assets/images/reparacion.png'

const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.section__grid}>
          <div className={styles.section__square}>
            <img src={Agua} alt="agua-img" />
          </div>
          <div className={styles.section__square}>
            <img src={Luz} alt="agua-img" />
          </div>
          <div className={styles.section__square}>
            <img src={Mayolica} alt="agua-img" />
          </div>
          <div className={styles.section__square}>
            <img src={Reparacion} alt="agua-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section