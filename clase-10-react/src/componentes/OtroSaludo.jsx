// importamos la imagen para el componente
import saludo from '../assets/saludar.jpg';


// Creamos el componente funcional OtroSaludo.jsx con un arrow function
const OtroSaludo =() =>{

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
        onClick={() => alert('¡Hola con OtroSaludo!')}
      >
          Hola con OtroSaludo
      </button>
    </div>
  );
  
}

export default OtroSaludo;