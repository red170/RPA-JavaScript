//***GET - Obtener datos desde una API */

let button = document.getElementById('button') //Declaracion de Boton que ejecutara la accion de extraer la info de la API y mostrarla en un UL dentro del HTML

button.addEventListener('click',()=>{ //Proceso a Ejecutar al hacer click
    let xhr //Declaracion del Objeto 
    if(window.XMLHttpRequest){ //Comprobacion de la Compatibilidad con el Navegador
      xhr = new XMLHttpRequest
    }
    else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users') //Especificacion del GET y de donde se extraera la Info

    xhr.addEventListener('load',(data)=>{ // Se añade una escucha para que al cargar el evento se haga la extraccion
        let data1 = JSON.parse(data.target.response) //Ubicamos donde se encuentra la info a manejar convertimos a JSON y la almacenamos en una variable
        let list = document.getElementById('list') //Declaramos la lista donde se va mostar la info extraida

        for(let userinfo of data1){ //Recorremos la Info
            let listitem = document.createElement('li') //Por cada iteracion se creara un ListItem
            listitem.textContent=`${userinfo.id} - ${userinfo.name}` //Especificamos el valor/contenido de cada ListItem
            list.appendChild(listitem) //Se agarega cada ListItem con el contendio especificado
        }
    })

    xhr.send() //Enviamos las Indicaciones antes especificadas
})