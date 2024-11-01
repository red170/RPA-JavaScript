class videojuego{

    constructor(nombre,desarrolladora,publicadora,anoDeLanzamiento,genero,personajes){ // Porpiedades de la Clase
        this.clave1 = nombre
        this.clave2 = desarrolladora
        this.clave3 = publicadora
        this.clave4 = anoDeLanzamiento
        this.clave5 = genero
        this.clave6 = personajes
    }

    showgame(){ // Metodos de la Clase
        return `El Juego ${this.clave1} esta desarrollado por ${this.clave2} y publicado por ${this.clave3} se lanzo en el año ${this.clave4} pertenece al genero ${this.clave5} y entre sus personajes podemos mencionar a ${this.clave6}`
    }

}

// Creacion de Nuevo Objeto

let XC2 = new videojuego('Xenoblade Chronicles 2','Monolith Software','Nintendo',2017,'JRPG',['REX','NIA','PYRA','TORAH'])
console.log(XC2)

console.log(XC2.showgame())




// *(EJERCICIO)*

class Libro {
    constructor(nombre, autor, ano, genero) {
        this.nombre = nombre;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
    }

    presentacionLibro() {
        return `El Libro ${this.nombre} pertenece a ${this.autor}, fue escrito en el año ${this.ano} y pertenece al género ${this.genero}`;
    }

    devolverNombre(){
        return this.nombre
    }

    devolverAutor(){
        return this.autor
    }

    devolverAno(){
        return this.ano
    }

    devolverGenero(){
        return this.genero
    }
}

let nombresLibros = [
    "Cien años de soledad",
    "El Señor de los Anillos",
    "Harry Potter y la Piedra Filosofal",
    "Crimen y castigo",
    "El principito",
    "Don Quijote de la Mancha",
    "Orgullo y prejuicio",
    "1984",
    "La Odisea",
    "Moby Dick"
];

let autores = [
    "Gabriel García Márquez",
    "J.R.R. Tolkien",
    "J.K. Rowling",
    "Fyodor Dostoevsky",
    "Antoine de Saint-Exupéry",
    "Miguel de Cervantes",
    "Jane Austen",
    "George Orwell",
    "Homero",
    "Herman Melville"
];

let generos = ["FANTASIA", "AVENTURA", "TERROR"];



let arrayLibros = [];

while (arrayLibros.length < 3) {

    let ingresarNombre = nombresLibros[Math.floor(Math.random() * nombresLibros.length)];
    let ingresarAutor = autores[Math.floor(Math.random() * autores.length)];
    let ingresarAno = Math.floor(Math.random() * (2022 - 1900 + 1)) + 1900;
    let ingresarGenero = generos[Math.floor(Math.random() * generos.length)];

    if (ingresarNombre !== '' 
    && ingresarAutor !== '' 
    && !isNaN(ingresarAno) 
    && ingresarAno.toString().length === 4 &&
        (ingresarGenero === 'FANTASIA' || ingresarGenero === 'AVENTURA' || ingresarGenero === 'TERROR')) {

        arrayLibros.push(new Libro(ingresarNombre, ingresarAutor, ingresarAno, ingresarGenero));
        console.log('¡Ingresado!');
    } else {
        console.log('¡Error!');
    }
}


mostrarLibros()
function mostrarLibros() {
    console.log(arrayLibros);
}

mostrarDatoEspecificoLibro()
function mostrarDatoEspecificoLibro() {
    for (let libro of arrayLibros){
        console.log(libro.autor)
    }
}

mostrarDatoEspecificoLibro1()
function mostrarDatoEspecificoLibro1() {
    for (let libro of arrayLibros){
        console.log(libro.devolverAutor())
}}


mostarDatosOrdenadosLibro()
function mostarDatosOrdenadosLibro(){
    
    let datosOrdenados = []

    for (let libro of arrayLibros){
        datosOrdenados.push(libro.devolverAutor())
    }

    console.log(datosOrdenados.sort())

}

obtenerInfoAPartirDeDato();
function obtenerInfoAPartirDeDato() {
    let dato = '1984'
    
    for (let libro of arrayLibros) {
      if (libro.devolverNombre() === dato) {
        console.log(libro.presentacionLibro());
        return;
      }
    }
}



