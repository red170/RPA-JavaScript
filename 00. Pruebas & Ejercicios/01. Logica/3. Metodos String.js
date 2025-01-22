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
        let string2 = 'ernestoportillo'
        let contador = 0
        for (let vocal of string2){
            
            if (vocal.includes('o')){
                contador++
            }

        }
        console.log(contador)

    // Convertir a mayúsculas y minúsculas: Crea un programa que pida al usuario una cadena y la convierta a mayúsculas y luego a minúsculas.
        let stringMauys = 'OSCARERNESTOPORTILLO'
        let stringMinus = 'oscarernestoportillo'

        let convertidoMayus = stringMinus.toUpperCase()
        console.log(convertidoMayus)

        let convertidoMinus = stringMauys.toLowerCase()
        console.log(convertidoMinus)
        
    // Reemplazar palabras: Escribe una función que reemplace todas las ocurrencias de una palabra en una cadena por otra.
        let string4 = 'oscarernestoportillo'
        let stringReemplazo = []

        for (let letras of string4){
            if (letras === 'o'){
                letras = '4'
                stringReemplazo.push(letras)
            }
            else{
                stringReemplazo.push(letras)
            }
        }

        console.log(stringReemplazo.join(''))

// Manipulación avanzada:

    // Capitalizar la primera letra de cada palabra: Escribe una función que capitalice la primera letra de cada palabra en una cadena.

    // Eliminar espacios en blanco: Crea una función que elimine todos los espacios en blanco al principio y al final de una cadena.
        let espacios = 'joifds ijudfiouis ui ui u u u oo '

        let sinEspacio = []

        for (let letras of espacios){
            if (letras != ' '){
                sinEspacio.push(letras)
            }
        }

        console.log(sinEspacio.join(''))

    // Verificar si una cadena es un palíndromo: Escribe una función que determine si una cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda)
        let palindromo = 'radar'

        let invertido1 = palindromo.split('').reverse().join('')
        if(invertido1 === palindromo){
            console.log('es palindromo')
        }
        else{
            console.log('no es palindromo')
        }