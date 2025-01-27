//Set Vacio
let setVacio = new Set()
console.log(setVacio)

//Set con Valores Inicializados
let setInicializado = new Set([1,2,3,4,5,6,7,8,9])
console.log(setInicializado)

//Set a Partir de un String
let setString = new Set('sting')
console.log(setString)

//Añadir y Eliminar Elementos en Set
let futasSet = new Set(['limon','fresa','pera'])
    //Añadir
    futasSet.add('mango')
    console.log(futasSet)
    //Eliminar
    futasSet.delete('limon')
    console.log(futasSet)
    //Eliminar Todo dentro del Set
    futasSet.clear()
    console.log(futasSet)

//Verificar si Hay un Elemento dentro de Set
let colorSet = new Set(['rojo','verde','azul'])
console.log(colorSet.has('rojo'))
console.log(colorSet.has('naranja'))

//Iterar un Set
let tecnologias = new Set(['js','html','css'])
for (let tec of tecnologias){
    console.log(tec)
}

//Convertir Set a Array
tecArray = Array.from(tecnologias)
console.log(tecArray)


//Intersection
//Devuelve un nuevo conjunto que toma los elementos que se repiten entre otros dos conjuntos

//Union
//Devulve un Conjunto que Contiene todos los elementos de dos conjuntos dados sin repetir elementos

//Diferencias
//Devuleve un conjunto que contiene elementos de un conjunto que no tiene el otro conjunto

//Diferencia Simetrica
//Devuelve un conjunto com elementos que se encuentran en el primer conjunto o el o segundo pero no en ambos

//Conjunto Hijo
//Devulve un Valor Booleano que indidca si todos los elementos del conjunto primario estan en el segundo