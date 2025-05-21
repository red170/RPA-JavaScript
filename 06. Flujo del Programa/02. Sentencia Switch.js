//Sentencia Switch
//Se usa para evaluar una variable y dependiendo de su valor se ejecutara un bloque de codigo
//En este caso se evalua la variable nombreJuego y dependiendo de su valor se ejecutara un bloque de codigo

let nombreJuego = 'xenoblade'; //Variable a evaluar

switch (nombreJuego) //Se evalua la variable
{
    case 'xenoblade': //Caso 1
        console.log('Excelente Eleccion !!!'); //Resultado si se cumple la condicion
        break; //Se sale del switch
    case 'shin megami tensei': //Caso 2
        console.log('Buenos Gustos !!!'); //Resultado si se cumple la condicion
        break; //Se sale del switch
    case 'persona': //Caso 3
        console.log('Mejora tus Gustos !!!'); //Resultado si se cumple la condicion
        break; //Se sale del switch
    default: //Caso por defecto (si no se cumple ninguno de los casos anteriores)
        console.log('...Siga Intentando'); //Resultado si no se cumple ninguna de las condiciones
}

// Sentencia Break
//Se usa para salir de un bloque de codigo, en este caso se usa para salir del switch
//Se puede usar en cualquier bloque de codigo, pero es recomendable usarlo solo en switch