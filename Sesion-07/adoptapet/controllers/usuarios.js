// controllers/usuarios.js
var mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")
var passport = require('passport');

function crearUsuario(req, res, next) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  const body = req.body,
    password = body.password
  delete body.password
  var usuario = new Usuario(body)
  usuario.crearPassword(password)
  usuario.save().then(user => {
    return res.status(201).json(user.toAuthJSON())
  }).catch(next)
}

function obtenerUsuarios(req, res, next) {
  Usuario.findById(req.usuario.id, (err, user) => {
    if (!user || err) {
      return res.sendStatus(401)
    }
    return res.json(user.publicData());
  }).catch(next);
}

function modificarUsuario(req, res, next) {
  console.log(req.usuario)
  Usuario.findById(req.usuario.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    var nuevaInfo = req.body
    if (typeof nuevaInfo.username !== 'undefined')
      user.username = nuevaInfo.username
    if (typeof nuevaInfo.bio !== 'undefined')
      user.bio = nuevaInfo.bio
    if (typeof nuevaInfo.foto !== 'undefined')
      user.foto = nuevaInfo.foto
    if (typeof nuevaInfo.ubicacion !== 'undefined')
      user.ubicacion = nuevaInfo.ubicacion
    if (typeof nuevaInfo.telefono !== 'undefined')
      user.telefono = nuevaInfo.telefono
    if (typeof nuevaInfo.password !== 'undefined')
      user.crearPassword(nuevaInfo.password)
    user.save().then(info => {
      delete info.hash
      delete info.salt
      res.status(201).json(info)
    }).catch(next)
  }).catch(next)
}

function eliminarUsuario(req, res, next) {
  // únicamente borra a su propio usuario obteniendo el id del token
  Usuario.findOneAndDelete({ _id: req.usuario.id }).then(r => {
    if (r !== null) {
      res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
    } else {
      res.status(400).send(`Error en la petición`);
    }
  }).catch(next)
}

function iniciarSesion(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "no puede estar vacío" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generarJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
}