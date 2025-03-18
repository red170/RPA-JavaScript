const buttonIMG = document.getElementById('button-img')
const buttonPDF = document.getElementById('button-pdf')

buttonIMG.addEventListener('click', () =>{
    fetch('/Resources/img.jpeg')
        .then(res => res.blob()) // Blob() Binary Long OBject
        .then(img =>{
            document.getElementById('img').src = URL.createObjectURL(img)
        })
})

buttonPDF.addEventListener('click', () =>{
    fetch('/Resources/pdf.pdf')
        .then(res => res.blob()) // Blob() Binary Long OBject
        .then(pdf =>{
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})