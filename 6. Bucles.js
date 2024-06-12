let contador = 0 
let contador2 = 0 
let array = []
let frutas = ['manzana','banana','cereza','naranja','uva']
let longitudDeArreglo = frutas.length



// BUCLE WHILE

while (contador <= 10){
    console.log(contador)
    contador++
} 


// BUCLE DO WHILE

do{
    array.push(contador2)
    contador2++
    console.log(array)

}while(contador2 < 10)

 
// BUCLE FOR

for(let i=0; i<longitudDeArreglo; i++){
    console.log(`Fruta: ${frutas[i]}`)
}

