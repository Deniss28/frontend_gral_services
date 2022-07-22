import { useEffect, useState } from 'react';
import styles from '../styles/Contact.module.css';
import ContactUs from '../assets/images/contact-us.svg'
import { validateEmail, validateMsg, validateName } from '../utils/Validation';
import ErrorLine from './ErrorLine';
import { SendEmail } from '../API';
import { toast } from 'react-toastify';
import Toast from './Toast';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();

  useEffect(() => {
    validateName({ name, setNameError })
    validateEmail({ email, setEmailError })
    validateMsg({ message, setMessageError })

    // ****
    if (send) {
      toast.success(send.msg)
      setName('')
      setEmail('')
      setMessage('')
      setSend()
    }
  }, [name, email, message, send])


  //! enviar data
  const handleSubmit = e => {
    e.preventDefault();
    setButtonLoading(true);
    if (!nameError & !emailError & !messageError) {
      SendEmail({ name, email, message, setSend }).then(() => {
        setButtonLoading(false);
      })
    }
  }

  return (
    <>
      <section className={styles.contact}>
        <div className={styles.contact__container}>
          <div className={styles.contact__grid}>
            <div>
              <h3>Contáctanos</h3>
              <div>
                <img src={ContactUs} alt="contactus-img" className={styles.contact__img} />
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className={styles.contact__form}>

                  <h2>CONTACT US</h2>
                  <p type="Nombre:">
                    <input name='name'
                      type='text'
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Write your name here.."
                    />
                    {nameError && <ErrorLine error={nameError} />}
                  </p>
                  <p type="Email:">
                    <input name='email'
                      required
                      type='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Let us know how to contact you back.."
                    />
                    {emailError && <ErrorLine error={emailError} />}
                  </p>
                  <p type="Mensajes:">
                    <input name='msg'
                      type='text'
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="What would you like to tell us.."
                    />
                    {messageError && <ErrorLine error={messageError} />}
                  </p>
                  <button
                    type='submit'
                    disabled={buttonLoading && true}
                  >{buttonLoading ? "Cargando..." : "Enviado"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Contact