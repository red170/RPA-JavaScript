// 1. Sumar todos los elementos de un array:
    // Crea una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
        let array = [1,2,3,4,5,6,7,8,9]

        function suma(array1){
            let suma = 0
            for (let i = 0; i < array1.length;i++){
            
                suma += array1[i]
                
            }
            console.log(suma)
        }

        suma(array)

// 2. Encontrar el número más grande en un array:
    // Escribe una función que encuentre el número más grande en un array de números.
        let array2 = [3,5,1,2,6,9,8,4,7]

        function mayor(array1){
            let ordenado = array1.sort(((a,b)=>b-a))       
            console.log(ordenado[0])

            
        }
        mayor(array2)

// 3. Invertir un array:
    // Crea una función que invierta el orden de los elementos de un array.
        let numeros = [3, 5, 7, 2, 8, 1]

        function ordenar(array1){
            let ordenado1 = array1.reverse()
            console.log(ordenado1)
        }

        ordenar(numeros)

// 4. Eliminar duplicados de un array:
    // Escribe una función que tome un array y devuelva un nuevo array con los mismos elementos pero sin duplicados.
        function eliminarDuplicados(array) {
            return [...new Set(array)];
        }

        let arrayConDuplicados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1,9,6,2,1]
        let arraySinDuplicados = eliminarDuplicados(arrayConDuplicados)

        console.log(arraySinDuplicados)

// 5. Ordenar un array de forma ascendente:
    // Crea una función que ordene los elementos de un array de números de menor a mayor.
        let array3 = [3,5,1,2,6,9,8,4,7]

                function mayor(array1){
                    let ordenado = array1.sort(((a,b)=>a-b))       
                    console.log(ordenado)

                    
                }
                mayor(array3)