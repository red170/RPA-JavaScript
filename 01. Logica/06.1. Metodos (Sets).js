let numeros1 = new Set([1,2,3,4,5])
let numeros2 = new Set([5,9,1,7,8])

//Intersection
//Devuelve un nuevo conjunto que toma los elementos que se repiten entre otros dos conjuntos
let intersection = numeros1.intersection(numeros2)
console.log(intersection)

//Union
//Devulve un Conjunto que Contiene todos los elementos de dos conjuntos dados sin repetir elementos sin ordenarlos solamente concatena
let union = numeros1.union(numeros2)
console.log(union)

//Diferencias
//Devuleve un conjunto que contiene elementos de un conjunto que no tiene el otro conjunto
let diferencia = numeros1.difference(numeros2)
console.log(diferencia)

//Diferencia Simetrica
//Devuelve un conjunto con elementos que se encuentran en el primer conjunto o el segundo pero no en ambos
let = diferenciaSimetrica = numeros1.symmetricDifference(numeros2)
console.log(diferenciaSimetrica)

//Conjunto Hijo
//Devulve un Valor Booleano que indidca si todos los elementos del conjunto primario estan en el segundo
let subConjunto = numeros1.isSubsetOf(numeros2)
console.log(subConjunto)