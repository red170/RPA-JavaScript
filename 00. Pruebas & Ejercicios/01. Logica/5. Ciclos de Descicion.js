// 1. Calculadora básica con operaciones:
    // Crea un programa que pida al usuario dos números y una operación (+, -, *, /). Utiliza una estructura condicional (if o switch) para realizar la operación correspondiente y mostrar el resultado.
        let numero1 = 15
        let numero2 = 2
        let operacion = 1

        switch(operacion){
            case 1:
                console.log( `la suma de ${numero1} y ${numero2} es ${numero1+numero2}`)
                break
            case 2:
                console.log( `la resta de ${numero1} y ${numero2} es ${numero1-numero2}`)
                break
            case 3:
                console.log( `la multiplicacion de ${numero1} y ${numero2} es ${numero1*numero2}`)
                break
            case 4:
                console.log( `la division de ${numero1} y ${numero2} es ${numero1/numero2}`)
                break
            default:
                console.log('error')
        }

// 2. Determinar si un número es par o impar:
    // Escribe un programa que pida al usuario un número y determine si es par o impar. Utiliza el operador módulo (%) para obtener el resto de la división entre 2.
        let numero = 3

        if ((numero % 2)==0){
            console.log('es par')
        }
        else{
            console.log('es impar')
        }

// 3. Calcular el descuento de una compra:
    // Crea un programa que calcule el precio final de una compra aplicando un descuento según el monto total. Utiliza una estructura condicional para determinar el porcentaje de descuento a aplicar. Por ejemplo, si el monto es mayor a $100, aplica un 10% de descuento.
        let totalDeCompra = 100

        if (totalDeCompra >= 100 && totalDeCompra<=199){
            console.log(`el precio con descuento aplicado del 80% es de ${(totalDeCompra/100)*80}`)
        }
        else if (totalDeCompra >= 200){
            console.log(`el precio con descuento aplicado de mitad de precio es de ${(totalDeCompra/100)*50}`)
        }
        else{
            console.log('no aplica')
        }

// 4. Simulador de un semáforo:
    // Crea un programa que simule un semáforo. Utiliza una estructura condicional para mostrar un mensaje diferente según el color del semáforo (rojo, amarillo, verde).
        let color= 'rojo'

                if (color == 'rojo'){
                    console.log('ALTO')
                }
                else if (color == 'amarillo'){
                    console.log('REDUCE VELOCIDAD')
                }
                else if (color == 'verde'){
                    console.log(`PASA`)
                }
                else{
                    console.log('no aplica')
                }

// 5. Clasificar un número:
    // Escribe un programa que pida al usuario un número y determine si es positivo, negativo o cero. Utiliza una estructura condicional para mostrar el resultado correspondiente.
        let numero3= -1

                if (numero3 >= 1){
                    console.log('positivo')
                }
                else if (numero3 == 0){
                    console.log('cero')
                }
                else if (numero3 <= -1){
                    console.log('negativo')
                }
