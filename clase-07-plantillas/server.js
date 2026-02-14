

// Importamos app configurada como un servidor
// Importamos la app configurada como un servidor
// Cuando importamos de nuestro de nuestro proyecto, no es necesario poner la extensión .js
const app = require("./index.js")

// Importamos dotenv para traer el puerto del archivo .env
require("dotenv").config();


// Puerto del servidor
const PORT = process.env.PORT || 9000


/* Ejecutamos la aplicación */
app.listen(PORT, () => {
  console.log("========================");
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
  //console.log(process.env);
  console.log("========================");
  //console.log(process);
});