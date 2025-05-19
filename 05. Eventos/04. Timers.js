//SetTimeout
// El setTimeout es una función que se utiliza para ejecutar una función después de un tiempo determinado se puede utilizar para ejecutar una función una sola vez o de forma repetitiva
    //1era Forma    
        setTimeout(() => {
                console.log("Hola mundo");
        }, 2000); //Se ejecuta a los 2 segundos

    //2da Forma
        function saludar() {
            console.log("Hola mundo");
        }

        setTimeout(saludar, 2000); //Se ejecuta a los 2 segundos

//ClearTimeout
// El clearTimeout es una función que se utiliza para cancelar la ejecución de una función que se ha programado con setTimeout
        let timeout = setTimeout(() => {
            console.log("Hola mundo");
        }, 2000); //Se ejecuta a los 2 segundos

        clearTimeout(timeout); //Cancela la ejecución de la función

//SetInterval
// El setInterval es una función que se utiliza para ejecutar una función de forma repetitiva cada cierto tiempo
    //1era Forma
        setInterval(() => {
            console.log("Hola mundo");
        }, 2000); //Se ejecuta cada 2 segundos

    //2da Forma
        function saludar() {
            console.log("Hola mundo");
        }

        setInterval(saludar, 2000); //Se ejecuta cada 2 segundos

//ClearInterval
// El clearInterval es una función que se utiliza para cancelar la ejecución de una función que se ha programado con setInterval
        let interval = setInterval(() => {
            console.log("Hola mundo");
        }, 2000); //Se ejecuta cada 2 segundos

        clearInterval(interval); //Cancela la ejecución de la función