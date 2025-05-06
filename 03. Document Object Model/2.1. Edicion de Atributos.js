let title = document.getElementById('title')
let nombre = document.getElementById('name')

//*** Lectura y Modificacion de Atributos */
// Nos permite leer y modificar los atributos de un elemento HTML

        // Obtener el valor de un atributo der un elemento del HTML
            /// Despues de haber almacenado el nodo en una variable se porcede a realizar la comprobacion colocando el Atributo/Propiedad del elemento y nos devolvera el valor
            console.log(nombre.getAttribute('id'))

        // Cambiar el Valor de un Atribut/Agregar un Atrubuto a un elemento HTML
            /// Dentro de los parametros colocamos el atributo a modificar seguido del nuevo valor a asignar
            nombre.setAttribute('type','text')
        
        // Eliminar un Atributo de un elemento HTML
            /// Dentro de los parametros colocamos el atributo a eliminar
            nombre.removeAttribute('type')

//***Atributos de Input */
// Nos permite establecer atributos a un elemento input HTML

    //className
        // Nos permite establecer una clase a un elemento HTML
        nombre.className = 'input'

    //value
        // Nos permite establecer un valor a un elemento HTML
        nombre.value = 'Juan'
    
    //type
        // Nos permite establecer el tipo de input
        nombre.type = 'text'

    //accept
        // Nos permite establecer el tipo de archivo que se puede seleccionar
        nombre.accept = 'image/png'

    //form
        // Nos permite establecer el formulario al que pertenece un input
        nombre.form = 'form'

    //minLength
        // Nos permite establecer la longitud minima de un input
        nombre.minLength = 3

    //maxLength
        // Nos permite establecer la longitud maxima de un input
        nombre.maxLength = 10

    //placeholder
        // Nos permite establecer un texto de ayuda en un input
        nombre.placeholder = 'Nombre'

    //readOnly
        // Nos permite establecer un input como solo lectura
        nombre.readOnly = false

    //required
        // Nos permite establecer un input como requerido
        nombre.required = true

//***Atributos Globales */
// Nos permite establecer atributos a un elemento HTML

    //contentEditable
        // Nos permite editar el contenido de un elemento HTML
        title.contentEditable = true

    //dir
        // Nos permite establecer la direccion del texto
        // ltr: left to right
        // rtl: right to left
        title.dir = 'rtl'
    
    //hidden
        // Nos permite ocultar un elemento HTML
        // title.hidden = true

    //tabIndex
        // Nos permite establecer el orden de tabulacion de los elementos HTML
        title.tabIndex = 1

    //title
        // Nos permite establecer un titulo a un elemento HTML (aparece al pasar el mouse por encima)
        title.title = 'Titulo de la pagina'
        
//***Atributos Style */
// Nos permite establecer estilos a un elemento HTML

    //backgroundColor
        // Nos permite establecer el color de fondo de un elemento HTML
        title.style.backgroundColor = 'red'
    
    //color
        // Nos permite establecer el color del texto de un elemento HTML
        title.style.color = 'white'

    //display
        // Nos permite establecer la visibilidad de un elemento HTML
        // title.style.display = 'none'

    //fontSize
        // Nos permite establecer el tamaño de la fuente de un elemento HTML
        title.style.fontSize = '50px'

    //Padding
        // Nos permite establecer el espaciado interno de un elemento HTML
        title.style.padding = '10px'

//***Atributos Directos */
// Se hace uso de las propiedades de cada nodo para poder acceder directamente a los valores de ellas ya sea para visualizarlas o para operarlas
    console.log(title.id)
    console.log(title.textContent)
    console.log(title.innerHTML.length)

    console.log(nombre.value)
    console.log(nombre.value.length)
