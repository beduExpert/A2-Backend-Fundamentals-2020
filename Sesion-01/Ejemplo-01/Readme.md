# Prework - Diferentes tipos de servidores

*Conocer la terminal y sus principales ventajas con respecto a las interfaces gráficas. Ejecutar los primeros comandos.*

## Instrucciones

1. Leer el contenido que se muestra a continuación, se que puede parecer mucha información, pero tienes que comprender las bases y por que suceden las cosas. 🤓
2. Resolver las preguntas que se encuentran al final del prework.


## **¿Qué es un servidor?**

El término servidor tiene **dos significados** en el ámbito informático. El primero hace referencia al ordenador que pone recursos a disposición a través de una red, y el segundo se refiere al programa  que funciona en dicho ordenador. En consecuencia aparecen dos **definiciones de servidor:**

### **Definición Servidor (hardware)**

Un servidor basado en hardware es una **máquina física** integrada en una red informática en la que, además del sistema operativo, funcionan uno o varios servidores basados en software. Una denominación alternativa para un servidor basado en hardware es **host** (término inglés para "anfitrión"). En principio, todo ordenador puede usarse como "host" con el correspondiente software para servidores.

### **Definición Servidor (software):**

Un servidor basado en software es un **programa** que ofrece un servicio especial que otros programas denominados **clientes** (clients) pueden usar a nivel **local** o a través de una **red.** El tipo de servicio depende del tipo de software del servidor. La base de la comunicación es el modelo cliente-servidor y, en lo que concierne al intercambio de datos, entran en acción los protocolos de transmisión específicos del servicio.

## **¿Cómo funciona un servidor?**

La puesta a disposición de los servicios del servidor a través de una red informática se basa en el **modelo cliente-servidor**, concepto que hace posible distribuir las tareas entre los diferentes ordenadores y hacerlas accesibles para más de un usuario final de manera independiente. Cada servicio disponible a través de una red será ofrecido por un servidor (software) que está permanentemente en espera. Este es el único modo de asegurar que los clientes como el navegador web o los clientes de correo electrónico siempre tengan la posibilidad de acceder al servidor activamente y de usar el servicio en función de sus necesidades.

La comunicación entre un servidor y sus clientes se basa en **HTTP**, es decir, en el protocolo de transferencia de hipertexto o en su variante codificada HTTPS.

Además, ten en cuenta que toda computadora, smartphone o tablet tiene una **dirección IP única** e irrepetible que lo identifica de otro dispositivo en la red, así es como el servidor web envía la información exacta que el internauta está esperando.

Ahora bien, para que el web server pueda cumplir con su función es necesario que reciba la petición por parte de un navegador, en otras palabras, se envía un pedido desde una dirección IP hacia la dirección IP del servidor que aloja los archivos del sitio en cuestión.

A continuación, el servidor web busca en sus archivos la información que se le está solicitando, procede a interpretar las líneas de código y a enviar el resultado al navegador cuya dirección IP fue la solicitante.

Este resultado se le muestra a los internautas y es lo que siempre sucede cuando se navega en sitios de Internet. Cuando este proceso se completa podemos decir que el web server ha cumplido con su función.

![¿Qué es un servido](https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Screenshots/client-server-modell-us.jpg)
>Funte: 1&1 IONOS

## **¿Para qué sirve un servidor en Internet?**

El rol principal de un servidor web es **almacenar** y **transmitir** el contenido solicitado de un sitio web al navegador del usuario.

Este proceso, para los internautas no dura más que un segundo, sin embargo, a nivel del web server es una secuencia más complicada de lo que parece.

Para cumplir con sus funciones el servidor deberá tener la capacidad de estar siempre **encendido** para evitar interrumpir el servicio que le ofrece a sus clientes. Si dicho servidor falla o se apaga, los internautas tendrán problemas al ingresar al sitio web.

## **¿Qué tipos de servidores hay?**

Los servidores Web, también conocidos como servidores HTTP, surgen en **1990** ante la necesidad de estandarizar la comunicación entre distintas plataformas y lenguajes de programación, brindando una alternativa para el intercambio de información más rápida y sencilla.

Éstos proporcionan las herramientas necesarias para almacenar toda la **información** contenida en una página de internet, y de igual modo enviar la información al cliente que la solicite, es decir, hacen posible lo que se conoce como hosting.

Un servidor Web tiene la capacidad de atender **simultáneamente** las solicitudes de varios ordenadores; sin embargo, la eficiencia de éste puede depender de factores como la velocidad de procesamiento, el hardware, el número de solicitudes, y los contenidos web dinámicos, ya que estos últimos requieren una mayor cantidad de recursos que los contenidos estáticos.

Dentro de las opciones de servidores web que podrás encontrar, los más comunes son los servidores **compartidos**, **los dedicados**, y los **servidores virtuales**.

+ **Los servidores compartidos** ofrecen un **espacio** para que puedas alojar tu **información**, y debes compartir recursos como el mismo **CPU**, la memoria **RAM**, el sistema operativo, la **dirección IP**, e incluso la misma conexión a internet.

+ **Un servidor dedicado** es aquel que **contrata un solo cliente**, el cual no debe compartir recursos con nadie más, y la capacidad de almacenamiento que te ofrece es superior a cualquier otro tipo de alojamiento web.

+ Finalmente, el **servidor virtual** es el que **combina características** de los dos anteriores; el servidor físico realiza particiones virtuales que trabajan de forma independiente, y lo único que se comparte es el costo.

### **Servidores FTP**

![FTP](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.redeszone.net%2Fapp%2Fuploads-redeszone.net%2F2019%2F10%2Fprotocolo-ftp.jpg&f=1&nofb=1)

