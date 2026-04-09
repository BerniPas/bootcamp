// importamos validationResult de express-validator
import { validationResult } from 'express-validator';

// importamos bcrypt
import bcrypt from 'bcrypt';

// Importamos el modelo de usuario para poder guardar los datos en la base de datos
import UsuarioCollection from '../models/usuariosModel.js';

const registrarUsuario = async (req, res)=>{

  
  //1. Validamos los datos del formulario
  const errors = validationResult(req); //true //false
  
  //1.1 Si hay errores, devolvemos un mensaje de error
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array().map(item => item.msg).join(', ')
    });
  }


  //2. Recibimos los datos del formulario
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
    //const confirmPassword = req.body.confirm_password;

    const persona = {
        nombre,
        email,
        password
    }

  // Creamos una función asíncrona para guardar el usuario en la base de datos
const guardarUsuario = async () => {
  try {
          // Antes de gauardar los datos, encriptamos el password
            const salt = await bcrypt.genSalt(10);
            // impriimos la salt
          console.log(salt);
            persona.password = await bcrypt.hash(password, salt);
          console.log(persona.password);
          
        // Creamos una instancia del modelo de usuario con los datos recibidos
            const usuarioNuevo = new UsuarioCollection(persona);

            // Guardamos el usuario en la base de datos
            await usuarioNuevo.save();
            
            res.status(200).json({
                message: 'Usuario registrado con éxito',
            });
        } catch (error) {

          console.log(error);

            res.status(500).json({
              message: 'Error al guardar el usuario'
            });
        }
    }
    
  // invocamos la función para guardar el usuario en la base de datos
    await guardarUsuario();

} 

export {
    registrarUsuario
}
