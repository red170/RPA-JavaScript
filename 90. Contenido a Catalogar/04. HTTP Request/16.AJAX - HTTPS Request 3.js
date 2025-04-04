let form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    sendData(form)
})

const sendData = (data) =>{
    let xhr
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    } 
    else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    } 
    xhr.open('post', 'php.php')
    let formData = new FormData(data)
    xhr.send(formData)
}
