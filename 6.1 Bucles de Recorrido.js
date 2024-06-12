let scores = [90, 70, 80, 95, 60, 85, 75, 98, 88, 76];
let string = 'SOY UN STRING'

// Bucle FOR-OF



for (let puntos of scores){
    console.log(puntos)

    if (puntos < 90 && puntos >= 80){
        console.log(puntos)
    }
}

for (let letra of string){
    console.log(letra)
}


// Bucle FOR-IN

for (let punto in scores){

    console.log(punto)

    if (punto < 7 && punto >= 2){
        console.log(punto)
    }

}