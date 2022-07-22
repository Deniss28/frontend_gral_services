import styles from '../styles/Galeria.module.css'
import Concrete from '../assets/images/concrete.jpg';
import ElectricalM from '../assets/images/electrical-man.jpg';
import Plumbing from '../assets/images/plumbing-repair-service.jpg';
import Paint from '../assets/images/paint.jpg';
import Drywall from '../assets/images/drywall.jpg';
import AirC from '../assets/images/air-c.jpg';

const Galeria = () => {
  return (
    <main className={styles.galeria}>
      <div className={styles.galeria__container}>
        <div className={styles.galeria__grid}>
          <div>
            <img src={Concrete} alt="concrete-img" />
          </div>
          <div>
            <img src={ElectricalM} alt="concrete-img" />
          </div>
          <div>
            <img src={Plumbing} alt="concrete-img" />
          </div>
          <div>
            <img src={Paint} alt="concrete-img" />
          </div>
          <div>
            <img src={Drywall} alt="concrete-img" />
          </div>
          <div>
            <img src={AirC} alt="concrete-img" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Galeria