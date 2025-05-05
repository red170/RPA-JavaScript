//***Seleccion de Elementos Mediante ID en HTML

        // Se hace uso de document.getElementById y dentro del parametro introducimos el valor de ID entre comillas
        //Se puede almacenar el nodo dentro de una variable y luego se pueden extraer sus propiedades
        let title = document.getElementById('title')
        //Cambiar Texto de Elemento desde JS (Mediante Propiedad Text Content)
        title.textContent = 'Demo DOM'

//*** Seleccion por medddio de Tag Name */

        // Se hace uso de document.getElementsByTagName y dentro del parametro introducimos el valor de la etiqueta entre comillas
        let title2 = document.getElementsByTagName('h1')
        // Cambiar Texto de Elemento desde JS (Mediante Propiedad Text Content)
        title2[0].textContent = 'Demo DOM 2'
        // Se debe considerar que al hacer uso de este metodo se devuelve un HTML Collection por lo que se debera acceder a los elementos mediante el index de la coleccion indicando por el index que elemeto se desea modificar 

//*** Seleccion de Elementos Mediante Class (QuerySelector) */

        // Al hacer uso de las clases el paramtro debe ser escrito tal cual como el selecctor de CSS es decir con el punto antes del nombre del selecctor
        let para = document.querySelector('.para')
        para.textContent = 'DOM'

        // En el caso de haber varios elementos con la misma clase se puede hacer uso de las psuedoclases de Child
        let para2 = document.querySelector('.para:nth-child(2)')
        para2.textContent = 'DOM 2 '

//*** Acceder a un elemento dentro de otro elemento */

        /// 1era Alternativa
                // 1- Se accede al elemento padre asi como antes
                let para3 = document.querySelector('.para:nth-child(3)')
                // 2- Se accede al elemento hijo solamente que aca en lugar de colocar la plabra reservada 'document' se colocara la varioble donde guardamos el nodo del elemento padre
                let span = para3.querySelector('span')
                span.textContent = 'DDDDOOOOMMMM'

        /// 2da Alternativa
                // Se hace un sucesion de selecciones segun el orden de padre a hijo
                let para4 = document.querySelector('.para:nth-child(3)').querySelector('span')
                para4.textContent = 'HEMOS CAMBIADO'

        
//***Seleccion de Elementos Mediante Class (Varios Elementos con la Misma Clase) */

        //Modficar a los Elementos de forma Independiente 
                // Si se desa hacer seleccion de varios elementos con la misma clase de CSS
                let para5 = document.querySelectorAll('.para')

                //Si se desea modificar de forma independiente se debera agregar el Index segun el orden de los elementos
                para5[0].style.color = 'red'
                para5[1].style.color = 'green'
                para5[2].style.color = 'blue'

        //Modificar todos los elementos haciendo uso de metodo map
                // Se debera hacer uso del spread operartor para que el node list se comporte como un array
                let para6 = [...document.querySelectorAll('.para')]
                para6.map(p=>p.style.color='grey')

