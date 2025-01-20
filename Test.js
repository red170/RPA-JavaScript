function adivinaNumero(){
    let random = Math.floor(Math.random() * 100) + 1
    console.log(random)
    let userNumero

    do{

        userNumero= prompt('ingresa un numero')

        if(userNumero > random){
            alert('el numero es mayor')
        }
        else if(userNumero < random){
            alert('el numero es menor')
        }

    }while(userNumero != random)

        alert('acertaste!!!')
}

adivinaNumero()