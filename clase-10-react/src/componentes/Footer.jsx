

//Creamos un componente de Clase para el footer
//1. Importamos React y Component
import { Component } from 'react';

// Importamos el archivo de datos
import { anioActual } from '../config/datos';

// Las clases eran las únicas que podían utilizar los estados y los ciclos de vida.
import { useEffect, useState } from 'react';

//2. Creamos la clase que extiende de Component
class Footer extends Component {

  //4. Creamos el constructor para inicializar el estado
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Pedro"
    }
  }

  //3. Creamos el método render() que es el encargado de renderizar el componente
  render() {
    return (
      <footer className="bg-dark text-white py-5 mt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-4">
        <h5>Sobre Nosotros</h5>
        <p>Tu tienda de confianza para los mejores productos online.{this.state.nombre}</p>
      </div>
      <div className="col-md-4 mb-4">
        <h5>Enlaces Rápidos</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Inicio</a></li>
          <li><a href="#" className="text-white text-decoration-none">Productos</a></li>
          <li><a href="#" className="text-white text-decoration-none">Contacto</a></li>
        </ul>
      </div>
      <div className="col-md-4 mb-4">
        <h5>Síguenos</h5>
        <div className="social-icons">
          <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>


    <div className="text-center">
      <p className="mb-0">&copy; {anioActual} Mi E-commerce. Todos los derechos reservados.</p>
    </div>
  </div>
      </footer>
    )
  }
}

export default Footer;