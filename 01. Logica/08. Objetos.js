//Objetos
//Los objetos son una coleccion de propiedades, y una propiedad es una asociacion entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una funcion, la cual es conocida como metodo del objeto. Ademas, las propiedades de un objeto pueden ser accesadas usando la notacion de punto o la notacion de corchetes.

    //Ejemplo de un objeto
    //Los objetos se declaran con llaves {} y dentro de ellos se van especificando todos los conjuntos de clave:valor que se deseen, separados por comas.
    const xenobladeChronicles2 = {
        desarrollador: 'monolithSoftware',
        publicador: 'nintendo',
        plataforma: 'nintendoSwitch',
        genero: 'jrpg',
        anoDePublicacion: 2017

    }

    //Maneras de Mostar un Objeto
    
    //Mostrar el objeto completo
    console.log(xenobladeChronicles2)

    //Mostrar el valor de una propiedad especifica del objeto
    console.log(xenobladeChronicles2.desarrollador)
