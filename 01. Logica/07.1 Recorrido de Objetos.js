//Recorrido de Objetos
//Para recorrer un objeto se puede hacer uso de la estructura de control for...in, la cual nos permite recorrer las propiedades de un objeto.

    //Objeto de Recorrer
    const xenobladeChronicles2 = {
        desarrollador: 'monolithSoftware',
        publicador: 'nintendo',
        plataforma: 'nintendoSwitch',
        genero: 'jrpg',
        anoDePublicacion: 2017,
        personajes: ['Rex','Pyra/Mythra','Nia','Torah','Zeke' ]

    }

    // Recorrer el Obejto y Imprimir las Claves de cada par Clave:Valor
    for(let claves in xenobladeChronicles2){ 
        console.log(claves)
    }

    // Recorrer el Objeto y Imprimir los Valores de par Clave:Valor
    for (let valores in xenobladeChronicles2){ 
        console.log(xenobladeChronicles2[valores])
    }

    // Recorre e Imprimir los indices de un array que esta funcionando como valor de una pareja Clave:Valor
    for (let valorArray in xenobladeChronicles2.personajes){ 
        console.log(valorArray)
    }

    // Recorre e imprime los indices de cada caracter de un Valor de una pareja Clave:Valor
    for (let valorArray in xenobladeChronicles2.desarrollador){ 
        console.log(valorArray)
    }

    // Recorre un valor de una Pareja Clave:Valor que es un Array e imprime cada valor de dicho Array
    for (let valorArray of xenobladeChronicles2.personajes){ 
        console.log(valorArray)
    }

    // Recorre un valor de una Pareja Clave:Valor que es un string e imprime Caracter por Caracter de dicho String
    for (let valorArray of xenobladeChronicles2.desarrollador){ 
        console.log(valorArray)
    }

