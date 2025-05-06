let titulo = document.getElementById('title')
let dayslist = document.getElementById('dayslist')
let selectdays = document.getElementById('daysselect')

let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo','tangamandapio']

//***Agregar un Elemento Manualmente */
    
    //AppendChild (Agregar al final)

        // Crear un Elemento
        let itemlist = document.createElement('LI') //Creamos un ListItem para la lista
        let itemlist3 = document.createElement('option') //Creamos un Option para el select

        // Escribir Texto en un Elemento
        itemlist.textContent = "Lunes" //Escribimos el texto en el ListItem
        console.log(itemlist)   //Mostramos el ListItem en la consola
        itemlist3.textContent = "Lunes" //Escribimos el texto en el Option
        console.log(itemlist3)  //Mostramos el Option en la consola

        //Agregar el Elemto a uno ya existente
        dayslist.appendChild(itemlist) //Agregamos el ListItem a la lista
        selectdays.appendChild(itemlist3) //Agregamos el Option al select
        

    //ReplaceChild (Reemplazar un  Elemento)

        // Crear un Elemento
        let itemlist2 = document.createElement('LI') //Creamos un ListItem para la lista
        let itemlist4 = document.createElement('option') //Creamos un Option para el select

        // Escribir Texto en un Elemento
        itemlist2.textContent = "Martes" //Escribimos el texto en el ListItem
        itemlist4.textContent = "Martes" //Escribimos el texto en el Option

        //Sutituir un Elemento por otro
        dayslist.replaceChild(itemlist2, itemlist) //Sustituimos el ListItem por el nuevo el primero es el elemento a sustituir y el segundo es el nuevo elemento
        selectdays.replaceChild(itemlist4, itemlist3) //Sustituimos el Option por el nuevo el primero es el elemento a sustituir y el segundo es el nuevo elemento
    
//***DocumentFragment */

// El DocumentFragment es un objeto que permite crear nodos sin necesidad de agregarlo al DOM y luego agregarlos de una sola vez al DOM, lo que mejora el rendimiento, en resumen nos ayuda a crear varios elementos y agregar varios dentro de un solo elemento padre

    // Crear un Fragmento
        let fragment1 = document.createDocumentFragment() //Creamos un Fragmento para agregar varios elementos a la vez
    
    //Bucle que Crea 'n' cantidad de Elementos
        for (let i = 1; i <= 10 ; i++) { //Creamos un bucle que crea 10 elementos
            const item = document.createElement('LI') //Creamos un ListItem para la lista
            item.innerHTML = `Nuevo Elemento ${i}` //Escribimos el texto en el ListItem
            fragment1.appendChild(item) //Agregamos el ListItem al Fragmento
        }

    // Agregar el Fragmento al DOM
        dayslist.appendChild(fragment1) //Agregamos el Fragmento a la lista, al agregar el fragmento se agregan todos los elementos que contiene de una sola vez
