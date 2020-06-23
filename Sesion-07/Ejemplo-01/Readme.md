# Ejemplo 1

## Objetivo

Instalar Mongoose y crear nuestro primer modelo que integraremos a nuestra API.

Aprender a asegurar endpoints por medio de sesiones con JWT utilizando passport.js

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 4.

## Desarrollo

### Creando el modelo Usuario con Mongoose

[Mongoose](https://mongoosejs.com/) es una librería ODM que nos ayuda a trabajar con MongoDB y Node de manera más dinámica, permitiéndonos comunicarnos con el servidor de MongoDB y crear Modelos con una estructura y reglas que se adaptan a nuestra base de datos.

1. Instalaremos mongoose con el comando

    ```bash
    npm install mongoose
    ```

    para importarlo en nuestros modelos podemos hacerlo con la siguiente línea.

    ```jsx
    var mongoose = require('mongoose');
    ```

2. Modificaremos el modelo Usuario utilizando la clase `Schema` de mongoose.

    ```jsx
    // Usuario.js
    var mongoose = require('mongoose');

    var UsuarioSchema = new mongoose.Schema({
      username: String,
      nombre: String,
      apellido: String, 
      email: String,
      password: String,
      ubicacion: String,
      telefono: String,
      bio: String,
      foto: String,
      tipo: String,
    }, { timestamps: true });
    mongoose.model("Usuario", UsuarioSchema);
    ```

    - El modelo ahora no tiene un id ya que por defecto Mongoose le agrega el atributo `_id` a un documento cuando es creado.
    - La opción `{ timestamps: true }` agrega automáticamente la hora y fecha de creación (`createdAt` and `updatedAt`) cada que se crea o actualiza un documento.
3. Añadir validaciones al modelo de Usuario

    ```jsx
    // Usuario.js
    var mongoose = require("mongoose");
    var uniqueValidator = require("mongoose-unique-validator");

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
    ```

    La opción `{index: true}` optimizará los queries para el campo username e email.

4. Para crear un nuevo usuario con password y autenticación, añadiremos algunos *helper methods* a nuestro modelo para crear, validar contraseñas y generar el JWT. Para generar y validar hashes se utilizará el algoritmo pbkdf2 que viene en la librería crypto de Node.

    Añadiremos la siguiente línea arriba

    ```jsx
    var crypto = require('crypto');
    var jwt = require('jsonwebtoken');
    var secret = require('../config').secret;
    ```

5. Agregamos los siguientes métodos a nuestro modelo

    ```jsx
    ...
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

    UsuarioSchema.methods.generarJWT = function() {
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
     * Devuelve la representación de un usuario después de autenticar
     */
    UsuarioSchema.methods.toAuthJSON = function(){
      return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        foto: this.foto,
        tipo: this.tipo,
      };
    };

    mongoose.model("Usuario", UsuarioSchema);
    ```

6. Añadiremos las siguientes modificaciones a nuestro archivo `app.js` teniendo cuidado de que esté arriba de la declaración de las rutas.

    ```jsx
    mvar mongoose = require("mongoose");

    mongoose.connect(
      "mongodb+srv://<usuario>:<password>@cluster0-xmea4.mongodb.net/<dbname>?retryWrites=true&w=majority"
    );
    mongoose.set("debug", true);

    require("./models/Usuario");
    // Aquí se importarán los modelos Mascota y Solicitud cuando estén listos
    ```

    recuerda reemplazar los campos que están entre <> en la url de conexión con la información de tu cuenta de MongoDB Atlas

7. No olvides instalar los paquetes necesarios

    ```bash
    npm install mongoose-unique-validator
    ```

# Integrando nuestro primer modelo

## Configurando sesiones con Passport.js

1. Modificaremos el archivo `config/index.js`

    ```jsx
    module.exports = {
      secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
    };
    ```

2. Crea un nuevo archivo `config/pasport.js`con lo siguiente  

    ```jsx
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var mongoose = require('mongoose');
    var Usuario = mongoose.model('Usuario');

    passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, function (email, password, done) {
      Usuario.findOne({ email: email }).then(function (user) {
        if (!user || !user.validarPassword(password)) {
          return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
        }
        return done(null, user);
      }).catch(done);
    }));
    ```

    `LocalStrategy` inspecciona los campos `username` y `password` de las peticiones que vienen del frontend, esperando que la petición tenga el siguiente formato

    ```json
    {
    	"email": "yo@juanitovega.com",
    	"password": "mipassword"
    }
    ```

3. Instala las dependencias para utilizar passport.js

    ```bash
    npm install jsonwebtoken passport passport-local express-jwt
    ```

4. Registra passport en `app.js`

    ```jsx
    require('./config/passport');
    ```

5. Crearemos dos *middlewares*  en el archivo `routes/auth.js` para decodificar el código JWT

    ```jsx
    var jwt = require('express-jwt');
    var secret = require('../config').secret;

    function getTokenFromHeader(req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      }

      return null;
    }

    var auth = {
      requerido: jwt({
        secret: secret,
        userProperty: 'usuario',
        getToken: getTokenFromHeader
      }),
      opcional: jwt({
        secret: secret,
        userProperty: 'usuario',
        credentialsRequired: false,
        getToken: getTokenFromHeader
      })
    };

    module.exports = auth;
    ```

    - El *middleware* `requerido` se utilizará para endpoints dónde se requiera tener una sesión y `opcional` dónde no sean necesarioas.
    - La función `getTokenFromHeader()` es una función que utlizarán los dos midlewares para extraer el token de el header de `Authorization` de una petición http.
    - La propiedad `userProperty` es dónde vendrá el JWT descifrado y que podrémos utilizar después en el objeto request por medio de `req.usuario`
6. Ahora utilizaremos los métodos que nos proporciona Mongoose en nuestro archivo  `controllers/usuarios.js`. 

    ```jsx
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

    function eliminarUsuario(req, res) {
      // únicamente borra a su propio usuario obteniendo el id del token
      Usuario.findOneAndDelete({ _id: req.usuario.id }).then(r => {
        res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
      })
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
    ```

7. Por último, actualizar el archivo `routes/usuarios.js` utilizando el middleware de autenticación para proteger información sensible de los usuarios.

    ```jsx
    const router = require('express').Router();
    const {
      crearUsuario,
      obtenerUsuarios,
      modificarUsuario,
      eliminarUsuario,
      iniciarSesion
    } = require('../controllers/usuarios')
    var auth = require('./auth');

    router.get('/', auth.requerido, obtenerUsuarios)
    router.get('/:id', auth.requerido, obtenerUsuarios);
    router.post('/', crearUsuario)
    router.post('/entrar', iniciarSesion)
    router.put('/:id', auth.requerido, modificarUsuario)
    router.delete('/:id', auth.requerido, eliminarUsuario)

    module.exports = router;
    ```

### Reto 1

Es momento de probar los nuevos endpoints de la API, así que ejecuta el servidor y realiza las siguientes tareas.

1. Crea una cuenta de adoptapet en el endpoint `POST [/v1/usuarios](http://localhost:3000/v1/usuarios)` guarda el token que te devuelve la petición.
2. Obtén la información de tu perfil en el endpoint `GET [/v1/usuarios](http://localhost:3000/v1/usuarios)` ahora será necesario que cambies los headers de authenticación y pongas el token con el prefijo 'Bearer'.

    Ejemplo: `Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'`

3. Modifica tu nombre de usuario.
4. Modifica tu password
5. Ahora pregúntate ¿En que caso necesitaríamos conocer información sobre otro usuario?
6. ¿Si el usuario no tiene la propiedad `tipo` cuándo es creado en una petición POST, podemos hacer algo para asignarle un tipo?