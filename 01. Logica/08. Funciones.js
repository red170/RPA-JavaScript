//Funciones
//Las funciones son un bloque de código que se ejecuta cuando se invoca, es decir, cuando se llama a la función. Las funciones pueden recibir parámetros y devolver un valor. Para declarar una función se utiliza la palabra reservada function seguida del nombre de la función y los parámetros que recibe, si es que recibe alguno. Las funciones pueden ser declaradas de dos maneras: con la palabra reservada function o con una función flecha (=>). Las funciones pueden ser almacenadas en variables, ser pasadas como argumentos a otras funciones y ser retornadas por otras funciones. Las funciones también pueden ser anónimas, es decir, no tener un nombre.


    function suma (valor1,valor2){ //Se declara la funcion con la palabra reservada 'function' luego le damos un nombre en este caso 'suma' que recibe dos parametros que iran entre parentesis valor1 y valor2, (los parametros son datos que luego seran utilizados en la funcion para realizar alguna operacion.) luego se abre un bloque de codigo con llaves {} donde se realizara la operacion que se desea hacer con los parametros que se reciben en la funcion.

        let valor3 = valor1+valor2 //Operamos los parametros que se reciben en la funcion y se guarda el resultado en una variable llamada 'valor3'

        console.log(valor3) //Imprimimos el resultado de la operacion que se realizo con los parametros que se reciben en la funcion.
        
    }

    suma(1,2) //Para que todo lo que se hizo en la funcion se ejecute se debe llamar a la funcion con el nombre que se le dio y se le deben pasar los parametros que se le pidieron en la funcion, en este caso se le pasan los valores 1 y 2.
