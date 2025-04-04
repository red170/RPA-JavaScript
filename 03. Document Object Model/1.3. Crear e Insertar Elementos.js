let titulo = document.getElementById('title')
let dayslist = document.getElementById('dayslist')
let selectdays = document.getElementById('daysselect')

let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo','tangamandapio']

//***Agregar un Elemento Manualmente */
    
    //AppendChild (Agregar al final)

        // Crear un Elemento
        let itemlist = document.createElement('LI')

        // Escribir Texto en un Elemento
        itemlist.textContent = "LUNES"
        console.log(itemlist)

        //Agregar el Elemto a uno ya existente
        dayslist.appendChild(itemlist)

    //ReplaceChild (Reemplazar un  Elemento)

        // Crear un Elemento
        let itemlist2 = document.createElement('LI')

        // Escribir Texto en un Elemento
        itemlist2.textContent = "Martes"

        //Sutituir un Elemento por otro
        dayslist.replaceChild(itemlist2, itemlist)
    
//***DocumentFragment */

// El DocumentFragment es un objeto que permite crear nodos sin necesidad de agregarlo al DOM y luego agregarlos de una sola vez al DOM, lo que mejora el rendimiento, en resumen nos ayuda a crear varios elementos y agregar varios dentro de un solo elemento padre

    // Crear un Fragmento
        let fragment1 = document.createDocumentFragment()
    
    //Bucle que Crea 'n' cantidad de Elementos
        for (let i = 0; i < 20 ; i++) {
            const item = document.createElement('LI')
            item.innerHTML = 'Nuevo Elemento'
            fragment1.appendChild(item)
        }

    // Agregar el Fragmento al DOM
        dayslist.appendChild(fragment1)
