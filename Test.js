let string4 = 'oscarernestoportillo'
let stringReemplazo = []

for (let letras of string4){
    if (letras === 'o'){
        letras = '4'
        stringReemplazo.push(letras)
    }
    else{
        stringReemplazo.push(letras)
    }
}

console.log(stringReemplazo.join(''))