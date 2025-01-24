let numero1 = 15
let numero2 = 2
let operacion = 1

switch(operacion){
    case 1:
        console.log( `la suma de ${numero1} y ${numero2} es ${numero1+numero2}`)
    case 2:
        console.log( `la resta de ${numero1} y ${numero2} es ${numero1-numero2}`)
    case 3:
        console.log( `la multiplicacion de ${numero1} y ${numero2} es ${numero1*numero2}`)
    case 4:
        console.log( `la division de ${numero1} y ${numero2} es ${numero1/numero2}`)
    default:
        console.log('error')
}