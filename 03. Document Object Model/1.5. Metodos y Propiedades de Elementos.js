const contenedor = document.getElementById("container") // Selecciona el contenedor donde se van a agregar los elementos

const parrafo = document.createElement("p" )// Crea un nuevo elemento <p> (parrafo)
parrafo.innerHTML = "Hola, soy un parrafo"// Agrega texto al parrafo

const h2Nuevo = document.createElement("h2" )// Crea un nuevo elemento <h2> (titulo)
h2Nuevo.innerHTML = "Hola, soy un h2" // Agrega texto al h2

const h2Antiguo = document.getElementById("titulo") // Selecciona el h2 que se va a reemplazar

const subtitulo = document.getElementById("subtitulo") // Selecciona el Subtitulo



//** Metodos y Propiedades de Elementos Hijos (Childs)
// Los elementos HTML tienen propiedades y métodos que se pueden usar para manipular el DOM. Estos métodos y propiedades son parte de la interfaz de programación de aplicaciones (API) del DOM. 

    //ReplaceChild
    // El método replaceChild() reemplaza un hijo existente de un elemento por un nuevo nodo.

        contenedor.replaceChild(h2Nuevo,h2Antiguo) // Reemplaza el primer hijo del contenedor por el nuevo h2ss

    //RemoveChild
    // El método removeChild() elimina un hijo de un elemento.

        contenedor.removeChild(h2Nuevo) // Elimina el nuevo h2 del contenedor

    //HasChildNodes
    // El método hasChildNodes() devuelve true si el nodo tiene hijos, de lo contrario devuelve false.

        console.log(contenedor.hasChildNodes()) // Devuelve true porque el contenedor tiene hijos

//** Metodos y Propiedades de Elementos Padres (Parents)
// Los elementos HTML también tienen propiedades y métodos que se pueden usar para manipular el DOM. Estos métodos y propiedades son parte de la interfaz de programación de aplicaciones (API) del DOM.

    //ParentNode
    // La propiedad parentNode devuelve el nodo padre del nodo especificado.

        console.log(subtitulo.parentNode) // Devuelve el nodo padre del subtitulo (contenedor)
        console.log(contenedor.parentNode) // Devuelve el nodo padre del contenedor (documento)

    //ParentElement
    // La propiedad parentElement devuelve el elemento padre del nodo especificado.

        console.log(subtitulo.parentElement) // Devuelve el elemento padre del subtitulo (contenedor)
        console.log(contenedor.parentElement) // Devuelve el elemento padre del contenedor (documento)

//** Metodos y Propiedades de Elementos Hermanos (Siblings)
// Los elementos HTML también tienen propiedades y métodos que se pueden usar para manipular el DOM. Estos métodos y propiedades son parte de la interfaz de programación de aplicaciones (API) del DOM.

    //NextSibling
    // La propiedad nextSibling devuelve el siguiente nodo hermano del nodo especificado.

        console.log(subtitulo.nextSibling) // Devuelve el siguiente nodo hermano del subtitulo (null porque no hay siguiente nodo hermano)

    //PreviousSibling
    // La propiedad previousSibling devuelve el nodo hermano anterior del nodo especificado.

        console.log(subtitulo.previousSibling) // Devuelve el nodo hermano anterior del subtitulo (null porque no hay nodo hermano anterior)

    //NextElementSibling
    // La propiedad nextElementSibling devuelve el siguiente nodo hermano del nodo especificado.

        console.log(subtitulo.nextElementSibling) // Devuelve el siguiente nodo hermano del subtitulo (null porque no hay siguiente nodo hermano)

    //PreviousElementSibling
    // La propiedad previousElementSibling devuelve el nodo hermano anterior del nodo especificado.

        console.log(subtitulo.previousElementSibling) // Devuelve el nodo hermano anterior del subtitulo (null porque no hay nodo hermano anterior)

//** Nodos - Extras

    //closest()
    // El método closest() devuelve el elemento más cercano que coincide con el selector especificado.

        console.log(subtitulo.closest("#container")) // Devuelve el contenedor porque es el elemento más cercano que coincide con el selector #container
