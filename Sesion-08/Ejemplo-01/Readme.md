# Ejemplo 1 - Preparando nuestra API para producción

## Objetivo

Preparación de un ambiente de producción por medio de cofiguración de variables de entorno.

Implementar buenas prácticas de seguridad antes de subir nuestro código a un repositorio.

## Requerimientos

Contar con el código de la API que estaba en desarrollo desde la lección 7.

## Desarrollo

A continuación prepararemos el código de la API de adopta-pet para poder subirlo a github y compartirlo de manera segura.

### Ambientes de desarrollo

El manejo de ambientes de desarrollo nos permite establecer diferentes configuraciones cuándo estamos trabajando con nuestro código. Es buena práctica establecer mínimo dos ambientes de desarrollo, los cuales pueden ser 'development' y 'production', así por ejemplo, podríamos establecer una base de datos de pruebas, ya sea de manera local o en un servidor con recursos más limitados o que utilice una base gratuita cuya consistencia de los datos no sea tan relevante cómo la de una base de datos de producción, la cuál debe estar preparada para recibir más carga de trabajo y tener alta disponibilidad.

También es común que tengamos variables que van a cambiar según las circunstancias y la plataforma donde nuestro código sea ejecutado.

Si queremos compartir nuestro código por medio de un repositorio público, es importante tener cuidado con los datos sensibles a los cuales no deseamos que otras personas tengan acceso. 

Una de las maneras más simples para almacenar información sin tenerla escrita directamente en el código es por medio de **variables de entorno.** 

Para crear una variable de entorno podemos utilizar la siguiente sintaxis directamente en la terminal de nuestro sistema UNIX:

```bash
export NOMBRE_VARIABLE=valor
```

Una vez guardada podrás utilizarla así

```jsx
echo $NOMBRE_VARIABLE
#$~ valor
```

y para acceder a ellas con node.js utilizamos el siguiente código:

```jsx
process.env.NOMBRE_VARIABLE
```

### Variables de entorno en adoptapet

1. Crea un archivo `env.sh` para guardar las variables de entorno y añade lo siguiente

    ```bash
    export NODE_ENV='development'
    export PORT=30000
    export SECRET='secret' # para mayor seguridad puedes cambiar esto por el secreto de tu preferencia
    export MONGODB_URI='mongodb+srv://<username>:<password>@cluster0-xmea4.mongodb.net/adoptapet?retryWrites=true&w=majority'
    ```

    Recuerda sustituir los campos entre `<>` dentro de la `MONGODB_URI`

2. Para cargar las variables de manera local debes posicionarte en la ruta del archivo `[env.sh](http://env.sh)` y ejecutar

    ```bash
    source ./env.sh
    ```

3. Ahora podremos saber si la API está en producción o no por medio de la variable `NODE_ENV` . Así que modificaremos el archivo `app.js`

    ```jsx
    var isProduction = process.env.NODE_ENV === 'production';

    mongoose.connect(
      process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
      { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
    );
    ```

4. Para visualizar errores explicitamente en el entorno de desarrollo puedes agregar la siguiente condición

    ```jsx
    const errorhandler = require('errorhandler')
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
    ```

    Para utilizar errorhandler debes instalarlo con `npm i errorhandler`

5. Revisa que al llamar al método `app.listen` se esté utilizando la variable PORT

    ```jsx
    // Iniciando el servidor...
    var server = app.listen(process.env.PORT || 3000, function () {
      console.log('Escuchando en el puerto ' + server.address().port);
    });
    ```

6. Ahora en el archivo `config/index.js` verifica que esté el siguiente código.

    ```jsx
    module.exports = {
      secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "secret",
    };
    ```

    Aquí estamos obteniendo la variable de entorno `SECRET` para verificar la autenticidad de los tokens de los usuarios con JWT. 

    Más adelante cambiaremos este *secret* en producción por algo más seguro y que puedas recordar.

## Reto 1

1. Una vez que hayas verificado que el consumo de variables de entorno esté en orden, si aún no lo has hecho, **inicializa un nuevo repositorio de git** con el proyecto de adoptapet.
2.  **Es importante que antes de hacer push actualices el archivo `.gitignore`** agregando la carpeta `node_modules/` y tu archivo `env.sh`  
3. Una vez hecho lo anterior sube tu repositorio a tu cuenta de **github.** Para la siguiente sesión será importante que tengas este repo actualizado y listo.