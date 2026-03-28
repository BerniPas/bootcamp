
// Importamos el modelo de usuario para poder guardar los datos en la base de datos
const UsuarioCollection = require('../models/usuariosModel');

const registrarUsuario = async (req, res)=>{

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

  // Creamos una función asíncrona para guardar el usuario en la base de datos
const guardarUsuario = async () => {
        try {
            // Creamos una instancia del modelo de usuario con los datos recibidos
            const usuarioNuevo = new UsuarioCollection(persona);
            // Guardamos el usuario en la base de datos
            await usuarioNuevo.save();
            res.status(200).json({
                message: 'Usuario registrado con éxito',
            });
        } catch (error) {
            res.status(500).json({
            message: 'Error al guardar el usuario'
            });
        }
    }

  // invocamos la función para guardar el usuario en la base de datos
    await guardarUsuario();

} 

module.exports = {
    registrarUsuario
}