Un servidor de **Protocolo para Transferencia de Archivos**, o File Transfer Protocol por sus siglas en inglés, es un programa que se ejecuta cuando se está conectado a Internet o a algún otro tipo de red (LAN, MAN, etc.), el cual permite el desplazamiento o transferencia de datos entre otros servidores u ordenadores.

Este tipo de servidores se crearon tomando como base una arquitectura tipo **cliente-servidor**, es decir, la computadora del cliente debe conectarse primero con el servidor para poder descargar o almacenar archivos.

A pesar de que es uno de los protocolos más antiguos, ya que su creación data de **1971**, sigue siendo uno de los más utilizados debido a que ha ido evolucionando con el paso del tiempo y es considerado rápido, confiable y seguro.

Los Servidores FTP son usados principalmente para el respaldo de datos y archivos, es decir, como un servidor de backup, sin embargo cuenta con otros usos.

### **Servidores de Correo**

![FTP](https://imgfz.com/i/UjotiRr.png)

Los servidores de Correo son aplicaciones informáticas que permiten el intercambio de mensajes a través de sistemas de comunicación electrónicos, los cuales se comenzaron a desarrollar desde 1971.

Éstos trabajan como el servicio de correos, la gran diferencia es que en lugar de tardar días o semanas en enviar grandes paquetes y documentos en papel, envían datos digitales e información electrónica en cuestión de segundos, permitiendo una comunicación casi inmediata.

Para que se pueda llevar a cabo el correcto funcionamiento de estos servicios es necesario hacer uso de diferentes tipos de protocolos de red, que son básicamente las normativas o reglas que permiten que circule información en una red informática. Los más comunes son los protocolos HTTP, SMTP, POP, POP3, e IMAP.

### **Servidores IRC**

Tuvo sus inicios en 1988 y fue un gran éxito debido a que logró generar una comunicación escrita inmediata y en tiempo real entre dos o más personas a través de internet.

El Internet Relay Chat por sus siglas en inglés, es actualmente uno de los servicios de chat más utilizados, el cual consiste básicamente en que varios servidores están conectados a una red, de modo que cualquier persona alrededor del mundo puede unirse a uno de éstos y chatear con cualquier otro usuario conectado a Internet. Al igual que un servidor FTP, éste también está basado en una arquitectura tipo cliente-servidor.

El IRC permite participar en salones de chat públicos y a la vez mantener conversaciones privadas; limitar el máximo de participantes e incluso expulsar a aquellos integrantes no deseados. Además, permite el intercambio de otro tipo de archivos, tales como imágenes o sonido, de modo que genera una mayor interacción en los salones de chat.

### **Servidores de Juegos**

Los también conocidos Game Servers, como lo dice su nombre, se especializan en alojar juegos de video, es decir, de proveer el espacio para que sus creadores o desarrolladores puedan ofrecer sus juegos en internet. Además, este servidor tiene como función recopilar la información de cada jugador conectado y enviarla al resto de participantes de forma inmediata de modo que puedan generarse partidas en tiempo real.

Existen dos tipos de servidores de videojuegos, el de escucha y el dedicado. Los servidores de escucha son utilizados en su mayoría por grupos reducidos de jugadores que desean tener sesiones de videojuegos compartiendo una red local. Funcionan ya que los requisitos de procesamiento y ancho de banda se ejecutan desde una misma máquina.

Los servidores dedicados trabajan de forma independiente, operados por el cliente desarrollador del videojuego. Éstos te permiten controlar y actualizar el contenido de forma constante, y su mayor ventaja es que, al estar ubicados en centros de datos, la potencia y el ancho de banda que ofrecen permiten que exista un gran número de jugadores simultáneos.

### **Servidores Proxy**

![FTP](https://infimg.com/bimg/2019/08/diagrama_servidor_proxy.jpg)

Un servidor Proxy funciona como intermediario entre otros dos sistemas informáticos, contribuyendo a la seguridad de la red. Al no requerir comunicación directa entre el remitente y el destinatario, hace posible el intercambio de datos e información entre sistemas que cuentan con incompatibilidad de direcciones IP.
Además, forma parte fundamental del Firewall, que es el software que protege a los sistemas de ataques de redes públicas como el robo de datos confidenciales, la pérdida de información valiosa, e incluso la denegación a servicios de nuestra red.

Entre otra de las funciones del proxy se encuentra la generación de lo que se conoce como Caché, el cual sirve para responder rápidamente las peticiones de una red local, y esto se logra mediante una copia temporal de los datos obtenidos desde Internet. Ayuda al ahorro de tiempo y ancho de banda.

### **VPN**

![FTP](https://cdn-images-1.medium.com/max/1024/1*5XK9FfClhxbTE5k9cZQjkQ.png)
>Fuente: G2 Growd

Una Virtual Private Network es una tecnología utilizada para realizar conexiones seguras a una red privada de una o varias computadoras sin que se encuentren físicamente en el mismo lugar. Ésta ayuda a proteger nuestra información, ya que al conectarnos a una VPN se genera un tipo de “túnel virtual” por el que pasa toda nuestra información, y los datos enviados o solicitados se encuentran cifrados hasta que salen de la VPN.

Hacer uso de esta tecnología tiene ciertas ventajas. La primera y más importante de todas es, como ya se había mencionado anteriormente, la protección de tus datos. Sin embargo, otro de los grandes beneficios es el acceso a cualquier lugar de la red sin restricciones geográficas.



## Quiz

1. ¿Tu computadora puede ser un servidor?
2. ¿Cuál es la función de un servidor DNS?
