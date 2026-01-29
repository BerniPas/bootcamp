
/* 1. Importamos la librería de express */
const express = require('express');


/* 2. Importamos path para que Node encuentre las rutas */
const path = require('node:path');

/* 3. Inicializamos la aplicación de express */
const app = express();

// usar una función única que convierte todo lo que llega en el body a un objeto JSON
app.use(express.json());

/* 4. Definimos el puerto */
const PORT = 3000; // React por defecto usa el puerto 3000

/* 5. Definimos la carpeta pública */
app.use(express.static(path.join(__dirname, 'public')));


// Creamos una ruta para recibir datos del formulario
app.post("/reciboproductos", (peticion, respuesta) => {


  console.log(peticion);

  console.log("===============================================================/*  */");
  console.log("===============================================================/*  */");
  
  

    // Imprimimos en consola cuando recibimos algo
    console.log("Datos recibidos del formulario");

    console.log(peticion.body.nombre, peticion.body.precio, peticion.body.stock);
    

});

/* 6. Ejecutamos la aplicación */
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});





