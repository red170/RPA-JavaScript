let array = [1,2,3,4,5,6,7,8,9,0]
let word = 'oscar'
let letras = ['x','b','f','a','h']
let signos = ['>','/','%','*','+']
let palabras = ['HTML','CSS','JS','GIT','REACT']


// Propiedades

let longitud = array.length // Devulve la cantidad de elementos en un arreglo
console.log(longitud)

// METODOS BASICOS

array.shift() // Devulve el Primer elemento del arreglo
console.log(array)

array.pop() // Devulve el Ultimo elemento del arreglo
console.log(array)

array.push(10,11) // Agregar Elementos a un arreglo
console.log(array)

array.unshift(1)// Agrega un elemento nuevo al inicio
console.log(array)

let indice = array.indexOf(7) // Devuelve el elemento segun el indice especificado (contando de derecha a izquierda)
console.log(indice)

let indiceInverso = array.lastIndexOf(7) // Devuelve el elemento segun el indice especificado (contando de izquierda a derecha)
console.log(indiceInverso)

let arrayInvertido = array.reverse() // Invierte el orden de los elementos del arreglo
console.log(arrayInvertido)

let arrayConversionAString = array.join('/') // Convierte el arreglo a String y lo que indiquemos en el parametro servira como separador
console.log(arrayConversionAString)

array.splice(1,0,17)
console.log(array)
// PRIMER PARAMETRO: indica desde que posicion empezara la modificacion del arreglo
// SEGUNDO PARAMETRO: 
//  - CASO 1 (CUANDO TIENE UN NUMERO): ese numero indica que desde el la posicion indicada en en primer numero hasta la posicion indicada en etse numero se eliminaran los elementos
//  - CASO 2 (CUANDO EL VALOR ES CERO): no eliminara nada pero servira para indicar que los valores nuevos (explicacion de tercer parametro) se ubicaran en el lugar especificado en el primer parametro
// TERCER, CUARTO, QUINTO ... PARAMETRO: son nuevos elementos que se agregaran haciendo uso de los parametros anteriores


let corte = array.slice(2,7) //Devuleve un segmento del arreglo siendo los parametros (Posicion Inicial, Posicion Final)
console.log(corte)



// METODOS AVANZADOS


// Convertir un elemento a Array
console.log(Array.from(word))

console.log(word.split(''))

//Ordenar los elementos segun el Valor Unicode

console.log(letras)
console.log(letras.sort())

console.log(array)
console.log(array.sort((a,b) => a-b))
console.log(array.sort((a,b) => b-a))

console.log(signos)
console.log(signos.sort())

// Recorrer un array
array.forEach((number)=> console.log(number))
array.forEach((number,index)=> console.log(number, index))

// Comprueba si ciertos elementos de un array cumplen una condicion

console.log(palabras)
console.log(palabras.some( word => word.length > 2 ))
console.log(palabras.every( word => word.length > 2 ))

// Operar el contenido del contenido de un array

array.map((number) => console.log(number *2))
let multi = array.map((number) => number *2)
console.log(multi)

// filtar los contenidos del array que cumplan una Condicion

console.log(array.filter(number => number > 6))

//Concatenar Arrays

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
let array3 = ['g','h','i']
const array4 = array1.concat(array2,array3);

console.log(array4);

// Reducir los elementos de un array a un unico valor

console.log(array.reduce((a,b) => a+b))
console.log(array.reduce((a,b) => a-b))
console.log(array.reduce((a,b) => a*b))
console.log(array.reduce((a,b) => a/b))

const usuarios = [
    {
        name:"user1",
        status:true
    },
    {
        name:"user3",
        status:true
    },
    {
        name:"user4",
        status:false
    },
    {
        name:"user5",
        status:false
    },
    {
        name:"user6",
        status:false
    },
    {
        name:"user2",
        status:false
    },
]

let online = usuarios.reduce((cont,usuario) => {
    if (usuario.status) cont++
    return cont
}, 0)

console.log(online)