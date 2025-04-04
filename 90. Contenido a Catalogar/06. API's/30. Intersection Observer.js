const boxes = document.querySelectorAll('.box')

const callback = (entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log(entry.target.id, 'Is Intersecting')
        }
    })
}

const options = {
    threshold: 0.25
}

const observer = new IntersectionObserver(callback, options)

boxes.forEach(element => observer.observe(element))