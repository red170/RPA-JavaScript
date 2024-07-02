let list = document.getElementById('list')
let newElement = document.createElement('li')

newElement.textContent = 'soy el primer nuevo elemento'

//***Insertar Elementos*/

    //? Insertar el Elemento indicando antes de que elemento se ubicara segun el Index
    // list.insertBefore(newElement, list.children[3])

    //? Insertar Elemento al ado siendo el Hermano Anterior al elemento que se indica en el index  (idicando el Index para que se agrege a al grupo sino se ubicara antes del grupo pero fuera de este)
    // list.children[0].insertAdjacentElement('beforebegin', newElement)

    // list.children[0].before(newElement)

    //?Insertar Elememto al lado siendo el Hermano Siguiente al elemento que se indica en el index (indicando el Index para que se agrege a al grupo sino se ubicara despues del grupo pero fuera de este)
    // list.children[0].insertAdjacentElement('afterend',newElement)

    // list.children[0].after(newElement)

    //? Ubicar El Elemento como Primer HIjo
    // list.insertAdjacentElement('afterbegin',newElement)

    // list.prepend(newElement)

    //?Ubicar El Elemento como Ultimo Hijo
    // list.insertAdjacentElement('beforeend',newElement)

    // list.append(newElement)

//*** Insertar Elementos escribiendo HTML(se usa las mismas propiedades anteriores pero se cambia metodo)*/


    //? Insertar Elemento al ado siendo el Hermano Anterior al elemento que se indica en el index  (idicando el Index para que se agrege a al grupo sino se ubicara antes del grupo pero fuera de este)
    // list.children[0].insertAdjacentHTML('beforebegin', '<li>Primer Elemento Nuevo</li>')

    //?Insertar Elememto al lado siendo el Hermano Siguiente al elemento que se indica en el index (indicando el Index para que se agrege a al grupo sino se ubicara despues del grupo pero fuera de este)
    // list.children[0].insertAdjacentHTML('afterend', '<li>Segundo Elemento Nuevo</li>')

    //? Ubicar El Elemento como Primer HIjo
    // list.insertAdjacentHTML('afterbegin','<li>Tercer Elemento Nuevo</li>')

    //?Ubicar El Elemento como Ultimo Hijo
    // list.insertAdjacentHTML('beforeend','<li>Cuarto Elemento Nuevo</li>')

//***Reemplezar Elementos*/

    //? Haciendo uso de el metodo 'replaceChild()' introducimos dentro de los parametros  primero el elemento a reemplazar y luego el nuevo elemento indicando la variable donde esta almacenado el elemento padre y luego especificado la posicion con el index 
    // list.replaceChild(newElement,list.children[0])
    
    //?Reemplazar un elemento directamente desde el elemeto hijo y no desde su padre
    // list.children[0].replaceWith(newElement)

    //?Reemplazar un elemento tomando como referencia su ID
    // document.getElementById('reemplazo').replaceWith(newElement)

//*** Clonar Elementos */

    //?Clonar el nodo/elemento, si le pasamos 'true' clona todo el elemento padre con los hijos pero si le pasamos 'false' clona el padre sin los hijos haciendo uso de los metodos previos nos giaremos para colocar la parte clonada

    // list.after(list.cloneNode(true))

    // list.before(list.cloneNode(false))

//***Eliminar Elementos */

    //? Eliminar Nodo Completo (Padre e Hijos)
    // list.remove()

    //?Eliminar un Elemento Hijo
    // list.removeChild(list.children[0])

    // list.removeChild(document.getElementById('reemplazo'))