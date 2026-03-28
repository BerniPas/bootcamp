
//importo Link de react-router-dom
import { Link } from 'react-router-dom'


//Crear un componente de navegación

// Componentes de React con funciones flecha
const Navegacion = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Mi E-commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/listar">Productos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

//exportamos el componente para poder usarlo en otros archivos
export default Navegacion;