// import { Link } from 'react-router-dom'
import Electrician from '../assets/images/electrician.svg';

// styles
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (

    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__img}>
          <img src={Electrician} alt="electrician-img" />
        </div>
        <h3 className={styles.nav__title}>Servicios Generales Ortiz</h3>
      </div>
      <nav className={styles.nav__navbar}>
        <a className={styles.nav__link} href="">Servicios</a>
        <a className={styles.nav__link} href="">¿Quiénes Somos?</a>
        <a className={styles.nav__link} href="">Contáctanos</a>
      </nav>
    </div >
  )
}

export default Navbar