//Operador de Expansión
//El operador de expansión (spread operator) es una característica de ES6 que nos permite expandir una expresión en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales). El operador de expansión se representa con tres puntos suspensivos (...). El operador de expansión puede ser usado en los siguientes casos:

    //Enviar elementos en un array a una función
        let numbersToAdd = [17,82,83]//Se declara un array llamado 'numbersToAdd' que contiene los valores 17,82,83
        
        function suma(a,b,c){ //Se declara una funcion llamada 'suma' que recibe tres parametros a,b,c
            let d = a + b + c //Se declara una variable 'd' que guarda la suma de los tres parametros que recibe la funcion
            console.log(d) //Se imprime el valor de la variable 'd'
        }

        suma(...numbersToAdd) //Se llama a la funcion 'suma' y se le pasa el array 'numbersToAdd' con el operador de expansion '...' para que la funcion reciba los valores del array como argumentos.

    //Añadir un array a otro array
        let users = ['javier', 'david', 'rosa', 'juan', 'mercedes'] //Se declara un array llamado 'users' que contiene los valores 'javier', 'david', 'rosa', 'juan', 'mercedes'

        let newUsers = ['marta', 'jaime', 'laura'] //Se declara un array llamado 'newUsers' que contiene los valores 'marta', 'jaime', 'laura'

        users.push(...newUsers)//Se añade el array 'newUsers' al array 'users' con el operador de expansion '...'

        console.log(users); //Se imprime el array 'users' con el array 'newUsers' añadido

    //Copiar arrays
        let arr1 = [1, 2, 3, 4,5] //Se declara un array llamado 'arr1' que contiene los valores 1,2,3,4,5

        let arr2 = [...arr1] //Se declara un array llamado 'arr2' que contiene los valores del array 'arr1' con el operador de expansion '...'

        console.log(arr2); //Se imprime el array 'arr2' que contiene los valores del array 'arr1'

    //Concatenar arrays
        let arr3 = [1, 2, 3, 4, 5] //Se declara un array llamado 'arr3' que contiene los valores 1,2,3,4,5
        let arr4 = [6, 7, 8] //Se declara un array llamado 'arr4' que contiene los valores 6,7,8
        let arrConcat = [...arr1, ...arr2] //Se declara un array llamado 'arrConcat' que contiene los valores de los arrays 'arr1' y 'arr2' con el operador de expansion '...'

        console.log(arrConcat) //Se imprime el array 'arrConcat' que contiene los valores de los arrays 'arr1' y 'arr2'

    // Enviar un número indefinido de argumentos a una función (parámetros REST)
        const restParms = (...numbers) => { //Se declara una funcion llamada 'restParms' que recibe un numero indefinido de argumentos con el operador de expansion '...'
            console.log(numbers) //Se imprime los argumentos que recibe la funcion
        }
        restParms(1,2,3,4,5,6,7,8) //Se llama a la funcion 'restParms' y se le pasan los argumentos 1,2,3,4,5,6,7,8

    //librería math
        const numbers = [-12, 2, 3, 23, 43, 2, 3] //Se declara un array llamado 'numbers' que contiene los valores -12,2,3,23,43,2,3

        console.log(Math.max(...numbers)) //Se imprime el valor maximo del array 'numbers' con el operador de expansion '...'
        console.log(Math.min(...numbers)) //Se imprime el valor minimo del array 'numbers' con el operador de expansion '...'

    //Eliminar elementos duplicados
        console.log([...new Set(numbers)]) //Se imprime el array 'numbers' sin elementos duplicados con el operador de expansion '...'