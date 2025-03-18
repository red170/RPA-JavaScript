//Funciones de Registro en la consola
    //Assert 
    //Muestra un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no se muestra nada.
    console.assert(2>3, "5 no es mayor que 3");

    //Clear
    //Limpia la consola.
    console.clear();

    //Error
    //Muestra un mensaje de error en la consola.
    console.error("Esto es un error");

    //Info
    //Muestra un mensaje de información en la consola.
    console.info("Esto es un mensaje de información");

    //Log
    //Muestra un mensaje en la consola.
    console.log("Esto es un mensaje");

    //Table
    //Muestra datos en forma de tabla.
    console.table(["Manzana", "Banana", "Naranja"]);

    //Warn
    //Muestra un mensaje de advertencia en la consola.
    console.warn("Esto es un mensaje de advertencia");

    //Dir
    //Muestra una lista interactiva de las propiedades de un objeto JavaScript.
    console.dir([1,2,3,4,5]);

//Funciones de Conteo en la consola

    //Count
    //Registra el número de veces que se ha llamado a count().
    console.count("Hola");
    console.count("Hola");  

    //CountReset
    //Restablece el contador de count().
    console.countReset("Hola");
    console.count("Hola");

//Funciones de Agrupación en la consola

    //Group
    //Crea un nuevo grupo en la consola.
    console.group("Frutas");
    console.log("Manzana");
    console.log("Banana");
    console.log("Naranja");
    console.groupEnd();

    //GroupCollapsed
    //Crea un nuevo grupo en la consola, pero con el grupo colapsado. (osea cerrado)
    console.groupCollapsed("Frutas");
    console.log("Manzana");
    console.log("Banana");
    console.log("Naranja");
    console.groupEnd();

//Funciones de Temporización en la consola

    //Time
    //Inicia un temporizador (como si fuera un cronómetro).
    console.time("Tiempo");
    console.log("Hola");
    console.log("Hola");
    console.log("Hola");
    console.timeEnd("Tiempo");


