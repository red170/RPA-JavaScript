let form = document.getElementById('form')
let characters = document.getElementById('characters')
let table = document.getElementById('table')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    getdata(characters.children[characters.selectedIndex].value)
})

let getdata = (id) =>{
    let xhr

    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    if (id == undefined){
        xhr.open('GET', '16. AJAX HTTPS Request 2.php')
        xhr.addEventListener('load',(data)=>{
            let dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            let fragment = document.createDocumentFragment()

            for (let heroes of dataJSON){
                let option = document.createElement('OPTION')
                option.setAttribute('value',heroes.ID)
                option.textContent = heroes.Name
                fragment.appendChild(option)
            }

            characters.appendChild(fragment)
        })

       
    }
    else{

        xhr.open('GET', `php.php?id=${id}`)
        xhr.addEventListener('load',(data)=>{
            let dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            let fragment = document.createDocumentFragment()

            for (let heroe of dataJSON){
                let row = document.createElement('tr')

                let dataName = document.createElement('td')
                let dataAlignment  = document.createElement('td')
                let dataHometown  = document.createElement('td')
                let dataGender = document.createElement('td')
                let dataFighting = document.createElement('td')

                dataName.textContent = heroe.Name
                dataAlignment.textContent = heroe.Alignment
                dataHometown.textContent = heroe.Hometown
                dataGender.textContent = heroe.Gender
                dataFighting.textContent = heroe.Fighting_Skills

                row.append(dataName)
                row.append(dataAlignment)
                row.append(dataHometown)
                row.append(dataGender)
                row.append(dataFighting)

                fragment.appendChild(row)
            }
            if(table.children[1]){
            table.removeChild(table.children[1])
            }
            table.appendChild(fragment)
        })


    }

    xhr.send()
}

getdata()