// Improtamos express y el router
const { Router } = require('express');
const router = Router();


// Importamos la función de registro de usuario
const {
  registrarUsuario,
} = require('../controllers/usuariosController');

// Esta ruta responde a /api/usuarios..
// Rutas de usuarios
router.post('/registro', registrarUsuario);

// Exportamos el router
module.exports = router;