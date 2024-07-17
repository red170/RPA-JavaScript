let button = document.getElementById('button')

button.addEventListener('click', () =>{
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res =>{
        let list = document.getElementById('list') 
            let fragment = document.createDocumentFragment()
            for(let userinfo of res.data){ 
                let listitem = document.createElement('li') 
                listitem.textContent=`${userinfo.id} - ${userinfo.name}` 
                fragment.appendChild(listitem)
            }
            list.appendChild(fragment)
    }).catch(err => console.log(err))
})