const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

 //dataTrasfer

    //setData: Establece la informacion a compartir
    //getData: Establece la informacion a obtener



//**Dar Color a los Obejos Arrastrables */
pendingTasks.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setData('text/plain', e.target.id)
})

pendingTasks.addEventListener('drag', (e)=>{
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e)=>{
    e.target.classList.remove('active')
})

finishedTasks.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/plain', e.target.id)
 })
 
 finishedTasks.addEventListener('drag', (e)=>{
     e.target.classList.add('active')
 })
 
 finishedTasks.addEventListener('dragend', (e)=>{
     e.target.classList.remove('active')
 })


//**Establecer la Zona Destino de los Elementos Arrastrables (OBLIGATORIO)  */
finishedTasks.addEventListener('dragover', (e)=>{
    e.preventDefault()
})

pendingTasks.addEventListener('dragover', (e)=>{
    e.preventDefault()
})


//**Mover los elementos Arrastrables */
finishedTasks.addEventListener('drop',(e)=>{
    e.preventDefault()
    let element = document.getElementById(e.dataTransfer.getData('text'))
   element.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})

pendingTasks.addEventListener('drop',(e)=>{
    e.preventDefault()
    let element = document.getElementById(e.dataTransfer.getData('text'))
   element.classList.remove('active')
    pendingTasks.appendChild(finishedTasks.removeChild(element))
})