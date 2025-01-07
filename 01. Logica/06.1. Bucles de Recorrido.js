let scores = [90, 70, 80, 95, 60, 85, 75, 98, 88, 76];
let string = 'SOY UN STRING'

// Bucle FOR-OF
// El bucle for...of recorre los elementos de un objeto iterable, como un array, y ejecuta un bloque de código con instrucciones específicas para cada elemento de la lista.
// Imprime o muestra los elementos de un array

for (let puntos of scores){
    console.log(puntos)

    if (puntos < 90 && puntos >= 80){
        console.log(puntos)
    }
}

for (let letra of string){
    console.log(letra)
}


// Bucle FOR-IN
// El bucle for...in recorre las propiedades de un objeto, en un orden arbitrario. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas.
// Imprime o muestra los indices de los elementos de un array

for (let punto in scores){

    console.log(punto)

    if (punto < 7 && punto >= 2){
        console.log(punto)
    }

}