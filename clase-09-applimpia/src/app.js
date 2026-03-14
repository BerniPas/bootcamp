
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

// Configuración de handlebars
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(morgan('dev')); //datos de las peticiones en consola
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir los archivos estáticos (css, js, imágenes) desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Utilizamos las Rutas
app.use('/api/usuarios', usuariosRouter);
app.use('/api/productos', productosRouter);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});


// Ruta para el 404: debe ir al final de todas las rutas, para que se ejecute solo si no se encuentra ninguna ruta definida
// Este set va hasta la versión 4 de express
app.get("/*", (req, res) => {
    res.status(404).render('error', { estilos: 'error.css' });
});


// Exportar el servidor
module.exports = app;


