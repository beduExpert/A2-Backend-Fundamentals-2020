// Estructura del CRUD
const router = require('express').Router();
const {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud
} = require('../controllers/solicitudes')

router.get('/', obtenerSolicitud)
router.post('/', crearSolicitud)
router.put('/:id', modificarSolicitud)
router.delete('/:id', eliminarSolicitud)

module.exports = router;