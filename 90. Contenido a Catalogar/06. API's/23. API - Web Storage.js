let form = document.getElementById('form') 
let keys = document.getElementById('keys')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    // let person = {
    //     name: 'Ernesto',
    //     apellido: 'Portillo',
    //     correo: 'ernestoportillo170@gmail.com'
    // }

    // sessionStorage.setItem('name', 'Portillo')
    // sessionStorage.setItem('person', JSON.stringify(person))

    sessionStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML += `<option>${form.key.value}</option>`

    form.reset()
})

keys.addEventListener('change', ()=>{
    document.getElementById('infoValue').textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

