//Clases
//Las clases son una plantilla para crear objetos, en JS se implementaron a partir de la version ES6 sirven para crear objetos con propiedades y metodos. Las clases se declaran con la palabra reservada class seguida del nombre de la clase, las clases pueden tener un constructor que es un metodo especial que se ejecuta en el momento de instanciar la clase, el constructor recibe los parametros que se le pasan al momento de instanciar la clase. Las clases tambien pueden tener metodos que son funciones que se pueden ejecutar en los objetos creados a partir de la clase. Para crear un objeto a partir de una clase se utiliza la palabra reservada new seguida del nombre de la clase y los parametros que recibe el constructor de la clase.

    //Ejemplo de la Creacion de una Clase
        class videojuego{ //Se declaran las clases con la palabra reservada 'class' seguida del nombre de la clase en este caso 'videojuego'

            //Constrcutor de la Clase
            constructor(nombre,desarrolladora,publicadora,anoDeLanzamiento,genero,personajes){ //Se declara el constructor de la clase que es un metodo especial que se ejecuta en el momento de instanciar la clase, el constructor recibe los parametros que se le pasan al momento de instanciar la clase.
                this.clave1 = nombre
                this.clave2 = desarrolladora
                this.clave3 = publicadora
                this.clave4 = anoDeLanzamiento
                this.clave5 = genero
                this.clave6 = personajes
            }

            //Metodos de la Clase
            showgame(){//Se declara un metodo de la clase que es una funcion que se puede ejecutar en los objetos creados a partir de la clase. 
                return `El Juego ${this.clave1} esta desarrollado por ${this.clave2} y publicado por ${this.clave3} se lanzo en el año ${this.clave4} pertenece al genero ${this.clave5} y entre sus personajes podemos mencionar a ${this.clave6}`
            }
        }

    // Creacion de Nuevo Objeto
        //Para crear un objeto a partir de una clase se utiliza la palabra reservada new seguida del nombre de la clase y los parametros que recibe el constructor de la clase.
        let XC2 = new videojuego('Xenoblade Chronicles 2','Monolith Software','Nintendo',2017,'JRPG',['REX','NIA','PYRA','TORAH'])

        //Mostrar el Objeto
        console.log(XC2)

        //Mostrar el Metodo de la Clase
        console.log(XC2.showgame())





