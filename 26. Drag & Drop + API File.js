let fileImput = document.getElementById('file')
let dropZoone = document.getElementById('drop-zone')

dropZoone.addEventListener('click', ()=> fileImput.click())

dropZoone.addEventListener('dragover', (e)=>{
    e.preventDefault()
    dropZoone.classList.add('drop-zone--active')
})

dropZoone.addEventListener('dragleave', (e)=>{
    e.preventDefault()
    dropZoone.classList.remove('drop-zone--active')
})


dropZoone.addEventListener('drop', (e)=>{
    e.preventDefault()
    fileImput.files = e.dataTransfer.files
    console.log(fileImput.files)
})

dropZoone.addEventListener('change', (e)=>{
    console.log(fileImput.files)
})