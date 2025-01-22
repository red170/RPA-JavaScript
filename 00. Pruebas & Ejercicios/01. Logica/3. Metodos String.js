// Manipulación básica:

    // Invertir una cadena: Crea una función que tome una cadena como entrada y devuelva la cadena invertida.
        //Metodo sin Metodos de String
        let string = 'pueblo'
        let invertida =''

        for (let i=string.length -1 ;i>=0;i--){
        invertida += string[i]
        }

        console.log(invertida)

        //Metodo con Metodos de String
        let string1 = 'pueblo'
        let invertido = string1.split('').reverse().join('')
        console.log(invertido)

    // Contar vocales: Escribe una función que cuente el número de vocales en una cadena dada.

    // Convertir a mayúsculas y minúsculas: Crea un programa que pida al usuario una cadena y la convierta a mayúsculas y luego a minúsculas.
    
    // Reemplazar palabras: Escribe una función que reemplace todas las ocurrencias de una palabra en una cadena por otra.

// Manipulación avanzada:

    // Validar un correo electrónico: Crea una función que valide si una cadena de texto tiene el formato de un correo electrónico válido.

    // Capitalizar la primera letra de cada palabra: Escribe una función que capitalice la primera letra de cada palabra en una cadena.

    // Eliminar espacios en blanco: Crea una función que elimine todos los espacios en blanco al principio y al final de una cadena.

    // Verificar si una cadena es un palíndromo: Escribe una función que determine si una cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda)