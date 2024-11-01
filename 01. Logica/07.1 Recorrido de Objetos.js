const xenobladeChronicles2 = {
    desarrollador: 'monolithSoftware',
    publicador: 'nintendo',
    plataforma: 'nintendoSwitch',
    genero: 'jrpg',
    anoDePublicacion: 2017,
    personajes: ['Rex','Pyra/Mythra','Nia','Torah','Zeke' ]

}

for(let claves in xenobladeChronicles2){ // Recorrer el Obejto y Imprimir las Claves de cada Atributo/Acccion
    console.log(claves)
}

for (let valores in xenobladeChronicles2){ // Recorrer el Objeto y Imprimir los Valores de cada Atributo/Accion
    console.log(xenobladeChronicles2[valores])
}

for (let valorArray in xenobladeChronicles2.personajes){ // Recorrer el objeto e Imprimir los indices de un array que esta funcionando como valor de un Atributo/Accion
    console.log(valorArray)
}

for (let valorArray of xenobladeChronicles2.personajes){ // Recorrer el Objeto y Imprimir un Array que esta funcionando como Atributo/Accion
    console.log(valorArray)
}

for (let valorArray in xenobladeChronicles2.desarrollador){ // Recorrer el Objeto e imprimir cada carater de un valor (del Atributo) como Indice 
    console.log(valorArray)
}

for (let valorArray of xenobladeChronicles2.desarrollador){ // Recorrer un valor de un Atributo/Accion
    console.log(valorArray)
}