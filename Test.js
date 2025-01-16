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