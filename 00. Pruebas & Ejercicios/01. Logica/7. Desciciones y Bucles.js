// Ejercicio 1: Número Par o Impar
    // Escribe un programa que pida al usuario un número y determine si es par o impar utilizando una estructura if-else.

        let numero = 2

        if ((numero % 2) === 0)
        {
        console.log('Es Par')
        }
        else
        {
        console.log('Es Impar')
        }

// Ejercicio 2: Calificación
    // Escribe un programa que pida al usuario una calificación (número entre 0 y 100) y muestre una letra de calificación (A, B, C, D, F) utilizando if-else if-else.

        let calificacion = 210

        if (calificacion <= 100 && calificacion >= 80){
        console.log('Cartegoria A')
        }
        else if (calificacion <= 79 && calificacion >= 60){
        console.log('Cartegoria B')
        }
        else if (calificacion <= 59 && calificacion >= 40){
        console.log('Cartegoria C')
        }
        else if (calificacion <= 39 && calificacion >= 20){
        console.log('Cartegoria D')
        }
        else if (calificacion <= 19 && calificacion >= 0){
        console.log('Cartegoria E')
        }
        else if (calificacion >= 101){
        console.log('Fuera de Rango')
        }
        else if (calificacion < 0){
        console.log('Fuera de Rango')
        }

// Ejercicio 3: Contador de Números
    // Escribe un programa que imprima los números del 1 al 100 utilizando un bucle for.

        for (let i=1;i<101;i++){
            console.log(i)
        }

// Ejercicio 4: Suma de Números
    // Escribe un programa que sume los números del 1 al 10 utilizando un bucle while y muestre el resultado.

        let suma = 0;
        let i = 1;

        while (i <= 10) {
        suma += i;
        i++;
        }

        console.log("La suma de los números del 1 al 10 es:", suma);

// Ejercicio 5: Tabla de Multiplicar
    // Escribe un programa que pida al usuario un número y muestre su tabla de multiplicar del 1 al 10 utilizando un bucle for.

        let numero1 = 2

        for (let i = 1; i <= 10; i++){
        let res = numero1 * i
        console.log(`el numero ${numero1} por ${i} es ${res}`)
        }

// Ejercicio 6: Factorial
    // Escribe un programa que pida al usuario un número y calcule su factorial utilizando un bucle for.

        let factorial = 5
        let resultado = 1

        for (let i = 1; i <= factorial  ; i++){
        resultado *= i
        }

        console.log(`el resultado del factorial de ${factorial} es ${resultado}`)

// Ejercicio 7: Números Primos
    // Escribe un programa que imprima todos los números primos entre 1 y 100 utilizando un bucle for y una estructura if.

        let numero2 = 5;

        if (numero2 <= 0){
            console.log('Numero Invalido')
        }
        else if (numero2 === 3 || numero2 === 2) {
            console.log('Es Primo');
        }
        else if((numero2 % numero2) === 0 )
        {
            if (numero2 % 1 === 0){
                if ((numero2 % 2) === 0){ 
                    console.log('No es Primo');
                }else{
                    console.log('Es Primo');
                }
            }

        }

// Ejercicio 8: Adivina el Número
    // Escribe un programa que genere un número aleatorio entre 1 y 100 y permita al usuario adivinarlo. El programa debe dar pistas si el número es mayor o menor hasta que el usuario lo adivine, utilizando un bucle while.

        let numeroRandom = Math.floor(Math.random() * 100) + 1;
        console.log(numeroRandom);


        let numeroUser = parseInt(prompt(`Ingrese un número entre 1 y 100: .... ${numeroRandom}`));

        while (numeroRandom !== numeroUser) {
            if (numeroRandom < numeroUser) {
                alert('El número es menor ... Sigue Intentando');
            } else if (numeroRandom > numeroUser) {
                alert('El número es mayor ... Sigue Intentando');
            }
            numeroUser = parseInt(prompt('Ingrese un número entre 1 y 100:'));
        }

        alert('¡Felicidades! Adivinaste el número.');

// Ejercicio 9: Suma de Elementos de un Array
    // Escribe un programa que sume todos los elementos de un array de números utilizando un bucle for.

        numeros = [1,2,3,4,5,6,7,8,9,10]
        let total = 0

        for (let i = 1; i < numeros.length; i++){
        total += numeros[i]
        }
        console.log(`la suma total de los elementos del array es de ${total}`)

// Ejercicio 10: Palíndromo
    // Escribe un programa que pida al usuario una palabra y determine si es un palíndromo (se lee igual de adelante hacia atrás) utilizando un bucle for y una estructura if.

        let palabra = 'arap'
        let palabraInvertido = palabra.split('').reverse().join('');
        
        if (palabra === palabraInvertido){
        console.log('es palindromo')
        }
        else{
        console.log('no es palindromo')
        }