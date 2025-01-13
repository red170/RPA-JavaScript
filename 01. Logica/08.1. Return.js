//Return en Funciones
//El return es una palabra reservada que se utiliza en las funciones para devolver un valor. El return finaliza la ejecución de la función y devuelve el valor que se le indique. Si no se indica ningún valor, la función devolverá undefined. El return solo puede devolver un valor, si se necesita devolver más de un valor se puede devolver un array o un objeto.

//Ejemplo de return en funciones
//En este ejemplo se muestra como se utiliza el return en una funcion para devolver un valor.

    function suma (valor1,valor2){ //Se declara la funcion con la palabra reservada 'function' luego le damos un nombre en este caso 'suma' que recibe dos parametros que iran entre parentesis valor1 y valor2, (los parametros son datos que luego seran utilizados en la funcion para realizar alguna operacion.) luego se abre un bloque de codigo con llaves {} donde se realizara la operacion que se desea hacer con los parametros que se reciben en la funcion.

        let valor3 = valor1+valor2 //Operamos los parametros que se reciben en la funcion y se guarda el resultado en una variable llamada 'valor3'

        return valor3 //Se utiliza la palabra reservada 'return' para devolver el valor de la variable 'valor3'

    }

    let resultado = suma(1,2) //Se declara una variable llamada 'resultado' que guarda el valor que devuelve la funcion 'suma' al pasarle los valores 1 y 2.

    console.log(resultado) //Se imprime el valor que devuelve la funcion 'suma' al pasarle los valores 1 y 2.

