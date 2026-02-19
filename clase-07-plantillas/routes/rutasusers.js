
//1 importamos router de express
const { Router } = require("express")

//2 ejecutamos las funciones de router
const router = Router()

const fs = require("node:fs");

//3 creamos las rutas del GET
router.get("/usuarios", (req, res)=>{
    res.send("La lista de usuarios es: Juan, Pedro, María")
})


//4 creamos una ruta del POST para agregar un nuevo usuario
router.post("/usuarios", (req, res)=>{
    const user = req.body

    // creamos un nuevo archivo y su contenido es el nombre del usuario
    fs.writeFileSync(`usuario_${user.nombre}.txt`, user.nombre)

    res.send(`El usuario ${user.nombre} ha sido agregado a la lista de usuarios`)
})



//5 exportamos el router para usarlo en index.js
module.exports = router