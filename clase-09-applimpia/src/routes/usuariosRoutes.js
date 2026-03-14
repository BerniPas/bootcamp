
// Improtamos express y el router
const { Router } = require('express');
const router = Router();

// Importamos el modelo de usuario para poder guardar los datos en la base de datos
const UsuarioCollection = require('../models/usuariosModel');


// Esta ruta responde a /api/usuarios..

// Rutas de usuarios
//1. Ruta para mostrar el formulario de registro
router.get('/registro', (req, res) => {
    res.render('registro');
});

//2. Ruta para procesar el formulario de registro
router.post('/registro', (req, res)=>{

  //1. Recibimos los datos del formulario
  const nombre = req.body.nombre;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirm_password;


const persona = {
    nombre,
    email,
    password
  }

  //! Aquí usamos el modelo usuario para guadar el dato = documento en la base de datos
  // todo lo que tiene que ver con bases de datos, lo hacemos con funciones asíncronas, porque las operaciones con bases de datos pueden tardar un tiempo en completarse, y no queremos bloquear el servidor mientras esperamos la respuesta de la base de datos. Para esto, utilizamos async/await o promesas.
  
  // Creamos una función asíncrona para guardar el usuario en la base de datos
  const guardarUsuario = async () => {

    try {

      // Creamos una instancia del modelo de usuario con los datos recibidos
      const usuarioNuevo = new UsuarioCollection(persona);

      // Guardamos el usuario en la base de datos
      await usuarioNuevo.save();

    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }

  }

  // invocamos la función para guardar el usuario en la base de datos
  guardarUsuario();


  //3. Respondemos con un mensaje de éxito y los datos recibidos (en una aplicación real, no se debería enviar la contraseña en la respuesta)
  res.json({
    message: 'Datos recibidos correctamente',
    persona,
    otraPersona,
    otraData
  });

});

// Exportamos el router
module.exports = router;