let espacios = 'joifds ijudfiouis ui ui u u u oo '

let sinEspacio = []

for (let letras of espacios){
    if (letras != ' '){
        sinEspacio.push(letras)
    }
}

console.log(sinEspacio.join(''))