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

// Ejercicio 6: Factorial
// Escribe un programa que pida al usuario un número y calcule su factorial utilizando un bucle for.

// Ejercicio 7: Números Primos
// Escribe un programa que imprima todos los números primos entre 1 y 100 utilizando un bucle for y una estructura if.

// Ejercicio 8: Adivina el Número
// Escribe un programa que genere un número aleatorio entre 1 y 100 y permita al usuario adivinarlo. El programa debe dar pistas si el número es mayor o menor hasta que el usuario lo adivine, utilizando un bucle while.

// Ejercicio 9: Suma de Elementos de un Array
// Escribe un programa que sume todos los elementos de un array de números utilizando un bucle for.

// Ejercicio 10: Palíndromo
// Escribe un programa que pida al usuario una palabra y determine si es un palíndromo (se lee igual de adelante hacia atrás) utilizando un bucle for y una estructura if.