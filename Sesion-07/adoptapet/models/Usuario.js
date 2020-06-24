// Usuario.js
var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");
var secret = require("../config").secret;

var UsuarioSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true, //este campo no se puede repetir
      lowercase: true,
      required: [true, "no puede estar vacío"],
      match: [/^[a-zA-Z0-9]+$/, "es inválido"],
      index: true,
    },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: {
      type: String,
      unique: true, //este campo no se puede repetir
      lowercase: true,
      required: [true, "no puede estar vacío"],
      match: [/\S+@\S+\.\S+/, "es inválido"],
      index: true,
    },
    ubicacion: String,
    telefono: String,
    bio: String,
    foto: String,
    tipo: { type: String, enum: ['normal', 'anunciante'] },
    hash: String, //este campo se utilizará para la sesión
    salt: String, //este campo se utilizará para la sesión
  },
  { timestamps: true }
);

// usando plugin de validación para que no se repitan correos ni usernames
UsuarioSchema.plugin(uniqueValidator, { message: "Ya existe" });

UsuarioSchema.methods.crearPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex"); // generando una "sal" random para cada usuario
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex"); // generando un hash utilizando la sal
};

/**
 * Recibe el password, genera y compara el has con el de la base de datos
 */
UsuarioSchema.methods.validarPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UsuarioSchema.methods.generarJWT = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60); // 60 días antes de expirar

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

/**
 * Devuelve la representación de un usuario y el token de acceso después de logearse
 */
UsuarioSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generarJWT(),
    bio: this.bio,
    foto: this.foto,
    tipo: this.tipo,
  };
};

/**
 * Quita la información sensible de un usuario
 */
UsuarioSchema.methods.publicData = function () {
  return {
    username: this.username,
    nombre: this.nombre,
    apellido: this.apellido,
    bio: this.bio,
    foto: this.foto,
  };
}


mongoose.model("Usuario", UsuarioSchema);
