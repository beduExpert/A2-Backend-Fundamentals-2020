# Ejemplo 2

## Objetivo

Crear un nuevo modelo (Mascota) junto con la lógica de sus controladores

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 4.

## Desarrollo

1. Crearemos el modelo Mascota en `models/Mascota.js` 

```jsx
const mongoose = require("mongoose");

const MascotaSchema = new mongoose.Schema({
  nombre: {type: String, required: true}, // nombre de la mascota (o titulo del anuncio)
  categoria: { type: String, enum: ['perro', 'gato', 'otro'] }, // perro | gato | otro
  fotos: [String], // links a las fotografías
  descripcion: {type:String, required: true}, // descripción del anuncio
  anunciante: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}, // contacto con la persona que anuncia al animalito
  ubicacion: {String}, // muy importante
  estado:{type: String, enum:['adoptado', 'disponible', 'pendiente']},
}, { timestamps: true })

mongoose.model('Mascota', MascotaSchema)
```

Para la propiedad categoría utilizaremos un `enum` el cuál nos permite pasar únicamente los valores 'perro', 'gato' u 'otro'.

Para la propiedad anunciante, crearemos una referencia el modelo Usuario que contendrá el id de un usuario y nos servirá más adelante.

2. Recuerda importar el modelo en `app.js` debajo de dónde importamos el modelo Usuario.

```jsx
...
require('./models/Usuario');
require('./config/passport');
require('./models/Mascota');
...
```

3. Actualiza las rutas del archivo `routes/mascotas.js` para asegurar los endpoints que requieran actualizar mascotas y eliminarlas

```jsx
const router = require('express').Router();
const {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
} = require('../controllers/mascotas')
var auth = require('./auth');

router.get('/', auth.opcional,obtenerMascotas)
router.get('/:id', auth.opcional, obtenerMascotas)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearMascota)
router.put('/:id',auth.requerido, modificarMascota)
router.delete('/:id',auth.requerido, eliminarMascota)

module.exports = router;
```

4. Ahora actualiza la función `crearMascota` en `controllers/mascotas.js`

```jsx
const mongoose = require('mongoose')
const Mascota = mongoose.model('Mascota')

function crearMascota(req, res, next) {
  var mascota = new Mascota(req.body)
  mascota.anunciante = req.usuario.id
  mascota.estado = 'disponible'
  mascota.save().then(mascota => {
    res.status(201).send(mascota)
  }).catch(next)
}

```

5. Actualizaremos la función obtenerMascotas para obtener todas las mascotas

```jsx
function obtenerMascotas(req, res, next) {
  Mascota.find().then(mascotas=>{
    res.send(mascotas)
  }).catch(next)
}
```

### Populate

El método populate nos sirve para *poblar* documentos que son integrados dentro de otros documentos.

6. Cuando queramos obtener una mascota en específico en el endpoint 'v1/mascotas/:id', será necesario mostrar la información de su anunciante, así que agregaremos una condición para que cuándo un id esté presente se agreguen los campos username, nombre, apellido, bio y foto del anunciante

```jsx
function obtenerMascotas(req, res, next) {
  if(req.params.id){
    Mascota.findById(req.params.id)
			.populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
	      res.send(mascotas)
	    }).catch(next)
  } else {
    Mascota.find().then(mascotas=>{
      res.send(mascotas)
    }).catch(next)
  }
}
```

esto nos devolverá una respuesta cómo la siguiente:

```json
{
  "categoria": [
    "gato"
  ],
  "fotos": [
    "https://images.app.goo.gl/MsX6R9aTWfQKjsvW6"
  ],
  "estado": [
    "disponible"
  ],
  "_id": "5ee8f79d2ab51833d2147e26",
  "nombre": "Kalita",
  "descripcion": "Gatito bebé encontrado debajo de un carro necesita hogar",
  "anunciante": {
    "_id": "5ee7101ee584287c9d4d44ce",
    "username": "karly",
    "nombre": "Karla",
    "apellido": "Ivonne",
    "bio": "Yo soy Karly, look at me!",
    "foto": "http://pictures/foto-de-perfil"
  },
  "createdAt": "2020-06-16T16:47:25.900Z",
  "updatedAt": "2020-06-16T16:47:25.900Z",
  "__v": 0
}
```
