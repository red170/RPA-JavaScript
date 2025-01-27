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


