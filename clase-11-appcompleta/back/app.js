
// Librerías
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');

// Importar rutas
const usuariosRouter = require('./routes/usuariosRoutes');
const productosRouter = require('./routes/productosRoutes');

// Crear el servidor
const app = express();

// Middleware
app.use(morgan('dev')); //datos de las peticiones en consola
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir los archivos estáticos (css, js, imágenes) desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Utilizamos las Rutas
app.use('/api/usuarios', usuariosRouter);
app.use('/api/productos', productosRouter);

// Exportar el servidor
module.exports = app;


