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
			}
			else{
				alert('FONDOS INSUFICIENTES')
			}
		case 2:
			retiroCorriente = parseInt(prompt('Bienvenido a la Cuenta Corriente, Ingresa la Cantidad a Retirar'))

			if (retiroCorriente < fondoCorriente ){
				nuevoFondoCorriente = fondoCorriente - retiroCorriente
				alert(`Tu retiro de Ejecuto de Forma Exitosa, Tienes un Fondo Restante de $ ${nuevoFondoCorriente}.00`)
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
170