/*  Archivo controllers/solicituds.js
 *  Simulando la respuesta de objetos Solicitud
 *  en un futuro aquí se utilizarán los modelos
 */

const Solicitud = require('../models/Solicitud')

function crearSolicitud(req, res) {
  // Instanciaremos un nuevo solicitud utilizando la clase solicitud
  var solicitud = new Solicitud(req.body)
  res.status(201).send(solicitud)
}

function obtenerSolicitud(req, res) {
  // Simulando dos solicitudes y respondiendolos
  var solicitudes = [
    new Solicitud(1, 4, '4/06/2020', 3, 8, 'pendiente'),
    new Solicitud(2, 3, '5/06/2020', 4, 9, 'rechazada'),
    new Solicitud(3, 3, '5/06/2020', 4, 9, 'aceptada')
  ]
  if (typeof req.params.id === 'number') {
    let s = solicitudes.find(s => s == req.params.id)
    s ? res.send(s) : res.status(404).send({ message: 'Solicitud no encontrada' });
  }
  res.send(solicitudes)
}

function modificarSolicitud(req, res) {
  // simulando un solicitud previamente existente que el solicitud utili
  var solicitud1 = new Solicitud(1, 4, '4/06/2020', 3, 8, 'pendiente')
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminarSolicitud(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

module.exports = {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud
}