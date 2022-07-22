import styles from '../styles/Servicios.module.css';

const Servicios = () => {
  return (
    <section className={styles.servicios}>
      {/* <a href='https://www.freepik.es/fotos/muestra-colores'>Foto de muestra de colores creado por Racool_studio - www.freepik.es</a> */}
      <h2>Nuestros Servicios</h2>
      <div className={styles.servicios__container}>
        <div className={styles.servicios__flex}>
          <div className={styles.servicios__maxw}>
            <h3>Electricidad en general</h3>
            <ul>
              <li>Instalaciones Eléctricas</li>
              <li>Pozos a Tierra</li>
              <li>Instalación y/o mantenimiento de Equipos Aire Acondicionado</li>
              <li>Mantenimiento y/o reparación de Líneas Blancas (Refrigeradoras y Lavadoras)</li>
            </ul>
          </div>
          <div>
            <h3>Acabados</h3>
            <ul>
              <li>Trabajos con Drywall</li>
              <li>Enchapado de Mayólicas</li>
              <li>Remodelación de Baños</li>
              <li>Instalaciones Sanitarias y Gasfitería en general</li>
              <li>Pintura interior y exterior.</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Servicios