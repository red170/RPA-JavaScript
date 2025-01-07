//SENTENCIA BREAK
// La sentencia break termina el bucle actual, switch o etiqueta de un bucle anidado.

while(true){
    console.log('hola')
    break
}

//SENTENCIA CONTINUE
// La sentencia continue termina la iteración actual de un bucle (for, while, do...while o etiquetado) y continúa con la siguiente iteración del bucle.

for (let i = 0; i < 10; i++){
    if (i === 3){
        continue
    }
    console.log(i)
}   

//SENTENCIA LABEL
// La sentencia label proporciona una declaración de identificador para una sentencia.

outerLoop:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Sale del bucle más externo
    }
    console.log(i, j);
  }
}