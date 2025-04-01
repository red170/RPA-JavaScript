const contenedor = document.getElementById('container')

//FirstChild
// sirve para obtener el primer hijo de un nodo
    const primerHijo = contenedor.firstChild
    console.log(primerHijo)

//LastChild
// sirve para obtener el último hijo de un nodo
    const ultimoHijo = contenedor.lastChild
    console.log(ultimoHijo)

//FirstElementChild
// sirve para obtener el primer hijo de un nodo que sea un elemento
    const primerHijoElemento = contenedor.firstElementChild
    console.log(primerHijoElemento)

//LastElementChild
// sirve para obtener el último hijo de un nodo que sea un elemento
    const ultimoHijoElemento = contenedor.lastElementChild
    console.log(ultimoHijoElemento)

//ChildNodes 
// sirve para obtener todos los nodos hijos de un nodo ( es recorrible con un forEach)
    const nodosHijos = contenedor.childNodes
    console.log(nodosHijos)

//Children
// sirve para obtener todos los nodos hijos de un nodo que sean elementos (es recorrible con bucles ForIn o ForOf)
    const nodosHijosElementos = contenedor.children
    console.log(nodosHijosElementos)