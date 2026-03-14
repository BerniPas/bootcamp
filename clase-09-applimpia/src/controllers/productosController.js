
const ProductosModel = require('../models/productosModel');

// Modelo cpn un Objeto literal que exporta dos funciones: dameFormulario y guardarProducto
// Exportar el controlador
module.exports = {

  // renderiza el formulario de productos
  dameFormulario: (req, res) => {
    res.render('formProductos');
},

  guardarProducto: async (req, res) => {

  //Desestructuramos los datos recibidos en el cuerpo de la petición
  const nuevoProducto = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen
  };

  // Creamos una nueva instancia del modelo Producto con los datos recibidos
  const crearProducto = new ProductosModel(nuevoProducto);

  // Guardamos el producto en la base de datos
  try {
    await crearProducto.save();

    res.render('exitoProducto');

  } catch (error) {
    res.status(500).json({
      message: 'Error al guardar el producto',
      error: error.message
    });
  }

  },

  // función para listar los productos guardados en la base de datos
  listarProductos: async (req, res) => {

    let titulo = 'Listado de Productos';

    try{

      const productos = await ProductosModel.find({}).lean();

      console.log(productos);

      
      res.render('listarProductos', {
        titulo,
        productos
      })

    }catch(error){

      res.status(500).json({
      message: 'Error al guardar el producto',
      error: error.message
    });

    }

  },

  // función para mostrar los detalles de un producto específico
  detallesProducto: async (req, res) => {

    const id = req.params.id; 

    const producto = await ProductosModel.findById(id).lean(); 
    console.log(producto);
    

    res.render('detalleProducto', {
      mensaje: 'Detalles del producto',
      id,
      producto
    });
  }
  
};
