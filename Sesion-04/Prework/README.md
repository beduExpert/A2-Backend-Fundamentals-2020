# Prework

## Objetivo

Comprender la importancia de las APIs y su utilidad en el mundo actual.

## Instrucciones

Leer los siguientes artículos y posteriormente contestar el cuestionario adjunto.

## Desarrollo

Crear un aplicación tipo Uber o hacer cobros por Internet, **¿Te imaginas como podrías hacerlo desde cero?** demandaría muchísimo trabajo y dinero, por eso es mejor utilizar un servicio que ya exista como lo es **Google Maps** ó conectarse a **PayPal.**

Si tu aplicación utiliza recursos de otra aplicación hace que sea más potente a diferencia de una aplicación que solo se maneja por sí sola, ese es el concepto de una API.

Las **APIs** son interfaces que permiten la comunicación entre dos aplicaciones de software siguiendo cierto conjunto de reglas.

La arquitectura más usada es **REST** y el formato de envió de datos más usado es **JSON.**

![api](https://imgfz.com/i/KgPhiYR.png)

### **Interfaz**

Permite que tú puedas consumir los servicios del sistema sin saber "que hay tras banbalinas". Ejemplo claro es el formulario de Login, en el cuál solo te interesa ingresar mas no saber qué pasa por detrás.

## **¿Qué es una API?**

Entonces una API (Application Programming Interface) es una interfaz (valga la redundancia), que permite que aplicaciones de software puedan intercambiar datos entre ellos.

![api](https://imgfz.com/i/QwtBydm.png)

### **Arquitectura de software**

Es la metodología en que esta diseñado un sistema, como están organizados, como es la comunicación y que roles cumplen los componentes.

### **Servicio Web**

Sistema que permite que equipos en una red se puedan comunicar siguiendo el protocolo **HTTP** (conjunto de reglas entre cliente-servidor para intercambiar información), esta es la base para que las APIs remotas permitan la comunicación entre aplicaciones de distintas locaciones.

**REST** (Representational State Transfer) es una Arquitectura de Software.

**Las API REST involucran:**

+ Guardar los datos en cache.
+ El estado no se envía en las peticiones.
+ Define permisos para que otra aplicacion pueda acceder, revisar o manipular datos de tu aplicacion.

## **Tipos de API**

+ **Locales:** Cuando la aplicación se comunica con la API que se encuentran en el mismo ambiente o dispositivo.

+ **Remotas:** Cuando la aplicación necesita consumir una API en un punto diferente.

Las Apis **remotas** pueden utilizar servicios web:

+ **Soap:** Es un protocolo que ya dejo de ser usado

+ **Rest:** Es la arquitectura mas usada, los Restful se basan en este.

## **Desarrollar una API**

+ **Consultar recursos (URI- Uniform Resource Identifier)** Cada consulta tiene un identificador único llamado URI, este se consulta por Endpoints que es la URL completa, y que permite consultar directamente un recurso.

+ **Códigos de Estado:** Cuando solicitamos información, el servidor responde con códigos con los que podemos saber el estado de nuestra petición.

![api](https://imgfz.com/i/nxvHViX.png)

## **Métodos HTTP**

Permiten interacción con la información de la API, es equivalente al **CRUD** de las bases de datos.
![api](https://imgfz.com/i/bQUqm8F.png)

## **Buenas Prácticas**

+ **HATEOAS:(Hypermedia as the Engine of Application State)** La API se autodescribe, podemos ser capaces de descubrir sus recursos basándonos únicamente en las respuestas del servidor.

+ **Seguridad:** Si tu API es privada necesitas seguridad para evitar el acceso o la manipulación de tu información.

+ **Testear:** Asegurar que la API funcione correctamente y que cumpla la función para la que fue diseñada.

+ **Documentar:** Una documentación bien estructurada facilita el consumo de nuestra API.

## **Artículo 1**

**Título: Amazon, Apple, Facebook, Google: How "The Four" Are Using APIs**

Esta [publicación](https://commercetools.com/blog/2017/11/07/the-four-apis.html) en inglés es un artículo que aborda de una manera no técnica y más abierta el concepto de API y su importancia en los negocios, en especial habla sobre cómo cuatro de las empresas tecnológicas más importantes han utilizado este concepto para crecer y convertirse en lo que son ahora.

>⚠️ **Nota**
>
>Si tienes problemas leyendo inglés se recomienda traducir la página automáticamente o instalar la extensión oficial de google translate.

## **Articulo 2**

**Título: API REST, qué es y cuáles son sus ventajas en el desarrollo de proyectos**

Este [articulo](https://bbvaopen4u.com/es/actualidad/api-rest-que-es-y-cuales-son-sus-ventajas-en-el-desarrollo-de-proyectos) explica de manera técnica las características y ventajas de una API REST. Servirá como introducción a los conceptos técnicos que nos conciernen para esta sesión.

## **Articulo 3**

[JavaScript: ¿Qué demonios es un Callback?](http://developinginspanish.com/2019/03/18/javascript-que-demonios-es-un-callback/)



## Quiz

1. Si quisieras desarrollar una aplicación utilizando los mapas de google, ¿Cómo podrías comenzar?
2. ¿Cuáles son las operaciones más importantes relacionadas con los datos en un sistema REST?
3. ¿Cómo identificamos un recurso en REST?
4. ¿Cuales son los lenguajes de intercambio de información más comunes que podemos responder en una API REST?
5. Menciona dos ventajas del uso de REST
