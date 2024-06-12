// Obejo Math

let numeros = [1,2,3,4,5,6,7,8,9,0,-8,199]

let numeroDeEuler = Math.E //Numero de Euler
console.log(numeroDeEuler)

let logaritmoNaturalDe2 = Math.LN2 // Logaritmo Natural de 2
console.log(logaritmoNaturalDe2)

let logaritmoNaturalDe10 = Math.LN10 // Logaritmo Natural de 10
console.log(logaritmoNaturalDe10)

let logaritmoDe2 = Math.LOG2E // Logaritmo de 2
console.log(logaritmoDe2)

let logaritmoDe10 = Math.LOG10E // Logaritmo de 10
console.log(logaritmoDe10)

let pi = Math.PI // Numero PI
console.log(pi)

let valorAbaolutoDeX = Math.abs(-1) // Devolver el Valor Absoluto de un Numero
console.log(valorAbaolutoDeX)

let menorValorDeSuSigno = Math.sign(-20) // Si el numero es Positivo devulve 1 si es Negativo devuelve -1
console.log(menorValorDeSuSigno)

let numeroMayor = Math.max(...numeros) // Devuelve el numero mayor de un grupo de numeros
console.log(numeroMayor)

let numeroMenor = Math.min(...numeros) // Devuelve el numero menor de un grupo de numeros
console.log(numeroMenor)

let numeroPotenciado = Math.pow(2,3) // Eleva un numero a x potencia
console.log(numeroPotenciado)

let raizCuadrada = Math.sqrt(9) // Raiz Cuadrada
console.log(raizCuadrada)

let raizCubica = Math.cbrt(7) // Raiz Cubica
console.log(raizCubica)

let redondeo = Math.round(1.9849023) // Redondea un Numero
console.log(redondeo)

let redondeoMayor = Math.ceil(1.9849023) // Rendondea al Numero Mayor mas proximo
console.log(redondeoMayor)

let redondeoMenor = Math.floor(1.9849023) // Rendondea al Numero Menor mas proximo
console.log(redondeoMenor)

let truncadoDeNumero = Math.trunc(1.9849023) // Trunca un Numero Decimal
console.log(truncadoDeNumero)

// Generacion de Numero Aleatorio

let numeroAleatorioBase = Math.random() // Genera un Numero Aleatorio Decimal entre 0 y 1
console.log(numeroAleatorioBase)

let numeroAleatorioAmpliado = Math.random()*20 // Genera un numero Aleatorio decimal entre 0 y el numero por el que lo multipliquemos
console.log(numeroAleatorioAmpliado)

let numeroAleatorioTradicional = Math.floor(Math.random()*100) // Devuelve un Numero aleatorio entero entre 0 y el numero que le indiquemos 
console.log(numeroAleatorioTradicional)

let numeroAleatorioEnRangoDefinido = Math.floor(Math.random()*(20-10)+10) // Devuelve un numero aleatorio entre un rango de numeros especificos
console.log(numeroAleatorioEnRangoDefinido)



