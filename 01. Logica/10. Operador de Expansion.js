// Sintaxis
//  console.log(...numbers) 

//Enviar elementos en un array a una función

let numbersToAdd = [17,82,83]

suma(...numbersToAdd) 

function suma(a,b,c){
    let d = a + b + c
    console.log(d)
}


//Añadir un array a otro array

    let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']
    let newUsers = ['marta', 'jaime', 'laura']

    users.push(...newUsers)

    console.log(users); 

//Copiar arrays

     let arr1 = [1, 2, 3, 4,5]

    let arr2 = [...arr1]

    console.log(arr2); 

//Concatenar arrays

     let arr3 = [1, 2, 3, 4, 5]
    let arr4 = [6, 7, 8]
    let arrConcat = [...arr1, ...arr2]

    console.log(arrConcat) 

// Enviar un número indefinido de argumentos a una función (parámetros REST)

    const restParms = (...numbers) => {
        console.log(numbers)
    }
    restParms(1,2,3,4,5,6,7,8) 

//librería math

const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

//Eliminar elementos duplicados

console.log([...new Set(numbers)])