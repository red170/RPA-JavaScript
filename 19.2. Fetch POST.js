let button = document.getElementById('button')

button.addEventListener('click', ()=>{
    const newPost ={
        title: 'new post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit dolor officiis rerum commodi, enim debitis, quia voluptatem ab odio harum cumque nesciunt? Exercitationem architecto ab nemo quo quis delectus ad',
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify(newPost),
        headers:{
            "Content-type": "application/json"
        }
    }).then(res=>res.json())
            .then(data => console.log(data))

})
