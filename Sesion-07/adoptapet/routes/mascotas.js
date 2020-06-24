const router = require('express').Router();
const {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
} = require('../controllers/mascotas')
var auth = require('./auth');

router.get('/', auth.optional,obtenerMascotas)
router.get('/:id', auth.optional, obtenerMascotas)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.required, crearMascota)
router.put('/:id',auth.required, modificarMascota)
router.delete('/:id',auth.required, eliminarMascota)

module.exports = router;