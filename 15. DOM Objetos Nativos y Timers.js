//***Objeto WIndow (Es el objeto global del cual se desprenden todos los demas)*/

    //?Enviar un Mensaje
    // alert('Hola')

    //?Solicitar Info de Forma Basica
    // let Nombre = prompt('ingresa tu nombre ...')
    // console.log(Nombre)

    //?Ventana de Confirmacion Basica
    // if (confirm('Deseas Seguir?')){
    //     console.log('Accedio')
    // }
    // else{
    //     console.log('Declino')
    // }

//***Objeto Console (Es el objeto que contiene la consola del navegador) */

    //?Imprimir en la Consola del Navegador
    // console.log('Hola!!')

    //?Imprimir en la Consola (Diferencia desconocida)
    // console.dir('Hi!!')

    //?Imprimir Mensajes de Error dentro de la Consola
    // console.error('error!')

    //?Imprimir Datos con Formato Tabla en la Consola
    // let array = [1,2,3,4,5,6,7,8]
    // let persona = {
    //     nombre: 'oscar',
    //     apellido: 'portillo',
    //     correo: 'ernestoportillo170@gmail.com'
    // }

    // console.table(array)
    // console.table(persona)

//***Objeto Location (Es el objeto que contiene la barra de direcciones) */

    //?Imprimir la Ruta de la Pagina Actual
    // console.log(location.href)

    //?Imprimir el Protocolo si es HTTPS o HTTP
    // console.log(location.protocol)

    //?Imprimir el Dominio Principal
    // console.log(location.host)

    //?Imprimir el Resto de la Ubicacion (Sub Directorios)
    // console.log(location.pathname)

    //?Pasar Parametros
    // console.log(location.hash='hola')

    //?Recargar la Pagina
    // location.reload()

    let boton = document.getElementById('boton')
    // boton.addEventListener('click',()=>{
    //     location.reload()
    // })

    //?Abrir un Enlace
    // location.href = 'https://google.com'

//***Objeto History */

    //?Mostar el historial de la sesion Actual
    // console.log(history)

    //?Retrocede a la pagina anterior segun Historial
    // history.back()

    //?Avanza a la pagina siguiente segun Historial
    // history.forward()

    //?Se va a una pagina especifica segun el indice que esta tenga en el historial (se debe colocar el indice como numero en el parametro)
    // history.go()

//***Objeto Date */

    //!Obtencion de Fecha/Hora

        //?Obtencion de Dia
        const today = new Date();
        const day = today.getDay();
        console.log(day); // Output: el día de la semana (0-6), donde 0 es domingo y 6 es sábado

        //?Obtencion del Mes

            //Numero
            const today1 = new Date();
            const month = today1.getMonth() + 1; // +1 porque getMonth devuelve 0-11
            console.log(month); // Output: el mes del año (1-12)

            //String
            const months9 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            const today9 = new Date();
            const month9 = months9[today9.getMonth()];
            console.log(month9); // Output: el mes como cadena (Enero, Febrero, etc.)

        //?Obtencion del Año
        const today2 = new Date();
        const year = today2.getFullYear();
        console.log(year); // Output: el año completo (2023, 2024, etc.)

        //?Obtener una Fecha Completa
        const today3 = new Date();
        const day1 = today3.getDate();
        const month1 = today3.getMonth() + 1;
        const year1 = today3.getFullYear();
        console.log(`${day1}/${month1}/${year1}`); // Output: día/mes/año (dd/mm/aaaa)

        //?Obtencion de Hora

            //Rango 24 Horas
            const today4 = new Date();
            const hour = today4.getHours();
            console.log(hour); // Output: la hora (0-23)

            //Rango AM/PM
            const today10 = new Date();
            let hour01 = today10.getHours();
            let ampm;
            if (hour01 < 12) {
            ampm = 'AM';
            } else {
            ampm = 'PM';
            if (hour01 > 12) {
                hour01 -= 12;
            }
            }
            console.log(`${hour01} ${ampm}`); // Output: hora AM/PM (12:00 PM, 3:00 PM, etc.)

        //?Obtencion de Minutos
        const today5 = new Date();
        const minutes = today5.getMinutes();
        console.log(minutes); // Output: los minutos (0-59)

        //?Obtencion de Segundos
        const today6 = new Date();
        const seconds = today6.getSeconds();
        console.log(seconds); // Output: los segundos (0-59)

        //?Obtencion de Hora Completas
        const today7 = new Date();
        const hour1 = today7.getHours();
        const minutes1 = today7.getMinutes();
        const seconds1 = today7.getSeconds();
        console.log(`${hour1}:${minutes1}:${seconds1}`); // Output: hora:minutos:segundos (HH:MM:SS)

//***Timers */

//?Uso de setTimeOut (Ejecutar algo cuando se cumpla el tiempo de espera solo una ejecucion)

// boton.addEventListener('click',()=>{
//     setTimeout(()=>{
//         saludo()
//     },2000)
// })

const saludo = ()=>{
    console.log('hola')
}
//?Uso de ClearTimeout (Detener el conteo y la posterior ejecucion)

// let timeout = setTimeout(()=>{
//     console.log('Saludo')
// },3000)

// boton.addEventListener('click', ()=>{
//     clearTimeout(timeout)
// })

//? Uso de setIntervals (El codigo se ejecutara en bucle segun el intervalo de tiempo especificado)

let intervalo = setInterval(saludo,2000)