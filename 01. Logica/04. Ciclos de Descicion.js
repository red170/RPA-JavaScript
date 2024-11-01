let nombreJuego = 'xenoblade'
let nombreJuego2 = 'shin megami tensei'
let nombreJuego3 = 'pokemon'
let compania = ''
let compania2 = ''
let anoDeLanzamiento = '2010'


// CONDICIONAL IF-ELSE


if (nombreJuego == 'xenoblade'){ // Condicional Simple
    console.log('EXCELENTE ELECCION !!!')
}
else{
    console.log('...SIGA INTENTANDO')
}

if (nombreJuego == 'xenoblade'){ // Condicional Anidado
    if(nombreJuego2 == 'shin megami tensei'){
        console.log('BUENOS GUSTOS !!!')
    }
}
else {
    console.log('MEJOA TUS GUSTOS ...')
}

if (nombreJuego == 'xenoblade' || nombreJuego == 'shin megami tensei' &&
(anoDeLanzamiento > 2000 && anoDeLanzamiento < 2020)){ // Condicional con Comprobacion Unica
    console.log('TU SI LE SABES WEON !!!')
}
else{
    console.log('PARA GUSTOS LOS COLORES ...')
}

//SELECCION DE CASOS SWITCH

let seleccion = 1

switch(seleccion){ // Seleccion Simple
    case 1:
        console.log('has escogido Xenoblade !!!')
        break

    case 2:
        console.log('has escogido Shin Megami Tensei !!!')
        break

    case 3:
        console.log('has ecogido Pokemon !!!')
        break

    default:
        console.log('ELECCION ERRONEA !!!!')
}

//