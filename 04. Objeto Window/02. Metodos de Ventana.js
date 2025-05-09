//Screen
// Es un obejrto que contiene información sobre la pantalla del usuario.

    //AvailHeight: Devuelve la altura de la pantalla del usuario, excluyendo la barra de tareas de Windows.
    console.log(window.screen.availHeight) 

    //AvailWidth: Devuelve el ancho de la pantalla del usuario, excluyendo la barra de tareas de Windows.
    console.log(window.screen.availWidth)

    //ColorDepth: Devuelve la profundidad de color de la pantalla del usuario.
    console.log(window.screen.colorDepth)

    //Height: Devuelve la altura de la pantalla del usuario.
    console.log(window.screen.height)

    //Width: Devuelve el ancho de la pantalla del usuario.
    console.log(window.screen.width)

    //PixelDepth: Devuelve la profundidad de color de la pantalla del usuario.
    console.log(window.screen.pixelDepth)

//ScreenLeft: Devuelve la distancia entre el borde izquierdo de la pantalla y el borde izquierdo de la ventana del navegador.
    let left = window.screenLeft
    document.write(`Left: ${left}<br>`)

//ScreenTop: Devuelve la distancia entre el borde superior de la pantalla y el borde superior de la ventana del navegador.
    let tops = window.screenTop
    document.write(`Top: ${tops}<br>`)

//ScrollX: Devuelve la distancia entre el borde izquierdo de la ventana del navegador y el borde izquierdo de la pantalla.
    let scrollX = window.scrollX
    document.write(`ScrollX: ${scrollX}<br>`)

//ScrollY: Devuelve la distancia entre el borde superior de la ventana del navegador y el borde superior de la pantalla.
    let scrollY = window.scrollY
    document.write(`ScrollY: ${scrollY}<br>`)

