//** Obejto Window
// El objeto window es el objeto global en el navegador, representando la ventana del navegador y proporcionando acceso a las funciones y propiedades del navegador.

// Open
// esta funcion abre una nueva ventana en el navegador
// window.open('https://www.youtube.com/watch?v=xOinGb2MZSk')

//Close
// esta funcion cierra la ventana actual del navegador
// window.close()

//Alert
// esta funcion muestra una alerta en el navegador
// window.alert('Hola Mundo!')

//Print
// esta funcion imprime el contenido de la ventana actual del navegador
// window.print()

//Prompt	
// esta funcion muestra un cuadro de dialogo que permite al usuario ingresar un valor
let nombre = window.prompt('Cual es tu nombre?')
console.log(nombre)

//Confirm
// esta funcion muestra un cuadro de dialogo que permite al usuario confirmar o cancelar una accion
let respuesta = window.confirm('Estas seguro de que quieres salir?')
console.log(respuesta)

//Scroll
// esta funcion desplaza la ventana actual del navegador a una posicion especifica
window.scroll(0, 0) // desplaza la ventana a la posicion (0, 0)
window.scrollTo(0, 0) // desplaza la ventana a la posicion (0, 0)