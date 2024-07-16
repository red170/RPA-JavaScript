/*
Fetch API

Proporciona una interfaz javascript para acceder y manipular partes del canal http, ya sean peticiones o respuestas, con su metodo global fetch() proporciona una forma facil y logica de obtener recursos de forma asincrona por la red
*/

let button = document.getElementById('button')
button.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))    
        .then(res=>res.json())
        .then(res => {
            let list = document.getElementById('list') 
            let fragment = document.createDocumentFragment()
            for(let userinfo of res){ 
                let listitem = document.createElement('li') 
                listitem.textContent=`${userinfo.id} - ${userinfo.name}` 
                fragment.appendChild(listitem)
            }
            list.appendChild(fragment)
        })
})

//Verificar si Fetch Funcioa
if (window.fetch != undefined){
    console.log('Fetch Work')
}
else{
    console.log('not')
}