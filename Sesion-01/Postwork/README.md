[`Backend Fundamentals`](../../README.md) > [`Sesión 01: Consola`](../README.md) `Postwork`

# Postwork

## **Mejorando nuestra experiencia con la terminal**

### **ZSH**

ZSH es una shell que mejora a bash en aspectos como el autocompletado y la navegación entre directorios.

**Seguir el siguiente tutorial:**

+ **[Instalar y configurar ZSH y Oh My ZSH en Ubuntu](https://www.asanzdiego.com/2018/04/instalar-y-configurar-zsh-y-ohmyzsh-en-ubuntu.html)**

### **Terminator / iTerm**

Terminator para ubuntu y iTerm para MacOS son terminales que nos permiten trabajar de manera más eficiente con la terminal, con esto instalado podrás utilizar paneles y pestañas con diferentes consolas abiertas, así cómo personalizar a tu manera tu consola en apariencia y comportamiento.

+ **[Instalar Terminator Ubuntu](https://www.ingenieriazeros.com/2018/03/instalar-terminator-ubuntu.html)**

+ **[Configurar una terminal hermosa con iTerm 2 en MAC OS X](https://jonalvarezz.com/articles/configurar-una-terminal-hermosa-con-iterm2/)**

## **Configuración de vim**

1. Para personalizar la configuración de Vim, debemos editar el fichero vimrc situado en la ruta `/etc/vim/vimrc`

En este fichero podemos añadir nuestra propia configuración al final del mismo. Algunas de las configuraciones mas comunes son las siguientes.

| comando      | descripción                                                              |
|--------------|--------------------------------------------------------------------------|
| syn on       | Agrega colores dependiendo del tipo de fichero                           |
| set ts=n     | Establece una indentación de n caracteres                                |
| set nobackup | Evita que se guarden copias en búfer                                     |
| set number   | Provee a nuestro editor de una numeración a todas las líneas del fichero |

Puedes ver todas las opciones disponibles desde su página oficial.

Una vez añadidos los cambios al fichero vimrc, guardaremos y ya tendríamos lista nuestra configuración en vim.

+ **[Instalar y configurar VIM](https://intervia.com/doc/instalar-y-configurar-vim/)**
