const express = require('express'),
  bodyParser = require('body-parser'),
  errorhandler = require('errorhandler'),
  cors = require('cors');
const mongoose = require('mongoose');
var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

require('./models/Usuario');
require('./config/passport');
require('./models/Mascota');
require('./models/Solicitud');


// Objeto global de la app
var app = express();

if (!isProduction) {
  mongoose.set('debug', true)
  app.use(errorhandler())
  // imprimirá los errores en development
  app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
      'errors': {
        message: err.message,
        error: err
      }
    })
  })
}

// Configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1', require('./routes'));

// Interceptando los errores 404
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Escuchando en el puerto ' + server.address().port);
});