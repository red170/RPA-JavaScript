let array = [1,2,3,4,5,6,7,8,9,0]
let word = 'oscar'
let letras = ['x','b','f','a','h']
let signos = ['>','/','%','*','+']
let palabras = ['HTML','CSS','JS','GIT','REACT']


// Propiedades
//Las propiedades son valores que se pueden acceder desde un objeto o arreglo

    //Longitud
    let longitud = array.length 
    console.log(longitud)

// Metodos Basicos
//Los metodos son funciones que se pueden aplicar a un objeto o arreglo

    // Devulve el Primer elemento del arreglo
    array.shift() 
    console.log('SHIFT: ' + array)

    // Devulve el Ultimo elemento del arreglo
    array.pop() 
    console.log('POP' + array)

    // Agregar Elementos a un arreglo
    array.push(10,11) 
    console.log('POP: ' + array)

    // Agrega un elemento nuevo al inicio
    array.unshift(1)
    console.log('UNSHIFT: ' + array)

    // Devuelve el elemento segun el indice especificado dentro del Parametro
    let indice = array.indexOf(7) 
    console.log('INDEXOF: ' + indice)

    // Devuelve el elemento segun el indice especificado dentro del Parametro pero en sentido inverso
    let indiceInverso = array.lastIndexOf(7) 
    console.log('LASTINDEXOF: ' + indiceInverso)

    // Invierte el orden de los elementos del arreglo
    let arrayInvertido = array.reverse() 
    console.log('REVERSE: ' + arrayInvertido)

    // Convierte el arreglo a String y lo que indiquemos en el parametro servira como separador
    let arrayConversionAString = array.join('/') 
    console.log('TOSTRING: ' + arrayConversionAString)

    //Extraer una parte del arreglo siendo el primero parametro desde donde empieza el nuevo sub-arreglo y el segundo parametro hasta donde termina
    let corte = array.slice(2,7) 
    console.log('SLICE: ' + corte)

    // Elimina elementos del arreglo segun los parametros indicados
        // PRIMER PARAMETRO: indica desde que posicion empezara la modificacion del arreglo
        // SEGUNDO PARAMETRO: 
            //  - CASO 1 (CUANDO TIENE UN NUMERO): ese numero indica que desde el la posicion indicada en en primer numero hasta la posicion indicada en etse numero se eliminaran los elementos
            //  - CASO 2 (CUANDO EL VALOR ES CERO): no eliminara nada pero servira para indicar que los valores nuevos (explicacion de tercer parametro) se ubicaran en el lugar especificado en el primer parametro
        // TERCER, CUARTO, QUINTO ... PARAMETRO: son nuevos elementos que se agregaran haciendo uso de los parametros anteriores
    array.splice(1,0,17)
    console.log('SPLICE: ' + array)

// Metodos Avanzados
//Los metodos son funciones que se pueden aplicar a un objeto o arreglo


// Convertir un elemento a Array
    //Tomando una variable de tipo String se hace la Conversion a Array separando caracter por caracter de dos Formas
        //1. Array.from()
            console.log('ARRAYFROM: ' + Array.from(word))
        //2. split()
            let split = word.split('')
            console.log('SPLIT: ' + split)

//Ordenar los elementos segun el Valor Unicode
    //Array Desordenado
    console.log(letras)
    //Array Ordenado usando el metodo sort()
    console.log(letras.sort())
    //Array Desordenado (Numeros)
    console.log(array)
    //Array Ordenado (Numeros) de Menor a Mayor
    console.log(array.sort((a,b) => a-b))
    //Array Ordenado (Numeros) de Mayor a Menor
    console.log(array.sort((a,b) => b-a))
    //Array Desordenado (Signos)
    console.log(signos)
    //Array Ordenado (Signos)
    console.log(signos.sort())

// Recorrer un array
    //Imprimir los elementos de un array
    array.forEach((number)=> console.log(number))
    //Imprimir los elementos de un array con su indice
    array.forEach((number,index)=> console.log(index + ' : ' + number))

// Comprueba si ciertos elementos de un array cumplen una condicion devuleve True o False
    //Array a Utilizar
    console.log(palabras)
    //Devuelve true si alguna de las palabras tiene mas de 'n' cantidad de caracteres
    console.log(palabras.some( word => word.length > 2 ))
    //Devuelve true si todas las palabras tienen mas de 'n' cantidad de caracteres
    console.log(palabras.every( word => word.length > 2 ))

// Operar el contenido del contenido de un array
//Operando cara elemento de un array e imprimiendo el resultado en cada Iteracion
    array.map((number) => console.log(number *2))
    //Operando cara elemento de un array y guardando el resultado en un nuevo array
    let multi = array.map((number) => number *2)
    console.log(multi)

// filtar los contenidos del array que cumplan una Condicion
    console.log(array.filter(number => number > 6))

//Concatenar Arrays
    //Array a Concatenar
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    let array3 = ['g','h','i']

    //Concatenacion de Arrays
    const array4 = array1.concat(array2,array3);
    console.log(array4);

// Reducir los elementos de un array a un unico valor
    //Suma, Resta, Multiplicacion y Division de los elementos de un array hasta dejar un solo elemento
    console.log(array.reduce((a,b) => a+b))
    console.log(array.reduce((a,b) => a-b))
    console.log(array.reduce((a,b) => a*b))
    console.log(array.reduce((a,b) => a/b))

    //Conta los elementos de un array que cumplan una condicion
        const usuarios = [
            {name:"user1", status:true},
            {name:"user3", status:true},
            {name:"user4", status:false},
            {name:"user5", status:false},
            {name:"user6", status:false},
            {name:"user2", status:false},
        ]
        let online = usuarios.reduce((cont,usuario) => {
            if (usuario.status) cont++
            return cont
        }, 0)
        console.log(online)