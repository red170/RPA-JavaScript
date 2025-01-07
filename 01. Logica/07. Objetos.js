const xenobladeChronicles2 = {
    desarrollador: 'monolithSoftware',
    publicador: 'nintendo',
    plataforma: 'nintendoSwitch',
    genero: 'jrpg',
    anoDePublicacion: 2017

}

// console.log(xenobladeChronicles2)
// console.log(xenobladeChronicles2.desarrollador)
// console.log(xenobladeChronicles2.publicador)
// console.log(xenobladeChronicles2.plataforma)
// console.log(xenobladeChronicles2.genero)
// console.log(xenobladeChronicles2.anoDePublicacion)

let pc = {
    nombre: 'PC-170',
    procesador: 'i5',
    ram: '16GB',
    hdd1: '500GB',
    hdd2: '1TB'
}

console.log(pc)
console.log(pc['nombre'])

let frase = `el nombre de mi pc es ${pc.nombre} y tiene un procesador ${pc.procesador}`
console.log(frase)