const contenedor = document.getElementById('container')

//**FirstChild

    // sirve para obtener el primer hijo de un nodo
        const primerHijo = contenedor.firstChild //Asignar el primer hijo a una variable
        console.log(primerHijo) //Mostrar el primer hijo en la consola

//**LastChild

    // sirve para obtener el último hijo de un nodo
        const ultimoHijo = contenedor.lastChild //Asignar el último hijo a una variable
        console.log(ultimoHijo) ///Mostrar el último hijo en la consola
//**FirstElementChild

    // sirve para obtener el primer hijo de un nodo mostrandolo como un elemento
        const primerHijoElemento = contenedor.firstElementChild //Asignar el primer hijo elemento a una variable
        console.log(primerHijoElemento) //Mostrar el primer hijo elemento en la consola

//**LastElementChild

    // sirve para obtener el último hijo de un nodo mostrandolo como un elemento
        const ultimoHijoElemento = contenedor.lastElementChild //Asignar el último hijo elemento a una variable
        console.log(ultimoHijoElemento) //Mostrar el último hijo elemento en la consola

//**ChildNodes 

    // sirve para obtener todos los nodos hijos de un nodo ( es recorrible con un forEach ) ( no funciona como un arreglo )
        const nodosHijos = contenedor.childNodes //Asignar todos los nodos hijos a una variable
        console.log(nodosHijos) //Mostrar todos los nodos hijos en la consola

//**Children

    // sirve para obtener todos los nodos hijos de un nodo que sean elementos (es recorrible con bucles ForIn o ForOf)
        const nodosHijosElementos = contenedor.children //Asignar todos los nodos hijos elementos a una variable
        console.log(nodosHijosElementos) //Mostrar todos los nodos hijos elementos en la consola
        console.log(nodosHijosElementos[0]) //Mostrar el primer nodo hijo elemento en la consola
        console.log(nodosHijosElementos[1]) //Mostrar el segundo nodo hijo elemento en la consola