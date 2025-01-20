// Ejercicio 1: Simulador de cajero automático
	// Objetivo: Crear una función que simule un cajero automático. La función debe recibir como parámetros el saldo actual de la cuenta, el monto a retirar y el tipo de cuenta (ahorros o corriente). La función debe verificar si hay suficiente saldo, si el monto a retirar es múltiplo de 10 y aplicar comisiones según el tipo de cuenta.

		function banco(montoRetiro) {

			let fondoAhorros = 1500
			let fondoCorriente = 500
			let retiroAhorros
			let retiroCorriente
			let nuevoFondoAhorros
			let nuevoFondoCorriente

			let cuenta = parseInt(prompt('Binevenido a Tu Banco ... Ingresa el Numero Correspondiente a la cuenta que deseas hacer el Retiro, 1. Cuenta de Ahorros 2. Cuenta Corriente'))

			switch (cuenta) {
				case 1: 
				retiroAhorros = parseInt(prompt('Bienvenido a la Cuenta de Ahorros, Ingresa la Cantidad a Retirar'))

					if (retiroAhorros < fondoAhorros ){
						nuevoFondoAhorros = fondoAhorros - retiroAhorros
						alert(`Tu retiro de Ejecuto de Forma Exitosa, Tienes un Fondo Restante de $ ${nuevoFondoAhorros}.00`)
						break
					}
					else{
						alert('FONDOS INSUFICIENTES')
					}
				case 2:
					retiroCorriente = parseInt(prompt('Bienvenido a la Cuenta Corriente, Ingresa la Cantidad a Retirar'))

					if (retiroCorriente < fondoCorriente ){
						nuevoFondoCorriente = fondoCorriente - retiroCorriente
						alert(`Tu retiro de Ejecuto de Forma Exitosa, Tienes un Fondo Restante de $${nuevoFondoCorriente}.00`)
						break
					}
					else{
						alert('FONDOS INSUFICIENTES')
					}
				default:
					alert('OPCION INVALIDA')
			}
		}

		let pin = parseInt(prompt('Ingresa el Pin para Continuar'))

		if (pin === 1707){
			banco()
		}
		else{
			alert('PIN ERRONEO')
		}

// Ejercicio 2: Generador de contraseñas seguras
	// Objetivo: Crear una función que genere contraseñas seguras de una longitud determinada. La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un carácter especial.

		function pass(){
			
			let claveNueva = []
			let longitud = claveNueva.length
			let caracteres = [
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
				'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
				'~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', ':', ';', '"', '<', ',', '.', '>', '/', '?'
			];

			while(longitud< 8){
				let random = Math.floor(Math.random()*caracteres.length) 
				claveNueva.push(caracteres[random])
				longitud = claveNueva.length

			}

			alert(claveNueva.join(''));

		}

		pass()

// Ejercicio 3: Juego de adivinar el número
	// Objetivo: Crear una función que simule un juego donde la computadora elige un número aleatorio entre 1 y 100 y el usuario debe adivinarlo. La función debe indicar si el número ingresado por el usuario es mayor, menor o igual al número secreto.
