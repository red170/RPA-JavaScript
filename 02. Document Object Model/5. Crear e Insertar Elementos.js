let titulo = document.getElementById('title')
let dayslist = document.getElementById('dayslist')
let selectdays = document.getElementById('daysselect')

let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo','tangamandapio']
//***Agregar un Elemento Manualmente */
    // Crear un Elemento
    let itemlist = document.createElement('LI')

    // Escribir Texto en un Elemento
    itemlist.textContent = "LUNES"
    console.log(itemlist)

    //Agregar el Elemto a uno ya existente
    dayslist.appendChild(itemlist)

//*** Escribir HTML en un Elemento
titulo.textContent = 'Titulo DOM'
titulo.innerHTML = 'Titulo <span>DOM</span>'

//*** Agregar elementos desde un Arreglo

    //Forma Incorrecta
    for (let items of dias){
    dayslist.innerHTML +=`<li>${items}</li>`
    }

    //Forma Correcta
        //Select
        let fargment2 = document.createDocumentFragment()

        for(let sitem of dias){
            let itemlist3 = document.createElement('option')
            itemlist3.setAttribute('value', sitem.toLowerCase())
            itemlist3.textContent = sitem
            fargment2.appendChild(itemlist3)
        }

        selectdays.appendChild(fargment2)

        //List
        let fragment = document.createDocumentFragment()

        for (let items of dias){
            let itemlist2 = document.createElement('LI')
            itemlist2.textContent = items
            fragment.appendChild(itemlist2)
        }

        dayslist.appendChild(fragment)