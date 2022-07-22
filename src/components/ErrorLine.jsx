import styles from '../styles/Contact.module.css';

const ErrorLine = ({ error }) => {
  return (
    <span className={styles.error}>{error}</span>
  )
}

export default ErrorLine