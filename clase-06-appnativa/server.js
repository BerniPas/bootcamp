

// 1. Cargar el módulo de express
const express = require('express');

// 2. Cargar el módulo de path
const path = require('node:path');

// 3. Crear la aplicación de express
const app = express();

// 4. Configuramos el puerto
const PORT = 3000;

/* 5. Definimos la carpeta pública */
app.use(express.static(path.join(__dirname, 'public')));

// 6. Middleware para parsear JSON
app.use(express.json());

//7. Definimos las rutas de la API

app.post("/contacto", (req, res) => {
    console.log("Datos recibidos del formulario de contacto:");
    console.log(req.body);
    res.json({ message: "Datos recibidos correctamente" });
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});