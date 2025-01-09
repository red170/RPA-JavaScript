let variable = ' soy un string '

//Propiedades
    // Las propiedades son valores que se pueden obtener de una variable

    //Longitud
    let longitud = variable.length 
        //Resultado
        console.log(longitud)

// Metodos
    // Los metodos son funciones que se pueden aplicar a una variable

    //Devuelva el string en Mayusculas
        let mayuscula = variable.toUpperCase() 
        //Resultado
        console.log( 'upperCase: '+ mayuscula)

    //Devuelve el string en Minusculas
        let minuscula = mayuscula.toLowerCase() 
        //Resultado    
        console.log('lowerCase: ' + minuscula)

    //Devuelve la posicion del caracter o cadena de la variable quen se le indique en el parametro
        let indice = variable.indexOf('O') 
        //Resultado
        console.log('indexDeUnaCadena: ' + indice)

    //Reemplaza Caracteres (Busca el caracter o cadena ingresado en el primer parametro y lo reemplaza por el segundo parametro)
        let cambio = variable.replace('O','F')
        //Resultado
        console.log('reemplazaCaracteres: ' + cambio)

    //Elimina espacios al inicio y al final de una cadena
        let borrarEspacio = variable.trim() 
        //Resultado
        console.log('borrarEspaciosAlInicioYFinal: ' + borrarEspacio)

    //Mediante los indices introducidos en los parametros se extrae una parte de la cadena
        let subString = variable.substring('0','6') 
        //Resultado
        console.log('subCadena: ' + subString)

    //Igual que SubString pero admite numeros negativos para empezar a contar desde el final
        let slice = variable.slice('-7','-1') 
        //Resultado
        console.log('subCadena: ' + slice)

    //Retorna True si la cadena empieza por el caracter que se le indique en el parametro, el segundo parametro indica desde que indice se empieza a validar, sino se especifica se toma como 0
        let inicio = variable.startsWith('S','1') 
        //Resultado
        console.log('iniciaCon; ' + inicio)

    // Igual que el anterior pero para el final, el segundo parametro indica hasta donde termina de validar si no se especifica se toma como el final de la cadena
        let final = variable.endsWith('Y','4') 
        //Resultado
        console.log('finalizaCon: ' + final)
    //Devuleve True si la cadena incluye el caracter o cadena que se le indique en el parametro, el primer parametro es el caracter o cadena a buscar y el segundo parametro es el indice desde donde se empieza a buscar
        let include = variable.includes(' ','1')
        //Resultado
        console.log('incluye: ' + include)

    // Repite la cadena las veces que indiquemos en el parametro
        let repeticion = variable.repeat(3) 
        //Resultado
        console.log('repiteCadena: ' + repeticion)
