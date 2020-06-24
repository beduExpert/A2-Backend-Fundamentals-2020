const router = require('express').Router();
const {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud
} = require('../controllers/solicitudes')
var auth = require('./auth');

router.get('/', auth.required, obtenerSolicitud)
router.get('/:id', auth.required, obtenerSolicitud)
router.post('/', auth.required, crearSolicitud)
router.put('/:id', auth.required, modificarSolicitud)
router.delete('/:id', auth.required, eliminarSolicitud)

module.exports = router;