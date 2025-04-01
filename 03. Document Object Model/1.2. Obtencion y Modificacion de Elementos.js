//Text Content
    // Se hace uso de la propiedad textContent para cambiar el texto dentro de un elemento
    let title = document.getElementById('title')
    title.textContent = 'DOM Mod'

//Inner HTML
    // Se hace uso de la propiedad innerHTML para cambiar el texto dentro de un elemento
    let title2 = document.getElementById('title2')
    title2.innerHTML = 'DOM <span>Mod</span>'

    //Podemos Mostar el HTML de un elemento
    let title3 = document.getElementById('title3')
    console.log(title3.innerHTML)

    //Podemos Modificar el HTML de un elemento
    let title4 = document.getElementById('title4')
    title4.innerHTML = '<h1>Hola Mundo</h1>'

//Outer HTML

    //se hace uso para mostar el HTML de un elemento incluyendo el propio elemento donde esta contenido
    console.log(title3.outerHTML)

