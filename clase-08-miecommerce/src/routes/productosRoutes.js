
// Improtamos express y el router
const { Router } = require('express');
const router = Router();

// Importamos el controlador de productos para mostrar el formulario de productos
const { 
    dameFormulario,
    guardarProducto,
    listarProductos,
    detallesProducto
} = require('../controllers/productosController');


// Rutas de productos: responden a /api/productos..

//1. Ruta para mostrar el formulario de productos
router.get('/dameFormulario', dameFormulario);

//2. Ruta para procesar el formulario de productos
router.post('/guardarProducto', guardarProducto);

//3. Ruta para listar los productos guardados en la base de datos
router.get('/listarProductos', listarProductos);

//4. Ruta para mostrar los detalles de un producto específico 
router.get('/detalleProducto/:id', detallesProducto);



// Exportar el router
module.exports = router;