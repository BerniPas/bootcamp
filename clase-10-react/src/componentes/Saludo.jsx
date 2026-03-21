

// importamos la imagen para el componente
import saludo from '../assets/saludar.jpg';


// funcion del alert para el botón de despedida
function adios() {
  alert('¡Adiós!');
}


// Creamos el componente funcional Saludo.jsx
function Saludo() {

  // un componete tiene el método return, que es lo que se va a renderizar en el DOM
  // SÓLO se devuelve UN elemnto JSX en el return
  return(
    <div>{/* envolvolvemos los elementos en un contenedor */}
      <img src={saludo} alt="saludos" />
      <p className='container mt-5 mb-5'>
        Hola, soy un componente funcional del Saludo!
      </p>

      <button 
        className='btn btn-primary w-50 mb-5'
        onClick={() => alert('¡Hola!')}
      >
          Hola con onClick
      </button>

      <button 
        className='btn btn-danger w-50 mb-5'
        onClick={adios}
      >
          Adiós
      </button>
    </div>
  );
  
}

export default Saludo;