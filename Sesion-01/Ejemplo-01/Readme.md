# Navegación (File system)

Para navegar en nuestro sistema de archivos de nuestro sistema operativo podemos utilizar los siguientes comandos

### ls

lista el contenido del directorio dónde estamos posicionados.

![1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/275c0772-a834-48ba-b304-1141175bfc96/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T163817Z&X-Amz-Expires=86400&X-Amz-Signature=ddca074dd5e71a98c05e62a028f47ee80e7c906513794e3125b33d0eac8fc162&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")

### cd

Nos permite posicionarnos en una ruta en específico, o *entrar* en una carpeta. 

**Sintaxis básica:** `cd [ruta o nombre de la carpeta]` 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/158c1c78-6c69-4de7-a6e9-f3ec23f02523/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/158c1c78-6c69-4de7-a6e9-f3ec23f02523/Untitled.png)

Para volver volver atrás en una ruta utilizamos `cd ..` 

En windows los comandos tienen diversas variaciones. Si tienes problemas basta con googlear para buscar su equivalente.

### mkdir

Crea una nueva carpeta.

**Sintaxis básica:** `mkdir [nombre carpeta]`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ceb35ef-c962-4da2-8f3b-b529cfb74643/Screen_Shot_2020-03-16_at_20.13.37.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ceb35ef-c962-4da2-8f3b-b529cfb74643/Screen_Shot_2020-03-16_at_20.13.37.png)

## rm

eliminar archivos/directorios

### touch

Crea un nuevo archivo.

**Sintaxis básica:** `touch [nombre del archivo con extensión]`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1474f8a7-5518-43db-9d2a-09fe3be731a4/Screen_Shot_2020-03-16_at_20.35.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1474f8a7-5518-43db-9d2a-09fe3be731a4/Screen_Shot_2020-03-16_at_20.35.16.png)

## cp

Copia un nuevo archivo.

**Sintaxis básica:** `cp [ruta del archivo a copiar] [nueva ruta]`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e67d07a-3d54-430a-8567-8b4a7fc843cc/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e67d07a-3d54-430a-8567-8b4a7fc843cc/Untitled.png)

## mv

Mover o renombrar archivos.

**Sintaxis básica:** `mv [ruta del archivo] [nueva ruta / nuevo nombre]`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1ac1c46-1473-4193-b0f6-bfaf9a4ce32e/Screen_Shot_2020-06-04_at_23.40.39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1ac1c46-1473-4193-b0f6-bfaf9a4ce32e/Screen_Shot_2020-06-04_at_23.40.39.png)

## rm

Eliminar un archivo. Con la opción `-r` podemos también eliminar folders y sus contenidos de manera *recursiva.*

**Sintaxis básica:** `rm [opciones] [ruta del archivo]`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b1c2324-3372-423c-9326-6e31306fd5c8/Screen_Shot_2020-06-04_at_23.43.18.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b1c2324-3372-423c-9326-6e31306fd5c8/Screen_Shot_2020-06-04_at_23.43.18.png)

## man

Despliega información del manual de algún comando

**Sintaxis Básica:** `man [nombre del comando]`

El siguiente ejemplo `man man` despliega el manual del mismo comando `man` 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69b6960a-903f-4a59-89ad-6bd2143b9f22/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69b6960a-903f-4a59-89ad-6bd2143b9f22/Untitled.png)

Otros ejemplos:

- `man rm`
- `man ifconfig`


## Quiz

1. ¿Tu computadora puede ser un servidor?
2. ¿Cuál es la función de un servidor DNS?
