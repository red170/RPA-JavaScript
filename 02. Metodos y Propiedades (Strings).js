let variable = ' soy un string '

//Propiedades

let longitud = variable.length //Devuelve la Longitud del contenido
console.log(longitud)

// Metodos

let mayuscula = variable.toUpperCase() //Devuelva el string en Mayusculas
console.log(mayuscula)

let minuscula = mayuscula.toLowerCase() //Devuelve el string en Minusculas
console.log(minuscula)

let indice = variable.indexOf('O') //Devuelve la posicion del caracter o cadena (ingresado dentro de los parametros) de la varaible
console.log(indice)

let cambio = variable.replace('O','F') //Reemplaza el primer caracter de los parametros por el segundo
console.log(cambio)

let borrarEspacio = variable.trim() //Elimina espacios al inicio y al final de una cadena
console.log(borrarEspacio)

let subString = variable.substring('0','5') //Mediante los indices introducidos en los parametros se extrae una parte de la cadena
console.log(subString)

let slice = variable.slice('-7','-1') //igual que SubString pero admite numeros negativos para empezar a contar desde el final
console.log(slice)

let inicio = variable.startsWith('S','1') // Comprueba que una cadena empieza por un caracter especifico (el segundo parametro es donde empieza a validar)
console.log(inicio)

let final = variable.endsWith('Y','4') // Igual que el anterior pero para el final (el segundo parametro indica donde termina de validar)
console.log(final)

let include = variable.includes(' ','1') // Se le da un caracter y su index y indica si es verdadero o falso
console.log(include)

let repeticion = variable.repeat(3) // Repite la cadena las veces que indiquemos en el parametro
console.log(repeticion)
