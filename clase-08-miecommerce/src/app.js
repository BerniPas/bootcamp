
// Librerías
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');


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

//app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});




// Exportar el servidor
module.exports = app;


