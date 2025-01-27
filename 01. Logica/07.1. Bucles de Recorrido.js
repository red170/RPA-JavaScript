let scores = [90, 70, 80, 95, 60, 85, 75, 98, 88, 76];
let string = 'SOY UN STRING'

// Bucle FOR-OF
// El bucle for...of recorre los elementos de un objeto iterable, como un array, y ejecuta un bloque de código con instrucciones específicas para cada elemento de la lista.
// Imprime o muestra los elementos de un array

for (let puntos of scores){ // Para cada punto de la lista de scores
    console.log(puntos) // Imprime el valor de punto

    if (puntos < 90 && puntos >= 80){ // Si el valor de punto es menor a 90 y mayor o igual a 80
        console.log(puntos) // Imprime el valor de punto
    }
}

for (let letra of string){ // Para cada letra de la cadena de texto
    console.log(letra) // Imprime la letra
}


// Bucle FOR-IN
// El bucle for...in recorre las propiedades de un objeto, en un orden arbitrario. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas.
// Imprime o muestra los indices de los elementos de un array

for (let punto in scores){ // Para cada punto en la lista de scores

    console.log(punto) // Imprime el indice de punto

    if (punto < 7 && punto >= 2){ // Si el indice de punto es menor a 7 y mayor o igual a 2
        console.log(punto) // Imprime el indice de punto
    }

}