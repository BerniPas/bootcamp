


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
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/api/productos/dameFormulario">Formulario de Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/api/productos/listarProductos">Productos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

//exportamos el componente para poder usarlo en otros archivos
export default Navegacion;