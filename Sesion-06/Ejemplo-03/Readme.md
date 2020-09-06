# Ejemplo 3

## Objetivo

Comprender los métodos proporcionados por MongoDB para realizar operaciones CRUD en una bases de datos. 

## Requerimientos

- Conexión a internet
- MongoDB Shell en tu computadora

## Desarrollo

### Inserción de documentos

MongoDB proporciona los siguientes métodos para agregar documentos a una colección:

- db.collection.insertOne()

    ```jsx
    db.collection.insertOne(
       <document>,
       {
          writeConcern: <document>
       }
    )
    ```

- db.collection.insertMany()

    ```jsx
    db.collection.insertMany(
       [ <document 1> , <document 2>, ... ],
       {
          writeConcern: <document>,
          ordered: <boolean>
       }
    )
    ```

💡 Recordando: Si se omite el campo **_id** MongoDB creará uno internamente de tipo **ObjectId**.

### Leer documentos

MongoDB proporciona **find** para leer documentos de una colección:

- db.collection.find()

    ```jsx
    db.collection.find(query, projection)
    ```

    donde:

    - query: Especifica el filtro de selección utilizando operadores.
    - projection: Especifica los campos que se devolverán en los documentos que coinciden con el filtro de consulta.

    **Operadores de consulta básicos**

    Comparación: 

    - $eq: Coincidencias con valores que son iguales a un valor especificado.
    - $gt: Coincidencias con valores mayores a un valor especificado.
    - $gte: Coincidencias con valores mayores o iguales a un valor especificado.
    - $in: Coincidencias con cualquiera de los valores especificados en una matriz.
    - $lt: Coincidencias con valores menores a un valor especificado.
    - $lte: Coincidencias con valores menores o iguales a un valor especificado.
    - $ne: Coincidencias con valores que no son iguales a un valor especificado.
    - $nin: No coincide con ninguno de los valores especificados en una matriz.

    Lógico:

    Tendremos los operadores comunes utilizados en los lenguajes de programación: $and, $not, $nor y $or.

    Elemento:

    - $exists: Coincidencias con documentos que tienen el campo especificado.

    [Query and Projection Operators - MongoDB Manual](https://docs.mongodb.com/manual/reference/operator/query/)

### Actualización de documentos

MongoDB proporciona los siguientes métodos para actualizar datos

- db.collection.updateOne()

    ```jsx
    db.collection.updateOne(
       <filter>,
       <update>,
       {
         upsert: <boolean>,
         writeConcern: <document>,
         collation: <document>,
         arrayFilters: [ <filterdocument1>, ... ],
         hint:  <document|string>        // Available starting in MongoDB 4.2.1
       }
    )
    ```

- db.collection.updateMany()

    ```jsx
    db.collection.updateMany(
       <filter>,
       <update>,
       {
         upsert: <boolean>,
         writeConcern: <document>,
         collation: <document>,
         arrayFilters: [ <filterdocument1>, ... ],
         hint:  <document|string>        // Available starting in MongoDB 4.2.1
       }
    )
    ```

- db.collection.replaceOne()

    ```jsx
    db.collection.replaceOne(
       <filter>,
       <replacement>,
       {
         upsert: <boolean>,
         writeConcern: <document>,
         collation: <document>,
         hint: <document|string>                   // Available starting in 4.2.1
       }
    )
    ```

### Eliminar documentos

MongoDB proporciona los siguientes métodos para eliminar documentos:

- db.collection.deleteOne()

    ```jsx
    db.collection.deleteOne(
       <filter>,
       {
          writeConcern: <document>,
          collation: <document>
       }
    )
    ```

- db.collection.deleteMany()

    ```jsx
    db.collection.deleteMany(
       <filter>,
       {
          writeConcern: <document>,
          collation: <document>
       }
    )
    ```

### Ejemplo

Del modelado embebido realizado en el ejercicio 2 de esta sesión haremos uso de los métodos para hacer operaciones CRUD:

1. Crear la colección de "usuarios"

    ```jsx
    db.createCollection('usuarios')
    ```

    ```json
    {
    	"ok" : 1,
    	"$clusterTime" : {[`Atrás: Reto-02`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-01/Reto-02n)
    		"clusterTime" : Timestamp(1592800772, 5),
    		"signature" : {
    			"hash" : BinData(0,"Cqg3SKYxW90A98A5Xz0qScsRGP0="),
    			"keyId" : NumberLong("6799349003877089281")
    		}
    	},
    	"operationTime" : Timestamp(1592800772, 5)
    }
    ```

2. Insertar un documento en la colección de "usuarios"

    ```jsx
    db.usuarios.insertOne({
         "nombre": "Diego Lugo",
         "email": "dieguitolu@gmail.com",
         "tipo_cuenta": "experto"
    })
    ```

    ```json
    {
    	"acknowledged" : true,
    	"insertedId" : ObjectId("5ef036f1d761235365aa9ca2")
    }
    ```

3. Insert varios documentos en la colección "usuarios"

    ```jsx
    db.usuarios.insertMany([{
        "nombre": "Alejandro Martínez",
        "email": "alexmtz@gmail.com",
        "tipo_cuenta": "legendario",
    },
    {
        "nombre": "Sergio Medina",
        "email": "sergiomedina@hotmail.com",
        "tipo_cuenta": "aficionado"
    },
    {
        "nombre": "Emmanuel Martínez",
        "email": "emmamtz@gmail.com",
        "tipo_cuenta": "legendario"
    }])
    ```

    ```json
    {
    	"acknowledged" : true,
    	"insertedIds" : [
    		ObjectId("5ef03837d761235365aa9ca3"),
    		ObjectId("5ef03837d761235365aa9ca4"),
    		ObjectId("5ef03837d761235365aa9ca5")
    	]
    }
    ```

4. Leer los documentos existentes en la colección "usuarios"

    ```jsx
    db.usuarios.find()
    ```

    ```json
    { "_id" : ObjectId("5ef036f1d761235365aa9ca2"), "nombre" : "Diego Lugo", "email" : "dieguitolu@gmail.com", "tipo_cuenta" : "experto" }
    { "_id" : ObjectId("5ef03837d761235365aa9ca3"), "nombre" : "Alejandro Martínez", "email" : "alexmtz@gmail.com", "tipo_cuenta" : "legendario" }
    { "_id" : ObjectId("5ef03837d761235365aa9ca4"), "nombre" : "Sergio Medina", "email" : "sergiomedina@hotmail.com", "tipo_cuenta" : "aficionado" }
    { "_id" : ObjectId("5ef03837d761235365aa9ca5"), "nombre" : "Emmanuel Martínez", "email" : "emmamtz@gmail.com", "tipo_cuenta" : "legendario" }
    ```

5. Leer los documentos cuyo "tipo_cuenta" es *legendario*

    ```jsx
    db.usuarios.find({"tipo_cuenta":"legendario"})
    ```

    ```json
    { "_id" : ObjectId("5ef03837d761235365aa9ca3"), "nombre" : "Alejandro Martínez", "email" : "alexmtz@gmail.com", "tipo_cuenta" : "legendario" }
    { "_id" : ObjectId("5ef03837d761235365aa9ca5"), "nombre" : "Emmanuel Martínez", "email" : "emmamtz@gmail.com", "tipo_cuenta" : "legendario" }
    ```

6. Crear un post en la colección "posts"

    ```jsx
    db.posts.insertOne({
    "nombre": "Bases de Datos Relacionales",
        "fecha_publicacion": "2020-05-12",
        "texto": "Las bases de datos...",
        "autor": [ObjectId("5ef036f1d761235365aa9ca2"), ObjectId("5ef03837d761235365aa9ca3")],
        "etiquetas": [
            "Bases de Datos Relacionales", "Modelo E/R"
        ],
        "categorias": [
            "TI", "Desarrollo de Software"
        ]
    })
    ```

    ```json
    {
    	"acknowledged" : true,
    	"insertedId" : ObjectId("5ef03c44d761235365aa9ca6")
    }
    ```

7. Crear comentarios  para el post insertado anteriormente

    ```jsx
    db.comentarios.insertMany([{
        "autor": ObjectId("5ef03837d761235365aa9ca4"),
        "fecha_publicacion": "2020-05-23",
        "texto": "Excelente post, me ayudo a comprender más...",
        "puntuacion": 5
    },
    {
        "autor": ObjectId("5ef03837d761235365aa9ca5"),
        "fecha_publicacion": "2020-06-01",
        "texto": "Hay ciertos conceptos que no me quedaron claros...",
        "puntuacion": 3
    }])
    ```

    ```jsx
    {
    	"acknowledged" : true,
    	"insertedIds" : [
    		ObjectId("5ef03e5cd761235365aa9ca7"),
    		ObjectId("5ef03e5cd761235365aa9ca8")
    	]
    }
    ```

8. Actualizar el documento del post creado para agregar las referencias de los comentarios creados

    ```jsx
    db.posts.updateOne(
        { _id: ObjectId("5ef03c44d761235365aa9ca6") },
        { $push: { comentarios: ObjectId("5ef03e5cd761235365aa9ca7") } }
    )
    ```

    ```json
    { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
    ```

    ```jsx
    db.posts.updateOne(
        { _id: ObjectId("5ef03c44d761235365aa9ca6") },
        { $push: { comentarios: ObjectId("5ef03e5cd761235365aa9ca8") } }
    )
    ```

    ```json
    { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
    ```

9. Ver que las referencias de los comentarios se hayan almacenando

    ```jsx
    db.posts.find({ "_id" : ObjectId("5ef03c44d761235365aa9ca6") }, { "_id" : 1, comentarios : 1 })
    ```

    ```json
    { "_id" : ObjectId("5ef03c44d761235365aa9ca6"), "comentarios" : [ ObjectId("5ef03e5cd761235365aa9ca7"), ObjectId("5ef03e5cd761235365aa9ca8") ] }
    ```

10. Leer los documentos de los comentarios que publicaron en junio

    ```jsx
    db.comentarios.find({ fecha_publicacion: { $gte: "2020-06-01", $lt: "2020-07-01" }})
    ```

    ```json
    { "_id" : ObjectId("5ef03e5cd761235365aa9ca8"), "autor" : ObjectId("5ef03837d761235365aa9ca5"), "fecha_publicacion" : "2020-06-01", "texto" : "Hay ciertos conceptos que no me quedaron claros...", "puntuacion" : 3 }
    ```

11. Eliminar un comentario
    1. Eliminar la referencia del comentario en el post

        ```jsx
        db.posts.updateOne(
            { _id: ObjectId("5ef03c44d761235365aa9ca6") },
            { $pull: { comentarios: ObjectId("5ef03e5cd761235365aa9ca8") } }
        )
        ```

        ```json
        { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
        ```

    2. Ver que los cambios funcionaron

        ```jsx
        db.posts.find({ "_id" : ObjectId("5ef03c44d761235365aa9ca6") }, { "_id" : 1, comentarios : 1 })
        ```

        ```json
        { "_id" : ObjectId("5ef03c44d761235365aa9ca6"), "comentarios" : [ ObjectId("5ef03e5cd761235365aa9ca7") ] }
        ```

    3. Eliminar el documento en la colección "comentarios"

        ```jsx
        db.comentarios.deleteOne({ _id: ObjectId("5ef03e5cd761235365aa9ca8") })
        ```

        ```jsx
        { "acknowledged" : true, "deletedCount" : 1 }
        ```

    4. Leer los comentarios actuales

        ```jsx
        db.comentarios.find()
        ```

        ```json
        { "_id" : ObjectId("5ef03e5cd761235365aa9ca7"), "autor" : ObjectId("5ef03837d761235365aa9ca4"), "fecha_publicacion" : "2020-05-23", "texto" : "Excelente post, me ayudo a comprender más...", "puntuacion" : 5 }
        ```

[`Atrás: Reto 03`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-06/Reto-03) | [`Siguiente: Reto 04`](https://github.com/beduExpert/A2-Backend-Fundamentals-2020/tree/master/Sesion-06/Reto-04)
