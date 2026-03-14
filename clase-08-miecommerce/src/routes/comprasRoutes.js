

const { Router } = require('express');
const router = Router();

const { carritoController } = require('../controllers/comprasController');


// carrito de compras
router.get('/carrito/:id', carritoController);


// Exportar el router
module.exports = router;