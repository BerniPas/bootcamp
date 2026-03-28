


//Importamos el componente de navegación
import Navegacion from './componentes/Navegacion'

//Importamos el componente de footer
import Footer from './componentes/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Productos from './pages/Productos'

//3. Importamos los componentes de configuración de rutas
import { Routes, Route } from 'react-router-dom';


// Creamos el componente funcional App.jsx
function App() {
  return (
    <>
      <Navegacion />

      {/* Configutamos las rutas de la aplicación */}
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/listar' element={<Productos />} />
      </Routes>

      <Footer />

    </>

  );
}

export default App;
