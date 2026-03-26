


//Importamos el componente de navegación
import Navegacion from './componentes/Navegacion'

//Importamos el componente de footer
import Footer from './componentes/Footer';
import Home from './pages/Home';

//3. Importamos los componentes de configuración de rutas
import { Routes, Route } from 'react-router-dom';


// Creamos el componente funcional App.jsx
function App() {



  return (

    <>
      <Navegacion />

      {/* Configutamos las rutas de la aplicación */}
      <Routes>
        <Route path='/' element= {<Home /> } />

      </Routes>

      <Footer />

    </>

  );
}

export default App;
