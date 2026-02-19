
//#############################
// Configuramos el servidor en este archivo index.js
//#############################

// 1. Módulos importados - lo instalamos con npm i
const express = require("express");
const path = require("path");
const dotenv = require("dotenv") // librería para privacidad de passwords

// inicializamos las variables
const app = express();
const PORT = process.env.PORT || 9000 // traemos datos del archivo .env 

// configuramos el motor de plantillas Handlebars
const { engine } = require("express-handlebars")

// configuramos el motor de plantillas Handlebars
app.engine(".hbs", engine({
    extname: ".hbs", // extensión de los archivos de plantillas
    layoutsDir: path.join(__dirname, "vistas/layouts"), // carpeta de layouts
    defaultLayout: "main", // layout por defecto
    partialsDir: path.join(__dirname, "vistas/partials") // carpeta de parciales
}))

// asignamos el motor de plantillas a la app
app.set("view engine", ".hbs")
app.set("views", path.join(__dirname, "vistas")) // carpeta de vistas

// ejecutamos la configuración de dotenv
dotenv.config();


// 2. Módulos nativos de Node - no los instalamos con npm
const os = require("node:os");
const fs = require("node:fs");


// 3. Middelwares 
app.use(express.json())

// Uun get de salud del servidor
app.get("/health", (req, res)=>{
    res.send("Servidor OK")
})

// renderizamos la vista de inicio
app.get("/", (req, res)=>{
    res.render("home")
})

app.get("/prueba", (req, res)=>{
    res.render("prueba")
})


// 4. Rutas del GET - Obtiene datos del servidor
// llevamos las rutas a otro archivo para no tener todo el código en este archivo index.js
// lo llevamos a rutasget.js

// Traemos las rutas del GET desde el archivo rutasget.js
const rutasGet = require("./routes/rutasget.js")
const rutasUsers = require("./routes/rutasusers.js")
const rutasProductos = require("./routes/rutasProductos.js")

// Usamos las rutas del GET en la app
app.use("/api", rutasGet)
app.use("/api", rutasUsers)
app.use("/api", rutasProductos)

app.get("/usuarios", (req, res)=>{
    res.send("La lista de usuarios es: Juan, Pedro, María")
})




// lo llevamos al server.js para levantar el servidor
/* app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
}); */

// no vamos a levantar el servidor en este archivo
// Paso importante: exportar la app configurada con los datos de arriba
// exportamos la app para usarla en otro archivo, por ejemplo en server.js
// esportamos un solo valor, que es la app configurada con los datos de arriba
module.exports = app
