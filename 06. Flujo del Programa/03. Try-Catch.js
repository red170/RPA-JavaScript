//Try Catch
    //Sirve para manejar errores en el código el bloque de código que puede generar un error se coloca dentro del bloque try y el bloque de código que maneja el error se coloca dentro del bloque catch el bloque finally se ejecuta siempre, independientemente de si se produjo un error o no
        //Sintaxis
            try {
                vdsfgsdfgsdfg
            }
            catch (error) {
                console.log('Error: ' + error);
            }

    //Typeof
    //Sirve para determinar el tipo de una variable o expresión en el caso del try catch se usa para determinar el tipo de error que se produjo
    //Sintaxis
        try {
            //codigo que puede generar un error
            vdf
        }
        catch (error) {
            console.log(typeof error); // Muestra el tipo de error
        }

    //Finally
    //Sirve para ejecutar un bloque de código independientemente de si se produjo un error o no
    //Sintaxis
        try {
            //codigo que puede generar un error
            vdf
        }
        catch (error) {
            console.log('Error: ' + error);
        }
        finally {
            console.log('Este bloque se ejecuta siempre');
        }

    //Throw
    //Sirve para lanzar un error personalizado
    //Sintaxis
        try {
            //codigo que puede generar un error
            throw  Error('Este es un error personalizado');
        }
        catch (error) {
            console.log('Error: ' + error);
        }