
const ProductosModel = require('../models/productosModel');

// Modelo cpn un Objeto literal que exporta dos funciones: dameFormulario y guardarProducto
// Exportar el controlador
module.exports = {

  // renderiza el formulario de productos
  dameFormulario: (req, res) => {
    res.render('formProductos');
},

  guardarProducto: async (req, res) => {
  // Aquí se implementaría la lógica para guardar el producto en la base de datos, utilizando los datos recibidos en req.body

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

/*   res.json({
    message: 'Producto guardado correctamente',
    data: req.body
  }); */
  },

  // función para listar los productos guardados en la base de datos
  listarProductos: async (req, res) => {

    let titulo = 'Listado de Productos';

    try{

      const productos = await ProductosModel.find({}).lean(); // lean() convierte los documentos de Mongoose en objetos JavaScript simples, lo que facilita su manipulación y renderizado en las vistas. Si no se utiliza lean(), los documentos devueltos por find() serán instancias de Mongoose, lo que puede causar problemas al intentar acceder a sus propiedades en las vistas.

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

    const id = req.params.id; // obtenemos el id del producto desde los parámetros de la ruta

    const producto = await ProductosModel.findById(id).lean(); // buscamos el producto por su id en la base de datos y lo convertimos a un objeto JavaScript simple con lean()

    console.log(producto);
    

    res.render('detalleProducto', {
      mensaje: 'Detalles del producto',
      id,
      producto
    });
  }
  
};


// Ejemplo de un objeto literal que exporta dos funciones: dameFormulario y guardarProducto
// no lo usamos en el backend, es solo un ejemplo de cómo se puede exportar un objeto literal con funciones
const persona ={
  nombre: 'Bernardo',
  edad: 30
}