import Contact from '../components/Contact';
import Galeria from '../components/Galeria';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Politicas from '../components/Politicas';
import Section from '../components/Section';
import Servicios from '../components/Servicios';

const Home = () => {
  return (
    <div className='home__container'>
      <Navbar />
      <Hero />
      <Section />
      <Politicas />
      <Servicios />
      <Galeria />
      <Contact />
    </div>
  )
}

export default Home