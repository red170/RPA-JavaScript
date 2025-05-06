let title = document.getElementById('title')

//*** Clases */

    // Añadir una Clase

        title.classList.add('mainTitle')
        title.classList.add('mainTitle2')
        title.classList.add('mainTitle3')

    // Quitar una Clase

        title.classList.remove('mainTitle')

    //Sustituir una clase por otra

        title.classList.replace('title','mainTitle')

    // Comprobar si un elemento tiene una clase

        console.log(title.classList.contains('mainTitle'))

    // Alternar una clase (si la tiene la quita, si no la tiene la añade)

        title.classList.toggle('mainTitle')

    // Devuelve la Clase del Indice especificado

        console.log(title.classList.item(0))