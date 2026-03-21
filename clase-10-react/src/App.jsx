
// importamos el logo y las imégenes necesarias para el componente
import logo from './assets/logo.svg';

// importamos los estilos de css para el componente
import './css/App.css';

// Creamos una función de saludo nativa en JS
import { 
  saludo
} from './helps/hola';

// importamos un componente funcional para el componente App.jsx
import Saludo from './componentes/Saludo'
import OtroSaludo from './componentes/OtroSaludo';


// Creamos el componente funcional App.jsx
function App() {

  saludo();

  return (
    <div className="App" id='hola'>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* renderizamos el componente Saludo */}
        <Saludo /> 
      </header>
    </div>
  );
}

export default App;
