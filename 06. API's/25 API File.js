let fileImput = document.getElementById('file')
let images = document.getElementById('images')
let img = document.getElementById('img')
let text = document.getElementById('text')


//* Vaciar contenido de un Txt en un parrafo de HTML
// fileImput.addEventListener('change',(e)=> {
//     let file = e.target.files[0]
//     let filereader = new FileReader()

//     filereader.readAsText(file)
//     filereader.addEventListener('load', (e)=>{
//         text.textContent = e.target.result
//     })
// })


// *Vaciar una imagen en un espacio de Imagen en HTML
// fileImput.addEventListener('change',(e)=> {
//     let file = e.target.files[0]
//     let filereader = new FileReader()

//     filereader.readAsDataURL(file)
//     filereader.addEventListener('load', (e)=>{
//        img.setAttribute('src',e.target.result)
//     })
// })

// *Vaciar varias imagenes en un espacio de Imagen en HTML

fileImput.addEventListener('change',(e)=> {
    let files = e.target.files
    let fragment = document.createDocumentFragment()
   

    for(const file of files){
        let filereader = new FileReader()
        let img = document.createElement('IMG')
        filereader.readAsDataURL(file)
        filereader.addEventListener('load', (e)=>{
           img.setAttribute('src', e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})