//** Text Content

    // Se hace uso de la propiedad textContent para cambiar el texto dentro de un elemento, sin incluir etiquetas HTML, muestar solamente el texto contenido en el elemento
    let title = document.getElementById('title')
    title.textContent = 'DOM Modificado 1'

//**Inner Content */

    // Se hace uso de la propiedad innerText para cambiar el texto dentro de un elemento, incluyendo etiquetas HTML, pero no se muestra el HTML que no es visible en el navegador
    let title1 = document.getElementById('title1')
    let result = title1.innerText
    console.log(result)

    title1.innerText = 'DOM Modificado 2'

//** Inner HTML

    // Se hace uso de la propiedad innerHTML para cambiar el texto dentro de un elemento, muestra solamente el texto que esta espcificado como visible en el HTML, mostrando las etiquetas del elemento que contiene el texto

    let title2 = document.getElementById('title2')
    title2.innerHTML = 'DOM <span>Mod</span>'

    //Podemos Mostar el HTML de un elemento
    let title3 = document.getElementById('title3')
    console.log(title3.innerHTML)

    //Podemos Modificar el HTML de un elemento
    let title4 = document.getElementById('title4')
    title4.innerHTML = '<h1>Hola Mundo</h1>'

//** Outer HTML

    //se hace uso para mostar el HTML de un elemento incluyendo el propio elemento donde esta contenido
    console.log(title3.outerHTML)

