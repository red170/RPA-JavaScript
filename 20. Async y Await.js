let getName = async () =>{
    return new Promise ((resolve, reject) =>{
        resolve ('Ernesto')
    }, 1500)
}

let sayHello = async () =>{
    let name = await getName()
    return `hello ${name}`
}

sayHello().then(res => console.log(res))

////////////////////////////////////////////////////////////////////////////

let users = [{id: 1,name: 'oscar'},{id: 2,name: 'ernesto'},{id: 3,name: 'cecilia'}]

let emails = [{id: 1,email: 'oscar@gmail.com'},{id: 2,email: 'ernesto@gmail.com'}]


let getUser = async (id)=>{
    let user = users.find(user=>user.id==id)
    
        if(!user){
            throw new Error (`No existe un usuario con el id ${id}`)
        }
        else{
            return user
        }
    
}

let getMail = async (user) =>{
    let email = emails.find(email=>email.id==user.id)

   
        if(!email){
            throw new Error (`${user.name} no tiene correo`)
        }
        else{
            return({
                id: user.id,
                name: user.name,
                email: email.email
            })
        }
  
}

let getInfo =  async (id) => {
    try{
        let user = await getUser(id)
        let res = await getMail(user)
        return `${user.name} email is ${res.email}`
    }
    catch{
        console.log('error!!!!')
    }
}

getInfo(3).then(res => console.log(res))