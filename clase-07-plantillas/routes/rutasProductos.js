
const { Router } = require("express");

const router = Router();

router.get("/productos", (req, res)=>{
    res.send(`
        <h1>Lista de productos</h1>
        <ul>
            <li>Producto 1</li>
            <li>Producto 2</li>
            <li>Producto 3</li>
        </ul>`
    )
})

router.get("/productos/:id", (req, res)=>{
    const id = req.params.id
    res.send(`
        <h1>Producto ${id}</h1>
        <p>Descripción del producto ${id}</p>
    `)
})


module.exports = router