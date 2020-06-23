# Postwork

## Objetivo

Reflexionar sobre el alcance de las bases de datos relacionales y la importancia de su implementación.

## Instrucciones

Leer el siguiente material

## Desarrollo

### Funciones y Procedimientos Almacenados

**Articulo 1**

[Cómo crear y usar una función almacenada MySQL](https://www.neoguias.com/funciones-almacenadas-mysql/)

Articulo 2

[Cómo crear y usar un procedimiento almacenado MySQL](https://www.neoguias.com/procedimientos-almacenados-mysql/)

### Seguridad

Es importante mantener la seguridad en las bases de datos de lo intentos por robar o modificar datos ya que el impacto puede ser catastrofico. La seguridad en la bases de datos se resumen a autorizaciones de lectura, actualización, eliminación, inserción de los datos, por ello, la administración de usuarios, grupos y roles será fundamental.Los SGBD tienen definida la clausula *GRANT* que permitirá conceder o revocar privilegios específicos a usuarios, grupos o roles.

**Articulo**

[](https://codigofacilito.com/articulos/asignar-permisos-mysql)

Pero más allá de diseñar un control de acceso de la bases de datos, es fundamental la creación de un plan de contingencia que incluye la creación de *backups.*

La seguridad de las bases de datos no solamente es a nivel BD, también debe ser a nivel de red, nivel de sistema operativo, seguridad incluso a nivel humano.

### Optimización de consultas en una BD Relacional

Como ya hemos estudiado, las consultas nos permiten manipular información en una bases de datos y debemos preocuparnos de la eficiencia con que las implementamos, al tener un número extraordinario de datos se vuelve relevante el tiempo en el que se trae esos datos. La optimización de consultas es un tema a estudiar tarde o temprano vamos a utilizarlo. Existen algoritmos y técnicas para la optimización de consultas que van desde la creación hasta la utilización del álgebra relacional, es un tema de especialización que debe estudiarse.

El siguiente video puede ser una breve introducción a esto:

[Administración de Bases de Datos - Tema 3. Procesamiento de consultas - Andrés Muñoz](https://www.youtube.com/watch?v=AC5n-wz3Fx8)