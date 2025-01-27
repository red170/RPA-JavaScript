function eliminarDuplicados(array) {
    return [...new Set(array)];
}

let arrayConDuplicados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1,9,6,2,1]
let arraySinDuplicados = eliminarDuplicados(arrayConDuplicados)

console.log(arraySinDuplicados)