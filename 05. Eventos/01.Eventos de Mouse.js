const click = document.getElementById('click');
const doubleClick = document.getElementById('dbclick');    
const mouseMove = document.getElementById('mousemove');
const mouseOver = document.getElementById('mouseover');
const mouseOut = document.getElementById('mouseout');
const mouseEnter = document.getElementById('mouseenter');
const mouseLeave = document.getElementById('mouseleave');
const mouseDown = document.getElementById('mousedown');
const mouseUp = document.getElementById('mouseup');
const contextMenu = document.getElementById('contextmenu');

// Eventos de Click
//Este evento se activa cuando el usuario hace click en el elemento
click.addEventListener('click', () => {
    alert('Click');
});

//Evento de Doble Click
//Este evento se activa cuando el usuario hace doble click en el elemento
doubleClick.addEventListener('dblclick', () => {
    alert('Doble Click');
});

//Evento de Mouse Over
//Este evento se activa cuando el mouse entra en el elemento
mouseOver.addEventListener('mouseover', () => {
    alert('Mouse Over');
});

//Evento de Mouse Out
//Este evento se activa cuando el mouse sale del elemento
mouseOut.addEventListener('mouseout', () => {
    alert('Mouse Out');
});

//Evento Context Menu
//Este evento se activa cuando el usuario hace click derecho en el elemento 
contextMenu.addEventListener('contextmenu', (e) => {
    e.preventDefault(); //Previene el menu contextual del navegador
    alert('Context Menu');
});

//Evento de Mouse Enter
//Este evento se activa cuando el mouse entra en el elemento
mouseEnter.addEventListener('mouseenter', () => {
    alert('Mouse Enter');
});

//Evento de Mouse Leave
//Este evento se activa cuando el mouse sale del elemento
mouseLeave.addEventListener('mouseleave', () => {
    alert('Mouse Leave');
});

//Evento de Mouse Up
//Este evento se activa cuando el usuario suelta el boton del mouse 
mouseUp.addEventListener('mouseup', () => {
    alert('Mouse Up');
});

//Evento de Mouse Down
//Este evento se activa cuando el usuario presiona el boton del mouse
mouseDown.addEventListener('mousedown', () => {
    alert('Mouse Down');
});

//Evento de Mouse Move
//Este evento se activa cuando el usuario mueve el mouse sobre el elemento
mouseMove.addEventListener('mousemove', (e) => {
    alert(`Mouse X: ${e.clientX} Mouse Y: ${e.clientY}`);
});