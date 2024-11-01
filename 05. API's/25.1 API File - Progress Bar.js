let fileImput = document.getElementById('file')
let progress = document.getElementById('progress')
let root = document.documentElement

//*Crear una Barra de Progreso en Base a la Subida de un Archivo
// fileImput.addEventListener('change', (e)=>{
//     let file = e.target.files[0]
//     let fileReader = new FileReader()
//     fileReader.readAsDataURL(file)

//     fileReader.addEventListener('progress', (e)=>{
//         progress.style.width = Number.parseInt(e.loaded*100/e.total ) + '%'
//     })

//     fileReader.addEventListener('loadend',()=>{
//         progress.style.width = '100%'
//     })
// })


//*Crear una Barra de Progreso en Base a la Subida de varios Archivos
fileImput.addEventListener('change', (e)=>{
    let file = e.target.files[0]
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e)=>{
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded*100/e.total ) + '%')
    })

    fileReader.addEventListener('loadend',()=>{
        root.style.setProperty('--bar-width', '100%')
    })
})