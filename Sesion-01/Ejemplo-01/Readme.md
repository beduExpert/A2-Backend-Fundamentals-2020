# Navegación (File system)

Para navegar en el sistema de archivos de nuestro sistema operativo podemos utilizar los siguientes comandos

### ls

Lista el contenido del directorio en dónde estamos posicionados.

![1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/275c0772-a834-48ba-b304-1141175bfc96/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T163817Z&X-Amz-Expires=86400&X-Amz-Signature=ddca074dd5e71a98c05e62a028f47ee80e7c906513794e3125b33d0eac8fc162&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")

### cd

Nos permite posicionarnos en una ruta en específico, o *entrar* en una carpeta. 

**Sintaxis básica:** `cd [ruta o nombre de la carpeta]`

> 💡 **Nota:**
>
> Explicar la diferencia entre rutas relativas y rutas absolutas.

![2](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/158c1c78-6c69-4de7-a6e9-f3ec23f02523/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T163920Z&X-Amz-Expires=86400&X-Amz-Signature=8e006d2f6c2819bffd9abf9e4e55954a14f33eec781ca2c27f85038380c66cb3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")

Para volver volver atrás en una ruta utilizamos `cd ..` 

En windows los comandos tienen diversas variaciones. Si tienes problemas basta con googlear para buscar su equivalente.

### mkdir

Crea una nueva carpeta.

**Sintaxis básica:** `mkdir [nombre carpeta]`

![3](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1ceb35ef-c962-4da2-8f3b-b529cfb74643/Screen_Shot_2020-03-16_at_20.13.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T164055Z&X-Amz-Expires=86400&X-Amz-Signature=2d86187d36c38626dca99dbe350694e2c2e37ebe1882fde4dc33df7f1291a101&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Screen_Shot_2020-03-16_at_20.13.37.png")

### touch

Crea un nuevo archivo.

**Sintaxis básica:** `touch [nombre del archivo con extensión]`

![4](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1474f8a7-5518-43db-9d2a-09fe3be731a4/Screen_Shot_2020-03-16_at_20.35.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T164114Z&X-Amz-Expires=86400&X-Amz-Signature=bcc68fdec8f4116324506fd2921196a539155e25cfc57ce1c79a8dc31bb9098e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Screen_Shot_2020-03-16_at_20.35.16.png")

## cp

Copia un nuevo archivo.

**Sintaxis básica:** `cp [ruta del archivo a copiar] [nueva ruta]`

![5](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e67d07a-3d54-430a-8567-8b4a7fc843cc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T164146Z&X-Amz-Expires=86400&X-Amz-Signature=35e61526e854dc742e51e6a523ef12705ca1bb160bbc45256d0bb063c8ec73c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")

## mv

Mover o renombrar archivos.

**Sintaxis básica:** `mv [ruta del archivo] [nueva ruta / nuevo nombre]`

![6](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1ac1c46-1473-4193-b0f6-bfaf9a4ce32e/Screen_Shot_2020-06-04_at_23.40.39.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T164216Z&X-Amz-Expires=86400&X-Amz-Signature=0b2ec1abeeb3dd9e1583062f637117e104b7ab92e79977c15f19c54ffd7ed251&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Screen_Shot_2020-06-04_at_23.40.39.png")

## rm

Eliminar un archivo. Con la opción `-r` podemos también eliminar folders y sus contenidos de manera *recursiva.*

**Sintaxis básica:** `rm [opciones] [ruta del archivo]`

![7](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2b1c2324-3372-423c-9326-6e31306fd5c8/Screen_Shot_2020-06-04_at_23.43.18.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T164251Z&X-Amz-Expires=86400&X-Amz-Signature=750f9db80b427d01ca11785a8f1db4cbe1a688d6b7d75da453484172f3a00d34&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Screen_Shot_2020-06-04_at_23.43.18.png")

## man

Despliega información del manual de algún comando

**Sintaxis Básica:** `man [nombre del comando]`

El siguiente ejemplo `man man` despliega el manual del mismo comando `man` 

![8](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69b6960a-903f-4a59-89ad-6bd2143b9f22/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200710T164319Z&X-Amz-Expires=86400&X-Amz-Signature=7aed9c4c125724124cc7e160f9046b7d0e18d6d7ada461d3aca45ac0259b3884&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"Untitled.png")

Otros ejemplos:

- `man rm`
- `man ifconfig`


## Quiz

1. ¿Tu computadora puede ser un servidor?
2. ¿Cuál es la función de un servidor DNS?
