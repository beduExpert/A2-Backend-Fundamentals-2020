# Modelo Vista Controlador

## Objetivo

Entender la arquitectura Modelo Vista Controlador y su utilidad en la etapa de diseño de una aplicación.

## Requerimientos

Computadora y cuaderno para tomar notas. Estar familiarizado con el concepto de Programación Orientada a Objetos.

## Desarrollo

Una de las maneras para bajar nuestras ideas y comenzar a diseñar la arquitectura de nuestra solución de software es por medio del patrón MVC *(Model View Controller)* 

### ¿Qué es MVC?

Es un patrón de diseño que separa las partes de nuestra aplicación en tres elementos.

- **Modelo:** Contiene una representación de los datos que maneja el sistema, su lógica de negocio, y sus mecanismos de persistencia.
- **Vista:**  Compone y presenta la información que se envía al cliente y los mecanismos interacción con éste por medio de una interfaz de usuario.
- **Controlador:** Actúa como un intermediario entre el Modelo y la Vista, gestionando el flujo de información entre ellos y las transformaciones para adaptar los datos a las necesidades de cada uno.

![img/flujo-mvc.png](img/flujo-mvc.png)

### Flujo MVC

MVC es un estilo de arquitectura que nos sirve para abstraer el funcionamiento de nuestra aplicación y separar las partes referentes al negocio de la lógica. Actualmente existen varios frameworks que han adaptado este estilo a su manera y que nos ayudan a no perder tiempo y comenzar a desarrollar con reglas preestablecidas. Algunos de estos frameworks son:

- SailJS o Express para NodeJS.
- Django si lo tuyo es Python.
- Ruby on Rails para el lenguaje de programación Ruby.
- Laravel si lo tuyo es PHP.

Los cuales nos permiten entregarle al usuario las vistas (documentos HTML, CSS y Javascript) desde el servidor.

MVC también ha sido adaptado para utilizarse en frontend y en Android.

### Modelo: Utilizando Programación Orientada a Objetos

Continuando con AdoptaPet, podemos identificar cuatro entidades principales:

1. Mascota: Se refiere al animalito que los administradores registran y que los usuarios pueden adoptar.
2. Usuario: hay dos tipos de usuarios de nuestra aplicación, el tipo normal que busca adoptar una mascota y el tipo anunciante que puede ser el cuidador de la mascota o del centro de adopción. Se encarga de registrar a las mascotas y de contactarse con los usuarios cuando estos envían una solicitud, así como de aprobarla y rechazarla.
3. Solicitud: Una solicitud puede ser creada por un usuario para ponerse en contacto con el administrador y adoptar a una mascota. 

Estos cuatro elementos serán nuestros modelos. Utilizando programación orientada a objetos podemos crear una [clase](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes) para cada uno y así posteriormente el usuario podrá utilizar estos modelos creando instancias y obteniéndolas. 

```jsx
// Mascota.js

/** Clase que representa un animalito a adoptar */
class Mascota{
	constructor(nombre, categoria, fotos, descripcion, anunciante, ubicacion){
		this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
    this.categoria = categoria; // perro | gato | otro
    this.fotos = fotos; // links a las fotografías
    this.descripcion = descripcion; // descripción del anuncio
    this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
    this.ubicacion = ubicacion; // muy importante
	}
	
	guardar(){
		// función para guardar un nuevo registro en la base de datos.
	}
	
}
```

>**NOTA:**
>
>Este código nos va a permitir instanciar nuevos objetos, pero para que esta información persista debemos guardarla en una base de datos, algo que veremos en las sesiones posteriores.

