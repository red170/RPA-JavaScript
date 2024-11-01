let form = document.getElementById('form')
let input = document.getElementById('input')
let boton = document.getElementById('button')
let boton2 = document.getElementById('button2')
let galeria = document.getElementById('gallery')
let des =document.getElementById('des')
let blo = document.getElementById('des')

// *** Imprimir los Datos del Evento de toda la Ventana
// antes del 'addEventListener' se puede colocar el Window o no ya que por defecto se carga la informacion de la Ventana
addEventListener('click',(e)=>{
    console.log(e)
})

//*** Impirmir los Datos del Evento de un Elemento especifico
// Ya con el elemento almacenado en una variable escuchamos el evento a ejecutar y dentro de los parametros ingresamos un valor cualquiera y en base eso lo podemos imprimir para obtener todos los datos y poder trabajar con el
input.addEventListener('keyup',(e)=>{
    console.log(e)
})

//*** Devolver Informacion sobre la Tecla Presionada
//Dentro de todos los  esta la propiedad 'key' la cual nos devuelve el valor de cada tecla y asi podemos devover el consola que valor tiene cada tecla
input.addEventListener('click',(e)=>{
    console.log(e.key)
})

//*** Como Recorrer o Ingresar a las Propiedades dentro de un Conjunto de Propiedades de un Nodo/Elemento 
// Se hace con la nomenclatura del punto y asi se va accediendo a cada una de las subpropiedades (en este caso estamos imprimiento el valor de la propiedad nodeValue)
input.addEventListener('keyup',(e)=>{
    console.log(e.explicitOriginalTarget.attributes[0].nodeValue)
})

//*** Extraer datos de Target (Porpiedad mas usada)
boton.addEventListener('click', function(e){
    console.log(e.target)
})

// *** Accionar o ejecutar una accion sobre un Elemento Hijo dentro de un Elemento Padre
galeria.addEventListener('click', function(e){
    console.log(e.target.textContent)
    // e.target.style.backgroundColor='red' //Agregar Estilo con CSS desde JS
    e.target.classList.add('red') //Agregar Estilo agregandole una clase de CSS a un elemento que no tenia dicha clase

})

//*** Evitar que un elemeto ejecute la funcinalidad que trae por defecto
form.addEventListener('click', function(e){
    e.preventDefault()
})

//***Agregar/Quitar conteido a un input desde la pulsacion de un Boton */
boton.addEventListener('click',function(e){
    input.value = 'Oscar Ernesto Lopez Portillo'
})
boton2.addEventListener('click',function(e){
    input.value = ''
})

//------------------------------------------------------------------------------------------------------------------------------------
