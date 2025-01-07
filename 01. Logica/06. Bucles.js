let contador = 0 
let contador2 = 0 
let array = []
let frutas = ['manzana','banana','cereza','naranja','uva']
let longitudDeArreglo = frutas.length



// BUCLE WHILE
// La instrucción while crea un bucle que ejecuta una sentencia especificada mientras la condición que se evalúa es verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

while (contador <= 10){
    console.log(contador)
    contador++
} 


// BUCLE DO WHILE
// Hace lo mismo que el bucle while, pero primero ejecuta el bloque de código y después evalúa la condición

do{
    array.push(contador2)
    contador2++
    console.log(array)

}while(contador2 < 10)


// BUCLE FOR
// Se ejecuta un bloque de código un número determinado de veces

for(let i=0; i<longitudDeArreglo; i++){
    console.log(`Fruta: ${frutas[i]}`)
}

