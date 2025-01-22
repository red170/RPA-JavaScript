// Objeto Math
// El objeto Math nos permite realizar operaciones matematicas complejas de una manera sencilla 

    //Numeros Trascendentales

        //Numero de Euler
        let numeroDeEuler = Math.E 
        console.log(numeroDeEuler)

        // Logaritmo Natural de 2
        let logaritmoNaturalDe2 = Math.LN2 
        console.log(logaritmoNaturalDe2)

        // Logaritmo Natural de 10
        let logaritmoNaturalDe10 = Math.LN10 
        console.log(logaritmoNaturalDe10)

        // Logaritmo de 2
        let logaritmoDe2 = Math.LOG2E 
        console.log(logaritmoDe2)

        // Logaritmo de 10
        let logaritmoDe10 = Math.LOG10E 
        console.log(logaritmoDe10)

        // Numero PI
        let pi = Math.PI 
        console.log(pi)

    //Operaciones Matematicas

        // Devolver el Valor Absoluto de un Numero
        let valorAbaolutoDeX = Math.abs(-1) 
        console.log(valorAbaolutoDeX)

        // Si el numero es Positivo devulve 1 si es Negativo devuelve -1
        let menorValorDeSuSigno = Math.sign(-20) 
        console.log(menorValorDeSuSigno)

        // Devuelve el numero mayor de un grupo de numeros
        let numeroMayor = Math.max(...numeros)
        console.log(numeroMayor)

        // Devuelve el numero menor de un grupo de numeros
        let numeroMenor = Math.min(...numeros) 
        console.log(numeroMenor)

        // Raiz Cuadrada
        let raizCuadrada = Math.sqrt(9) 
        console.log(raizCuadrada)

        // Raiz Cubica
        let raizCubica = Math.cbrt(7) 
        console.log(raizCubica)
        
        // Eleva un numero a x potencia
        let numeroPotenciado = Math.pow(2,3) 
        console.log(numeroPotenciado)
        
    //Redondeo de Numeros

        // Redondea un Numero
        let redondeo = Math.round(1.9849023) 
        console.log(redondeo)

        // Rendondea al Numero Mayor mas proximo
        let redondeoMayor = Math.ceil(1.9849023) 
        console.log(redondeoMayor)

        // Rendondea al Numero Menor mas proximo
        let redondeoMenor = Math.floor(1.9849023) 
        console.log(redondeoMenor)

        // Trunca un Numero Decimal
        let truncadoDeNumero = Math.trunc(1.9849023) 
        console.log(truncadoDeNumero)

        //Devolver un Decimal con una cantidad exacta de Numeros Decimales
        let truncadoEspecifico = Math.PI.toFixed(2)
        console.log(truncadoDeNumero)


    // Numeros Aleatorios en JS

        // Genera un Numero Aleatorio Decimal entre 0 y 1
        let numeroAleatorioBase = Math.random() 
        console.log(numeroAleatorioBase)

        // Genera un numero Aleatorio decimal entre 0 y el numero por el que lo multipliquemos
        let numeroAleatorioAmpliado = Math.random()*20 
        console.log(numeroAleatorioAmpliado)

         // Devuelve un Numero aleatorio entero entre 0 y el numero que le indiquemos
         let numeroAleatorioTradicional = Math.floor(Math.random()*100) 
         console.log(numeroAleatorioTradicional)

         // Devuelve un numero aleatorio entre un rango de numeros especificos
         let numeroAleatorioEnRangoDefinido = Math.floor(Math.random()*(20-10)+10) 
         console.log(numeroAleatorioEnRangoDefinido)



