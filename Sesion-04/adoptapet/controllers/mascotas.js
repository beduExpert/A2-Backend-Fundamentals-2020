/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
  var mascota1 = new Mascota(1, 'Coffie', 'perro', ['link a la foto','link a la foto'])
  var mascota2 = new Mascota(1, 'Kalita', 'gato', ['link a la foto', 'link a la foto'])
  res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
  var mascota1 = new Mascota(req.params.id, 'Kalita', 'gato', ['foto'])
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}