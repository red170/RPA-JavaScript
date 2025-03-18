let button = document.getElementById('button')

button.addEventListener('click', () =>{
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        data: {
            title: 'new post',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit dolor officiis rerum commodi, enim debitis, quia voluptatem ab odio harum cumque nesciunt? Exercitationem architecto ab nemo quo quis delectus ad',
            userId: 1
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})