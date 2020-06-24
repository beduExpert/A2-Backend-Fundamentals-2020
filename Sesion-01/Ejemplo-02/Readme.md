# Editando Archivos

En UNIX (Linux/MacOS) existen diversas maneras de editar un archivo sin necesidad de salir de la terminal.

## Desarrollo

Editaremos un archivo sin salir de la terminal. 

Para esto podemos utilizar los siguientes dos programas que pueden ejecutarse desde la línea de comandos.

## nano

**Sintaxis: `nano [nombre del archivo]`**

![img/Untitled.png](img/Untitled.png)

Esto nos muestra la siguiente interfaz.

![img/Screen_Shot_2020-03-16_at_22.21.11.png](img/Screen_Shot_2020-03-16_at_22.21.11.png)

Ahora, copiaremos el siguiente código:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Editando en Nano</title>
</head>
<body>
	  <h1>hello friend!</h1>
</body>
</html>
```

Y guardaremos el archivo con `ctrl + o`

Para salir presionamos `ctrl + x`

## vim

vim es una versión mejorada de *vi* un editor de texto que viene instalado por defecto en los sitemas UNIX. Aunque es más complejo de utilizar que nano, una vez que lo dominas será una poderosa herramienta.

Abriremos el archivo anterior con el comando `vim + [nombre de archivo]` 

![img/Untitled%201.png](img/Untitled%201.png)

Esto nos mostrará una interfaz como la siguiente

![img/Untitled%202.png](img/Untitled%202.png)

Te darás cuenta que vim no nos permite editar directamente cuando abrimos un archivo, ya que vim tiene diferentes **modos** de trabajo.

Para activar el modo edición (insert mode) presionaremos la tecla `i` 

![img/Screen_Shot_2020-03-21_at_14.35.53.png](img/Screen_Shot_2020-03-21_at_14.35.53.png)

ahora añadiremos la línea `<p>Editando desde VIM</p>` debajo de nuestro encabezado desplazandonos con las teclas de flecha.

![img/Untitled%203.png](img/Untitled%203.png)

Para guardar primero debemos salir del modo edición, presionando la tecla `ESC` 

![img/Screen_Shot_2020-03-21_at_15.37.45.png](img/Screen_Shot_2020-03-21_at_15.37.45.png)

Esto nos llevará al modo de comandos, aquí ingresaremos el comando `:w` para guardar, ó podemos usar `:wq` para guardar y salir, luego presionamos enter.

Si haz seguido bien los pasos felicidades, has salido de vim sin morir en el intento.

### Mas comandos de vim

`:q!` Salir sin guardar cambios

`u` Deshacer

`ctrl + r` Rehacer

`:set number` mostrar numeración de líneas

# Reto 2

Con la estructura creada en el [Reto 1](../Navegaci%20n%20File%20system%2004b5baa90c064435ba38ec1a76f0522a/Reto%201%20cb33301dd4f642598de5e30ab33a761c.md) realiza las siguientes ediciones de los archivos.

1. Al archivo [README.md](http://) agrega la siguiente información:

    ```markdown
    # Consola
    Clase de consola del curso Back-end fudamentals.
    ```

2. Edita el archivo hola.sh con el siguiente código

    ```bash
    echo "Hola desde la consola"
    ```

3. Edita el archivo loquesea.js y agrega estas líneas

    ```jsx
    var fecha = new Date();
    console.log(`Fecha actual: ${fecha}`)
    ```