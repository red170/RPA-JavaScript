let input = document.getElementById("input");

//Keydown
// Se ejecuta cuando se presiona una tecla
input.addEventListener("keydown", (e) => {
  console.log("Tecla Presionada: " + e.key);
});

//Keypress
// Se ejecuta cuando se presiona una tecla y se suelta
input.addEventListener("keypress", (e) => {
  console.log("Tecla Presionada: " + e.key + ' Y se mantuvo presionada');
});

//Keyup
// Se ejecuta cuando se suelta una tecla
input.addEventListener("keyup", (e) => {
  console.log("Tecla Soltada: " + e.key);
});

