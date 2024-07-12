//**Callback: es una Funcion que se ejecuta dentro de una funcion y no son Asincronos osea que se ejecutan en un orden especifico */

// const getUser =(id, cb) =>{
//     let user = {
//         name: 'oscar',
//         id
//     }
//     if(id == 2) cb('usuario no existe')
//     else cb(null,user)
// }

// getUser(1, (err,user)=>{
//     if(err) {
//         return console.log(err)
//     }
//     else{ 
//         console.log(`user name is ${user.name}`)
//     }
// })

let users = [
    {
        id: 1,
        name: 'oscar'
    },
    {
        id: 2,
        name: 'ernesto'
    },
    {
        id: 3,
        name: 'cecilia'
    }

]

let emails = [
    {
        id: 1,
        email: 'oscar@gmail.com'
    },
    {
        id: 2,
        email: 'ernesto@gmail.com'
    }
]


let getUser = (id, cb)=>{
    let user = users.find(user=>user.id==id)

    if(!user){
        cb('NO EXISTE ESE USUARIO')
    }
    else{
        cb(null, user)
    }
  
}

let getMail = (user, cb) =>{
    let email = emails.find(email=>email.id==user.id)
    if(!email){
        cb('ESE USUARIO no tiene correo')
    }
    else{
        cb(null, {
            id: user.id,
            name: user.name,
            email: email.email
        })
    }
}

getUser(3, (err, user)=>{
    if(err) return console.log(err)
        getMail(user, (err,res)=>{
            if(err) return console.log(err)
            console.log(res)
    })
    
})