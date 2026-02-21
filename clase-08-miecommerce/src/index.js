
// Librerias
const dotenv = require('dotenv')
dotenv.config();

// Importar el servidor
const app = require('./app');

// Levantar el servidor
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


