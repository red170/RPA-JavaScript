let title = document.getElementById('title')
let nombre = document.getElementById('name')

//*** Lectura y Modificacion de Atributos */

        // Obtener el valor de un atributo der un elemento del HTML
            /// Despues de haber almacenado el nodo en una variable se porcede a realizar la comprobacion colocando el Atributo/Propiedad del elemento y nos devolvera el valor
            console.log(nombre.getAttribute('id'))

        // Cambiar el Valor de un Atributo de un elemento HTML
            /// Dentro de los parametros colocamos el atributo a modificar seguido del nuevo valor a asignar
            nombre.setAttribute('type','text')

//*** Clases */

// Añadir una Clase

    title.classList.add('mainTitle')

// Quitar una Clase

    title.classList.remove('mainTitle')

// Devuelve boleano dependiendo si contiene lo que se consulta

    if (title.classList.contains('title')) console.log('si esta')
    else console.log('no esta')

//Sustituir una clase por otra

    title.classList.replace('title','mainTitle')

//***Atributos Directos */
// Se hace uso de las propiedades de cada nodo para poder acceder directamente a los valores de ellas ya sea para visualizarlas o para operarlas
    console.log(title.id)
    console.log(title.textContent)
    console.log(title.innerHTML.length)

    console.log(nombre.value)
    console.log(nombre.value.length)
