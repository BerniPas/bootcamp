/* 
import './css/App.css' */



import OldApp from './pages/OldApp'

//4. Importar las configuraciones de ruteo de react-router
import { Routes, Route } from 'react-router-dom'
import Navegacion from './componente/Navegacion';
import Login from './pages/Login'
import Home from './pages/Home'
/* import Footer from './componente/Footer' */


function App() {


  return (
    <>

      <Navegacion />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/old' element={<OldApp />} />
      </Routes>
      
    </>
  )
}

export default App
