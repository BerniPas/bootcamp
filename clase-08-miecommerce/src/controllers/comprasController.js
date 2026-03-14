
const ProductosModel = require('../models/productosModel');

const carritoController = async (req, res) => {

    const id = req.params.id; 

    // buscar en la database
    try {

      const producto = await ProductosModel.findById(id).lean(); 

      console.log(producto);

      res.render('carrito', {
        producto
      });
      
    } catch (error) {
      
      res.status(500).json({
        message: 'Error al buscar el producto',
        error: error.message
      });
    }

}


module.exports = {
  carritoController
}