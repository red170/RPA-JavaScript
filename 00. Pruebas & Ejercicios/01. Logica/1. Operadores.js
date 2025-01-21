// 1. Calculadora básica:
    // Crea un programa que pida al usuario dos números y una operación (+, -, *, /). Utiliza un switch para realizar la operación correspondiente y mostrar el resultado.
        let opcion = parseInt( prompt('¿Qué desea hacer?\n1. Suma 1\n2. Resta 2\n3. Multiplicacion \n4.Division '));
        let primerOperado
        let segundoOperado
        let resultado
        switch(opcion){
            case 1:
                primerOperado = parseInt(prompt('ingrese el primero numero a sumar'))
                segundoOperado = parseInt(prompt('ingres el segundo numero a sumar'))
                resultado = primerOperado + segundoOperado
                alert(`el resultado de la operacion es ${resultado}`)
                break

            case 2:
                primerOperado = parseInt(prompt('ingrese el primero numero a restar'))
                segundoOperado = parseInt(prompt('ingres el segundo numero a restar'))
                resultado = primerOperado - segundoOperado
                alert(`el resultado de la operacion es ${resultado}`)
                break
            
            case 3:
                primerOperado = parseInt(prompt('ingrese el primero numero a multiplicar'))
                segundoOperado = parseInt(prompt('ingres el segundo numero a multiplicar'))
                resultado = primerOperado * segundoOperado
                alert(`el resultado de la operacion es ${resultado}`)
                break

            case 4:
                primerOperado = parseInt(prompt('ingrese el primero numero a dividir'))
                segundoOperado = parseInt(prompt('ingres el segundo numero a dividir'))
                resultado = primerOperado / segundoOperado
                alert(`el resultado de la operacion es ${resultado}`)
                break

            default:
                alert('numero incorrecto')
        }

// 2. Conversión de unidades:
    // Crea un programa que convierta de grados Celsius a Fahrenheit o viceversa. El usuario debe elegir la conversión y proporcionar el valor a convertir. Recuerda las fórmulas de conversión.
        let temp = parseInt(prompt(' que tipo de conversion deseas hacer \n 1. De Fareheit a Celcius \n 2. De Celcius a Farenheit'))
        let dat
        let resu

        switch(temp){
            case 1:
                dat = parseInt(prompt('Ingrese la Temperatura en Farenheit'))
                resu = (dat -32) * (5/9)
                alert(`el resultado en Celsius es ${resu}`)
                break
            case 2:
                dat = parseInt(prompt('Ingrese la Temperatura en Celsius'))
                resu = (dat *(9/5)) + 32
                alert(`el resultado en Farenheit es ${resu}`)
                break
            default:
                alert('oprcion erronea')
}
// 3. Descuento en una compra:
    // Crea un programa que calcule el precio final de una compra aplicando un descuento. El usuario debe ingresar el precio original y el porcentaje de descuento.
        let articulo = parseInt(prompt('Ingrese el precio del articulo'))
        let descuento = parseInt(prompt('que descuento desea aplicarle'))

        let Resultado = (articulo / 100) * (100 - descuento)

        alert (`el nuevo precio es de ${Resultado}`)

// 4. Área y perímetro de figuras:
    // Crea un programa que calcule el área y perímetro de diferentes figuras geométricas (círculo, rectángulo, triángulo). El usuario debe elegir la figura y proporcionar las medidas necesarias.
        let figura = parseInt(prompt('que fira desea calcular el area \n1. Triangulo \n2. Circulo \n3.Cuadrado'))

        switch(figura){
            case 1:
                let base = parseInt(prompt('Ingrese el valor del area'))
                let altura = parseInt(prompt('ingrese el valor de la altura'))
                let area = (base * altura)/2
                alert(`el area del circulo es de ${area}`)
                break
            case 2:
                let radio= parseInt(prompt('Ingrese el valor del radio'))
                let pi = Math.PI
                let are = pi * (Math.pow(radio,2))
                alert(`el area del circulo es ${are}`)
                break
            case 3:
                let lado = parseInt(prompt('Ingrese el valor del lado'))
                areac = Math.pow(lado,2)
                alert(`èl area del cuadrado es ${areac}`)
                break
            default:
                alert('opcion erronea')
}

// 5. Aumento de salario:
    // Crea un programa que calcule el nuevo salario de un empleado después de un aumento. El usuario debe ingresar el salario actual y el porcentaje de aumento.
        let salario = parseInt(prompt('ingrese el salario actual'))
        let aumento = parseInt(prompt('ingrese el porcentaje de aumento que se le va aplicar'))

        let au = (salario / 100) * (aumento) 
        let nsalario = au + salario
        alert(`el nuevo salario es de ${nsalario}`)