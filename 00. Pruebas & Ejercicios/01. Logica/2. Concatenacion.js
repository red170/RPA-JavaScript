// 1. Crear un saludo personalizado:
    // Crea un programa que pida al usuario su nombre y luego muestre un mensaje de saludo personalizado concatenando su nombre con una frase.
        let nombren = prompt('ingresa tu nombre')
        alert(` hola ${nombren} que tal estas`)

// 2. Formar una oración completa:
    // Crea tres variables: una para el sujeto, otra para el verbo y otra para el complemento. Concatena estas variables para formar una oración con sentido.
        let sujeto = 'oscar'
        let verbo = 'juega'
        let predicado = 'en el parque'

        console.log(sujeto + ' ' + verbo + ' ' + predicado)

// 3. Crear una dirección de correo electrónico:
    // Pide al usuario su nombre y apellido y crea una dirección de correo electrónico estándar concatenando ambas partes y agregando un dominio.
        let nombre = prompt('ingresa tu nombre')
        let apellido = prompt('ingresa tu apellido')

        alert(`tu nuevo correo electronico es: ${nombre}${apellido}@HOTMAIL.COM`)

// 4. Mostrar la fecha completa:
    // Utiliza las propiedades de la fecha (día, mes, año) y concaténalas para mostrar la fecha actual en un formato específico (por ejemplo, "Hoy es 25 de diciembre de 2023").
        let fecha = new Date()
        let dia = fecha.getDate()
        let mes = fecha.getMonth() + 1
        let año = fecha.getFullYear()

        console.log(`Hoy es ${dia}/${mes}/${año}`)

// 5. Crear un enlace web dinámico:
    // Crea un enlace web concatenando la URL base con una variable que contenga el nombre de una página específica.
        let urlBase = "https://www.ejemplo.com/";
        let nombrePagina = "contacto";

        let enlaceCompleto = urlBase + nombrePagina;

        console.log("El enlace completo es: " + enlaceCompleto);