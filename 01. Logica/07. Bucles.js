let contador = 0 
let contador2 = 0 
let array = []
let frutas = ['manzana','banana','cereza','naranja','uva']
let longitudDeArreglo = frutas.length



// BUCLE WHILE
// La instrucción while crea un bucle que ejecuta una sentencia especificada mientras la condición que se evalúa es verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

while (contador <= 10){ // Mientras contador sea menor o igual a 10
    console.log(contador) // Imprime el valor de contador   
    contador++ // Incrementa el valor de contador en 1
} 


// BUCLE DO WHILE
// Hace lo mismo que el bucle while, pero primero ejecuta el bloque de código y después evalúa la condición

do{
    array.push(contador2) // Agrega el valor de contador2 al arreglo
    contador2++ // Incrementa el valor de contador2 en 1
    console.log(array) // Imprime el arreglo

}while(contador2 < 10) // Mientras contador2 sea menor a 10 se ejecutara el bloque de código


// BUCLE FOR
// Se ejecuta un bloque de código un número determinado de veces

for(let i=0; i<longitudDeArreglo; i++){ // Inicializa la variable i en 0, mientras i sea menor a la longitud del arreglo frutas, incrementa i en 1
    console.log(`Fruta: ${frutas[i]}`) // Imprime el valor de la fruta en la posición i
}

for (let i = 0; i < 10; i++){ // Inicializa la variable i en 0, mientras i sea menor a 10, incrementa i en 1
    console.log(i) // Imprime el valor de i
}

