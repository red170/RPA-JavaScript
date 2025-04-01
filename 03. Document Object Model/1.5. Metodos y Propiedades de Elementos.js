const contenedor = document.getElementById("container")

const parrafo = document.createElement("p")
parrafo.innerHTML = "Hola, soy un parrafo"

const h2Nuevo = document.createElement("h2")
h2Nuevo.innerHTML = "Hola, soy un h2"

const h2Antiguo = document.getElementById("titulo")



//Metodos y Propiedades de Elementos
// Los elementos HTML tienen propiedades y métodos que se pueden usar para manipular el DOM. Estos métodos y propiedades son parte de la interfaz de programación de aplicaciones (API) del DOM. 

    //ReplaceChild
    // El método replaceChild() reemplaza un hijo existente de un elemento por un nuevo nodo.

        contenedor.replaceChild(h2Nuevo,h2Antiguo) // Reemplaza el primer hijo del contenedor por el nuevo h2ss

    //RemoveChild
    // El método removeChild() elimina un hijo de un elemento.

        contenedor.removeChild(h2Nuevo) // Elimina el nuevo h2 del contenedor

    