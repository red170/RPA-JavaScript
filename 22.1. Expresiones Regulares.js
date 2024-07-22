let text = document.getElementById('text').textContent

let regEx = /lorem/gi
let regEx2 = RegExp('lorem', 'gi')
let regEx3 = RegExp('/lorem/', 'gi')

console.log(regEx.test(text))