const router = require('express').Router();
const {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
} = require('../controllers/usuarios')
var auth = require('./auth');


router.get('/', auth.required, obtenerUsuarios)
router.get('/:id', auth.required, obtenerUsuarios);
router.post('/', auth.optional,crearUsuario)
router.post('/entrar', auth.optional,iniciarSesion)
router.put('/:id', auth.required, modificarUsuario)
router.delete('/:id', auth.required, eliminarUsuario)

module.exports = router;