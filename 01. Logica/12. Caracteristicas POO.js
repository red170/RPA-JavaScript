//Abstraccion
//Tratar de Reducir un Objeto lo maximo Posible a sus Caracteristicas mas Importantes y Eliminar las que no son Relevantes.

class animal{
    constructor(nombre,edad,raza){
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }

    mostrar(){
        return `El Animal ${this.nombre} tiene ${this.edad} años, es de raza ${this.raza}`
    }
}

console.log(new animal('Perro',5,'Pitbull').mostrar())


//Polimorfismo
//Es la Capacidad de una Clase de Comportarse de Distintas Maneras.

class Animal {
    constructor(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    mostrar() {
        return `El Animal ${this.nombre} tiene ${this.edad} años, es de raza ${this.raza}`;
    }

    ladra() {
        if (this.nombre.toLowerCase() === 'perro') {
            return 'Grrrr';
        } else {
            return 'no puede ladrar, no es perro';
        }
    }
}

console.log(new Animal('perro', 5, 'Pitbull').ladra());
console.log(new Animal('gato', 5, 'Siames').ladra());

//Herencia
//Es la Capacidad de una Clase de Heredar Metodos y Propiedades de Otra Clase.

class perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad,raza)
    }
}

console.log(new perro('Perro',5,'Pitbull').mostrar())


//Modularidad
//Es la Capacidad de un Sistema de Ser Dividido en Modulos Independientes.

//Encapsulamiento
//Es la Capacidad de un Objeto de Ocultar sus Datos Internos y Mostrar Solo lo que es Necesario.