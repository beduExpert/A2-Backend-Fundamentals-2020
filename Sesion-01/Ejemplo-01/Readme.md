# Navegación (File system)

Para navegar en nuestro sistema de archivos de nuestro sistema operativo podemos utilizar los siguientes comandos


### ls

lista el contenido del directorio dónde estamos posicionados.

![1](img/ls.png)

### cd

Nos permite posicionarnos en una ruta en específico, o *entrar* en una carpeta.

**Sintaxis básica:** `cd [ruta o nombre de la carpeta]`

![2](img/cd.png)

>💡 **Nota:**
>
>Para volver volver atrás en una ruta utilizamos `cd ..`

>💡 **Nota:**
>En windows los comandos tienen diversas variaciones. Si tienes problemas basta con googlear para buscar su equivalente.

### mkdir

Crea una nueva carpeta.

**Sintaxis básica:** `mkdir [nombre carpeta]`

![2](img/mkdir.png)

## rm

eliminar archivos/directorios

### touch

Crea un nuevo archivo.

**Sintaxis básica:** `touch [nombre del archivo con extensión]`

![2](img/tocuh.png)

## cp

Copia un nuevo archivo.

**Sintaxis básica:** `cp [ruta del archivo a copiar] [nueva ruta]`

![2](img/cp.png))

## mv

Mover o renombrar archivos.

**Sintaxis básica:** `mv [ruta del archivo] [nueva ruta / nuevo nombre]`

![2](img/mv.png)

## rm

Eliminar un archivo. Con la opción `-r` podemos también eliminar folders y sus contenidos de manera *recursiva.*

**Sintaxis básica:** `rm [opciones] [ruta del archivo]`

![2](img/rm.png)

## man

Despliega información del manual de algún comando

**Sintaxis Básica:** `man [nombre del comando]`

El siguiente ejemplo `man man` despliega el manual del mismo comando `man`

![2](img/man.png)

Otros ejemplos:

- `man rm`
- `man ifconfig`