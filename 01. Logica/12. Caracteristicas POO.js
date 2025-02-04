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

let perro1 = new Animal('Perro', 5, 'Pitbull');
let gato1 = new Animal('Gato', 3, 'Siames');

console.log(perro1.ladra());
console.log(gato1.ladra());

//Herencia
//Es la Capacidad de una Clase de Heredar Metodos y Propiedades de Otra Clase.

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad, raza);
    }
}

let perro2 = new Perro('Perro', 15, 'Pastor Aleman');
console.log(perro2.mostrar());


//Metodos Estaticos
//Son Metodos que se Pueden Ejecutar sin la Necesidad de Instanciar la Clase.

class perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad,raza)
    }
    static ladrar(){
        return 'Grrrr'
    }
}

console.log(perro.ladrar())

//Setter
//Es un Metodo que se Utiliza para Establecer un Valor a una Propiedad.

class perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad,raza)
    }
    set setNombre(nombre){
        this.nombre = nombre
    }
}

//Getter
//Es un Metodo que se Utiliza para Obtener un Valor de una Propiedad.

class perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad,raza)
    }
    get getNombre(){
        return this.nombre
    }
}
