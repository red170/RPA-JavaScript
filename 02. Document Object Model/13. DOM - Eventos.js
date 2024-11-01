// Un evento es cualquier cosa que sucede en el documento podrian ser cualquera de las siguientes circunstancias
//- Lectura de Contenido
//- Carga de Contenido
// - Movimiento de Raton
// - Pulsacion de Tecla, etc


//***Eventos de Raton */

// Click

let boton = document.getElementById('button')

boton.addEventListener('click', ()=>{
    alert('click')
})

// Doble Click

let boton2 = document.getElementById('button2')

boton2.addEventListener('dblclick', ()=>{
    alert('doble click')
})

// Mouse Enter / Mouse Leave

    //Forma Incorrecta
        let div = document.getElementById('div')

        div.addEventListener('mouseenter', ()=>{
            div.style.backgroundColor='red'
        })

        div.addEventListener('mouseleave', ()=>{
            div.style.backgroundColor='green'
        })

    //Forma Correcta
        let div2 = document.getElementById('div2')

        div2.addEventListener('mouseenter', ()=>{
            div2.classList.replace('red','blue')
        })

        div2.addEventListener('mouseleave', ()=>{
            div2.classList.replace('blue','red')
        })

//Mouse Down (Mantener Pulsado el Raton)

let div3 = document.getElementById('div3')

div3.addEventListener('mousedown', () =>{
    console.log('click hecho')
})

//Mouse Up (Soltar el Click del Raton)

div3.addEventListener('mouseup', () =>{
    console.log('click suelto')
})

//Mouse Move

let div4 = document.getElementById('div4')

div4.addEventListener('mousemove', ()=>{
    console.log('estas moviendo el raton')
})

//** Eventos de Teclado*/

//Key Down

let input = document.getElementById('input')

input.addEventListener('keydown', ()=>{
    console.log('tecla presionada')
})

//Key Up

input.addEventListener('keyup', ()=>{
    console.log('tecla soltada')
})

