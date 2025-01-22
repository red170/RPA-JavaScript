// 1. Generar un número aleatorio entre dos valores:
// Crea una función que tome dos números como parámetros y devuelva un número aleatorio entero entre esos dos valores (incluyendo ambos).
    let desde = 20
    let hasta = 100
    let numeroAleatorioEnRangoDefinido = Math.floor(Math.random()*(hasta-desde)+desde) 
    console.log(numeroAleatorioEnRangoDefinido)

// 2. Redondear números:
// Crea una función que tome un número decimal y lo redondee hacia arriba, hacia abajo o al número entero más cercano, según un parámetro adicional.
    // Redondea un Numero
    let redondeo = Math.round(1.9849023) 
    console.log(redondeo)

    // Rendondea al Numero Mayor mas proximo
    let redondeoMayor = Math.ceil(1.9849023) 
    console.log(redondeoMayor)

    // Rendondea al Numero Menor mas proximo
    let redondeoMenor = Math.floor(1.9849023) 
    console.log(redondeoMenor)


// 3. Calcular la hipotenusa de un triángulo rectángulo:
// Crea una función que calcule la hipotenusa de un triángulo rectángulo dados los catetos. Utiliza el teorema de Pitágoras y el método Math.sqrt().
    function calcularHipotenusa(cateto1, cateto2) {
        return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    }

    let cateto1 = 3;
    let cateto2 = 4;
    let hipotenusa = calcularHipotenusa(cateto1, cateto2);

    console.log(hipotenusa)


// 4. Generar un número aleatorio entre 0 y 1 con un número específico de decimales:
// Crea una función que tome un número como parámetro y genere un número aleatorio entre 0 y 1 con ese número de decimales.
    function generarNumeroAleatorio(decimales) {
        let numeroAleatorio = Math.random();
        return parseFloat(numeroAleatorio.toFixed(decimales));
    }

    let decimales = 3;
    let numeroAleatorio = generarNumeroAleatorio(decimales);

    console.log(numeroAleatorio);

// 5. Simular el lanzamiento de un dado:
// Crea una función que simule el lanzamiento de un dado de seis caras y devuelva el número obtenido.
    let dado = Math.floor(Math.random()*6) 
    console.log(`El Numero del Dado es ${dado}`)