//? Es un Objeto con 2 Callbacks Internos

let users = [{id: 1,name: 'oscar'},{id: 2,name: 'ernesto'},{id: 3,name: 'cecilia'}]

let emails = [{id: 1,email: 'oscar@gmail.com'},{id: 2,email: 'ernesto@gmail.com'}]


let getUser = (id)=>{
    let user = users.find(user=>user.id==id)
    return promise = new Promise((resolve, reject)=>{
        if(!user){
            reject('NO EXISTE ESE USUARIO')
        }
        else{
            resolve(user)
        }
    })
}

let getMail = (user) =>{
    let email = emails.find(email=>email.id==user.id)

    return promise = new Promise((resolve, reject)=>{
        if(!email){
            reject(`${user.name} no tiene correo`)
        }
        else{
            resolve({
                id: user.id,
                name: user.name,
                email: email.email
            })
        }
    })
}

getUser(3)
        .then(user => getMail(user))
        .then(res => console.log(res))
        .catch(err => console.log(err))

