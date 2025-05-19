let img = document.getElementById("img");
let text = document.getElementById("text");
let input = document.getElementById("input");

//Error
    // Se lanza cuando un objeto en este caso la imagen no se puede cargar
    img.addEventListener("error", () => {
    console.log("Error al cargar la imagen");
    });

//Load
    // Se lanza cuando un objeto en este caso la imagen se ha cargado
    img.addEventListener("load", () => {
    console.log("Imagen cargada");
    });

    //Verificar si una web se cargo correctamente
    addEventListener('load', () => {
    console.log("Cuerpo cargado");
    }) 

//Beforeunload
    // Se lanza cuando se va a cerrar la pestaña
    addEventListener('beforeunload', () => {
        console.log('estas a punto de cerrar la pestaña');
    })

//Unload
    // Se lanza cuando se cierra la pestaña
    addEventListener('unload', () => {
        console.log('se ha cerrado la pestaña');
    })

//Resize
    // Se lanza cuando se cambia el tamaño de la ventana
    addEventListener('resize', () => {
        console.log('se ha cambiado el tamaño de la ventana');
    })

//Scroll
    // Se lanza cuando se hace scroll en la ventana
    addEventListener('scroll', () => {
        console.log('se ha hecho scroll');
    })

//Select
    // Se lanza cuando se selecciona un texto
     input.addEventListener('select', () => {
        console.log('se ha seleccionado un texto');
    })
        //Monstrar desde donde hasta donde se selecciono el texto
        input.addEventListener('select', () => {
            console.log(`Desde ${input.selectionStart} hasta ${input.selectionEnd}`);
        })