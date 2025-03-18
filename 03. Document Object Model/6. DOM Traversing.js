//*! DOM Traversing: Recorrido del DOM */

    //***Recorrido entre Elementos Padre */

        //parentNode (Fragment y Document no tienen elemento Padre)
        let parent1 = document.getElementById('nav')
        console.log(nav.parentNode)

            //Obtener el Elemento sobre el Document (Sera el HTML)
            console.log(parent1.parentElement.parentElement)

//*** Recorrido entre Elementos HIjos*/
    //Devuelve todos los hijos del nodo
    console.log(parent1.childNodes)

    //Devulve todos los nodos elementos Hijos
    console.log(parent1.children)

    //Devuelve el primer Nodo Hijo
    console.log(parent1.firstChild)

    //Devulve el priemr nodo elemento hijo
    console.log(parent1.firstElementChild)

    //Devulve el ultimo nodo hijo
    console.log(parent1.lastChild)

    //Devulve el ultimo nodo elemento hijo
    console.log(parent1.lastElementChild)

    //Devulve true si tiene hijos y false sino los tiene
    console.log(parent1.hasChildNodes())

//*** Recorrido entre Elementos */

    //Devulve el siguiente nodo Hernano
    console.log(parent1.nextSibling)

    console.log(parent1.nextElementSibling)

    //Devulve el anterior nodo hermano
    console.log(parent1.previousSibling)

    console.log(parent1.previousElementSibling)

