# Ejemplo 3

## Objetivo

Crear un nuevo modelo (Solicitud) junto con la lógica de sus controladores

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 4.

## Desarrollo

1. Crearemos el modelo Solicitud en `models/Solicitud.js` 

```jsx
const mongoose = require("mongoose");

var SolicitudSchema = new mongoose.Schema({
  mascota: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Mascota' },
  anunciante: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario' },
  solicitante: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario' },
  estado: {type: String, enum:['aceptada', 'cancelada', 'pendiente']},
}, { timestamps: true })

mongoose.model('Solicitud', SolicitudSchema)
```

2. No olvides declarar el modelo en el archivo `app.js`

```jsx
...
require('./models/Usuario');
require('./config/passport');
require('./models/Mascota');
require('./models/Solicitud');
...
```

El orden es importante, ya que el modelo usuario es utilizado dentro del modelo Mascota, entonces debe estar declarado primero.

3. Actualiza las rutas del archivo `routes/solicitudes.js` para usar el middleware de autorización.

```jsx
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
```

4. Ahora actualiza la función `crearSolicitud` en `controllers/solicitudes.js`

```jsx
const mongoose = require("mongoose");
const Usuario = mongoose.model('Usuario')
const Solicitud = mongoose.model('Solicitud')
const Mascota = mongoose.model('Mascota')
mongoose.set('useFindAndModify', false);

function crearSolicitud(req, res, next) { // POST v1/solicitudes?mascota_id=021abo59c96b90a02344...
  // Buscamos la mascota a solicitar
  Mascota.findById(req.query.mascota_id, async (err, mascota) => {
    if (!mascota || err) {
      return res.sendStatus(404)
    }
    if(mascota.estado==='adoptado'){
      return res.sendStatus('La mascota ya ha sido adoptada')
    }
    // si está dispobible o pendiente podemos crear la solicitud
    const solicitud = new Solicitud()
    solicitud.mascota = req.query.mascota_id
    solicitud.anunciante = mascota.anunciante
    solicitud.solicitante = req.usuario.id
    solicitud.estado = 'pendiente'
    solicitud.save().then(async s => {
      // antes de devolver respuesta actualizamos el tipo de usuario a anunciante
      await Usuario.findOneAndUpdate({_id: req.usuario.id}, {tipo: 'anunciante'})
      res.status(201).send(s)
    }).catch(next)
  }).catch(next)
}
```

Para crear una solicitud la compondremos de un id de la mascota, del anunciante y del solicitante.

5. Actualizaremos la función obtenerSolicitud para obtener todas las solicitudes

```jsx
function obtenerSolicitud(req, res, next) {
  if (!req.params.id) {
    // sin :id, solo enlistaremos las solicitudes dónde el usuario es anunciante o solicitante
    Solicitud.find({ $or: [{ solicitante: req.usuario.id }, { anunciante: req.usuario.id }] }).then(solicitudes => {
      res.send(solicitudes)
    }).catch(next)
  } else {
    // Al obtener una solicitud individual con el :id poblaremos los campos necesarios
    Solicitud.findOne({ _id: req.params.id, $or: [{ solicitante: req.usuario.id }, { anunciante: req.usuario.id }] })
      .then(async (solicitud) => {
        // añadimos información sobre la mascota
        await solicitud.populate('mascota').execPopulate()
        if (solicitud.estado === 'aceptada') {
          // Si la solicitud ha sido aceptada, se mostrará la información de contacto
          await solicitud.populate('anunciante', 'username nombre apellido bio foto telefono email').execPopulate()
          await solicitud.populate('solicitante', 'username nombre apellido bio foto telefono email').execPopulate()
          res.send(solicitud)
        } else {
          res.send(solicitud)
        }
      }).catch(next)
  }
}
```

Aquí está el resultado de una solicitud que ha sido aceptada:

`GET[/v1/solicitudes/5eeb856741f87e8de15d031a](http://localhost:3000/v1/solicitudes/5eeb856741f87e8de15d031a)`

```json
{
  "_id": "5eeb856741f87e8de15d031a",
  "estado": "aceptada",
  "mascota": {
    "fotos": [
      "https://images.app.goo.gl/MsX6R9aTWfQKjsvW6"
    ],
    "_id": "5ee8f79d2ab51833d2147e26",
    "nombre": "Kalita",
    "descripcion": "Gatito bebé enncontrado debajo de un carro necesita hogar",
    "anunciante": "5ee7101ee584287c9d4d44ce",
    "createdAt": "2020-06-16T16:47:25.900Z",
    "updatedAt": "2020-06-16T16:47:25.900Z",
    "__v": 0
  },
  "anunciante": {
    "_id": "5ee7101ee584287c9d4d44ce",
    "username": "karly",
    "nombre": "Karla",
    "apellido": "Ivonne",
    "email": "karly@gmail.com",
    "telefono": "5512345678",
    "bio": "Yo soy Karly, look at me!",
    "foto": "http://pictures/foto-de-perfil"
  },
  "solicitante": {
    "_id": "5ee8f78b2ab51833d2147e25",
    "username": "sony",
    "nombre": "Sonia",
    "apellido": "Martinez",
    "email": "sony@gmail.com",
    "telefono": "5512345678",
    "bio": "Yo soy Sony, look at me!",
    "foto": "http://pictures/foto-de-perfil"
  },
  "createdAt": "2020-06-18T15:16:55.336Z",
  "updatedAt": "2020-06-18T17:46:45.704Z",
  "__v": 2
}
```

Así nuestros usuarios podrán ponerse en contacto y concretar la adopción de su nuevo amigo.

### Ejercicio 3

1. Crea el método `modificarSolicitud` para aceptar o rechazar solicitudes, teniendo en cuenta que el usuario que está peticionando debe ser el anunciante para poder realizar cambios. Utiliza el token de acceso con [`req.usuario.id`](http://req.usuario.id) para comparar que tenga los permisos suficientes.
2. Dado el ejercicio anterior, ¿es necesario crear un endpoint para eliminar solicitudes? ¿Cómo puede saber un usuario que su solicitud de adopción fue rechazada o aceptada?