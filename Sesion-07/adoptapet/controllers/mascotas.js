const mongoose = require('mongoose')
const Mascota = mongoose.model('Mascota')

function crearMascota(req, res) {
  var mascota = new Mascota(req.body)
  mascota.anunciante = req.usuario.id
  mascota.estado = 'disponible'
  mascota.save().then(mascota => {
    res.status(201).send(mascota)
  }).catch(next)
}

function obtenerMascotas(req, res, next) {
  if (req.params.id) {
    Mascota.findById(req.params.id).populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
      res.send(mascotas)
    }).catch(next)
  } else {
    Mascota.find().then(mascotas => {
      res.send(mascotas)
    }).catch(next)
  }
}

function modificarMascota(req, res, next) {
  Mascota.findById(req.params.id).then(mascota => {
    if (mascota.anunciante.equals(req.usuario.id)) {
      mascota.update(req.body, (err, m) => {
        return err ? next(err) : res.status(201).send({ message: 'Modificado exitosamente' })
      })
    } else {
      return res.sendStatus(401)
    }
  }).catch(next)
}

function eliminarMascota(req, res, next) {
  Mascota.findOneAndDelete({ _id: req.params.id, anunciante: req.usuario.id })
    .then(r => {
      if (r !== null) {
        res.status(200).send(`Mascota ${req.params.id} eliminada`);
      } else {
        res.status(400).send(`Error en la petición`);
      }
    }).catch(next)
}

module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}