const button = document.getElementById('button')

button.addEventListener('click', ()=>{
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)

})

const options ={
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition =(position) =>{
    console.log(position)
    console.log(position.timestamp)

    function timestampToHumanTime(timestamp, timezoneOffset = 0) {
        // Crea un objeto Date a partir del timestamp
        const date = new Date(timestamp);
      
        // Aplica el offset de zona horaria si se proporciona
        date.setTime(date.getTime() + timezoneOffset * 60 * 1000);
      
        // Formatea la fecha y hora en un formato legible
        const options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short'
        };
        const formattedDate  = date.toLocaleString('es-ES', options)
        return formattedDate;
      }
      
      // Ejemplo de uso:
      const timestamp = position.timestamp; // Un timestamp de ejemplo
      const timezoneOffset = -300; // Offset para -5 horas (por ejemplo, EST)
      
      const humanTime = timestampToHumanTime(timestamp, timezoneOffset);
      console.log(humanTime); // Salida: 15/05/2023, 13:00 -05

}

const error = (error) => {console.log('error')}