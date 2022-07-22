import { BrowserRouter } from 'react-router-dom'
import './styles/App.css';
import Home from './pages/Home'
import Toast from './components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='app__container'>
      <BrowserRouter>
        <Toast />
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App
