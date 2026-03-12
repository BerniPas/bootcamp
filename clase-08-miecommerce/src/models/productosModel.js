

//1. Importar Mongoose
const mongoose = require('mongoose');

//2. Definir el esquema del modelo
const productoSchema = new mongoose.Schema({
    nombre: {
    type: String,
    required: true,
    trim: true,
    min: 2,
  },
    precio: {
    type: Number,
    required: true,
    min: 0,
  },
    descripcion: {
    type: String,
    required: true
  },
    imagen: {
    type: String,
    required: true
  },
    dataRegistro:{
        type: Date,
        default: Date.now
    }
});

// Opcional: enviar sólo los campos necesarios al cliente, sin el _id, __v, etc.
/* productoSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id; // renombrar _id a id
    delete ret._id;
    delete ret.__v;
    delete ret.dataRegistro; // eliminar la fecha de registro si no es necesaria en la respuesta
    delete ret.precio; // eliminar la descripción si no es necesaria en la respuesta
    return ret;
  } }); */



//3. Exportar el modelo
module.exports = mongoose.model('producto', productoSchema);