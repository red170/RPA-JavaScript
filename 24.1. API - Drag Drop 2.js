const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

 //dataTrasfer

    //setData: Establece la informacion a compartir
    //getData: Establece la informacion a obtener

pendingTasks.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setData('text/plain', e.target.id)
})

pendingTasks.addEventListener('drag', (e)=>{
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e)=>{
    e.target.classList.remove('active')
})

finishedTasks.addEventListener('dragover', (e)=>{
    e.preventDefault()
})

finishedTasks.addEventListener('drop',(e)=>{
    e.preventDefault()
    let element = document.getElementById(e.dataTransfer.getData('text'))
   element.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})