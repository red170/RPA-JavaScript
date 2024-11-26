console.log(innerWidth)

const mql = matchMedia('(min-width:400px)')

const applyMatchMedia = mql =>{
    mql.matches ?
        document.body.style.backgroundColor = 'red'
        :
        document.body.style.backgroundColor = 'royalblue'
}

addEventListener('DOMContentLoaded', ()=> applyMatchMedia(mql)) 
addEventListener('resize', ()=> applyMatchMedia(mql)) 
applyMatchMedia(mql)