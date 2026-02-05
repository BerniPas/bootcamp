

// 1. Cargar el módulo de express
const express = require('express');

// 2. Cargar el módulo de path
const path = require('node:path');

// 3. Crear la aplicación de express
const app = express();

// 4. Configuramos el puerto
const PORT = 3000;

/* 5. Definimos la carpeta pública */
// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// 6. Middleware: es una función que se ejecuta antes de llegar a las rutas
//  para parsear JSON
app.use(express.json());



//7. Definimos las rutas de la API

app.post("/contacto", (req, res) => {
    console.log("Datos recibidos del formulario de contacto:");
    console.log(req.body);
    res.json(
        { 
            message: "Datos recibidos correctamente" 
        }
    );

    // No podemos enviar dos respuestas por cada petición
    //res.json({ message: "Te paso un link para recomendarnos" });
});

// Ruta para recibir datos del formulario de productos
app.post("/productos", (req, res) => {
    console.log("Datos recibidos del formulario de productos:");
    console.log(req.body);
    res.json(
        { 
            message: "Producto recibido correctamente" 
        }
    );
});


//. 8. Crear una ruta global para manejar rutas no definidas
app.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });

    // Llamamos a next() para pasar al siguiente middleware (si lo hubiera)
    //next();
}); 

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});




