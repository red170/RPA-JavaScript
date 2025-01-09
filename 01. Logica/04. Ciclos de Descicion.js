let nombreJuego = 'xenoblade'
let nombreJuego2 = 'shin megami tensei'
let nombreJuego3 = 'pokemon'
let compania = ''
let compania2 = ''
let anoDeLanzamiento = '2010'


// Condicionales (If, Else, Else If)
// Los condicionales son estructuras de control que permiten evaluar si una condicion es verdadera o falsa y ejecutar un bloque de codigo en base a eso

    //Simple
    //Se evalua una condicion y se ejecuta un bloque de codigo si se cumple la condicion

        if (nombreJuego == 'xenoblade') //Condicion a Cumplir
        { 
            console.log('Buenos Gustos !!!') //Resultado si se cumple la condicion
        }
        else
        {
            console.log('...Siga Intentando') //Resultado sino se cumple la condicion
        }

    //Anidado
    //se evalua una condicion y si se cumple se evalua otra condicion y se ejecuta un bloque de codigo si se cumplen ambas condiciones

        if (nombreJuego == 'xenoblade') //Se hace la Priemra Comprobacion
            { 
            if(nombreJuego2 == 'shin megami tensei')// Si se cumple la primera se hace la segunda
            {
                console.log('Excelente Eleccion !!!')//Resultado si se cumplen ambas condiciones
            }
        }
        else 
        {
            console.log('Mejora tus Gustos !!!')//Resultado si no se cumple la primera condicion
        }

    //Multiple
    //Se pueden hacer multiples comprobaciones y se ejecutara el bloque de codigo que cumpla con la condicion

        if (nombreJuego == 'xenoblade') //Primera Comprobacion
            {
            console.log('Excelente Eleccion !!!'); //Resultado si se cumple la condicion
            } 
        else if (nombreJuego == 'shin megami tensei') //Segunda Comprobacion
            {
            console.log('Buenos Gustos !!!'); //Resultado si se cumple la condicion
            } 
        else if (anoDeLanzamiento > 2000 && anoDeLanzamiento < 2020) //Tercera Comprobacion (se hacen dos comprobaciones en una haciendo uso de los operadores logicos AND, tambien se pueden usar OR)
            {
            console.log('Juego Moderno !!!'); //Resultado si se cumple la condicion
            } 
        else 
            {
            console.log('...Siga Intentando'); //Resultado si no se cumple ninguna de las condiciones
            }

    //Comprobacion Unica
    //Se puede hacer una comprobacion unica juntando ciertas comprobaciones unidas mediante operadores logicos las cuales van dentro de parentesis esto se conrtara como una sola comprobacion

        if (
            nombreJuego == 'xenoblade' || nombreJuego == 'shin megami tensei' && //Comprobaciones Unidas por Operadores Logicos 
                (anoDeLanzamiento > 2000 && anoDeLanzamiento < 2020) //Comprobacion Unica
            )
        { 
            console.log('Excelente Eleccion !!!') //Resultado si se cumple la condicion
        }
        else{
            console.log('Sigue Intentando...') //Resultado si no se cumple la condicion
        }

//Seleccion de Caso (Switch)
//Se evalua una variable y se ejecuta un bloque de codigo dependiendo del valor de la variable en la mayoria de casos se hace uso de numeros como si de un menu de llamada telefoica se tratara

    let seleccion = 1 //Declaracion de la Variable a Evaluar

    switch(seleccion) //Evaluacion de Variable
    { 
        case 1: 
            console.log('has escogido Xenoblade !!!') //Resultado si se selecciona 1 
            break

        case 2:
            console.log('has escogido Shin Megami Tensei !!!') //Resultado si se selecciona 2
            break

        case 3:
            console.log('has ecogido Pokemon !!!') //Resultado si se selecciona 3
            break

        default:
            console.log('ELECCION ERRONEA !!!!') //Resultado por defecto si se selecciona un valor que no esta en la lista
    }

// Operador Ternario
// El operador ternario es una forma concisa de realizar una evaluación condicional, funciona como un if else en una sola linea

    let edad = 18; //Declaracion de la Variable a Evaluar

    let mensaje = (edad >= 18) //Evaluacion de Variable
        ? "Eres mayor de edad" //Resultado si se cumple la condicion (En este caso si la edad es mayor o igual a 18 el string indicado sera lo que se almacenara en la variable mensaje)
        : "Eres menor de edad" //Resultado si no se cumple la condicion (En este caso si la edad es menor a 18 el string indicado sera lo que se almacenara en la variable mensaje)
        console.log(mensaje) //Mostrar Resultado en Consola