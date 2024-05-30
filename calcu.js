const displayDelete = document.querySelector(".displayDelete");
let display1 = document.querySelector("input");
const operador = document.querySelectorAll("#operador");
let resultado = document.querySelector(".boton-resultado");
const numero = document.querySelectorAll(".boton-numero");
const conteiner = document.querySelector(".conteiner");
const borrar = document.querySelector(".boton-delete");
let porcentaje = document.querySelector("#porcentaje");
let historial = document.querySelector(".historial");
let valorHistorial = [];
let localSto = localStorage;
var datos;
let boton = document.querySelector('button');
let valor1 = 0;
let valor2 = 0;

// valorHistorial = valorHistorial.push(display1.value)
//  console.log(valorHistorial)

for (let i = 0; i < numero.length; i++) {
  numero[i].addEventListener("click", () => {
    // console.log(numero[i].value)
    display1.value += numero[i].value;
  });
}
//  conteiner.addEventListener("click", (e) => {
//   if (
//     e.target &&
//     e.target.id === "operador"
//     // e.target && e.target.id ==='porcentaje'
//   ) {
//     display1.value += e.target.value;
//   }
//   console.log()
  
// });


displayDelete.addEventListener("click", () => {
  display1.value = "";
});

borrar.addEventListener("click", () => {
  return (display1.value = display1.value.slice(0, -1));
});
let esPorcentaje = false;
porcentaje.addEventListener("click", () => {
  valor1 = display1.value;
  display1.value = "";
  console.log(valor1);
  
  esPorcentaje = true;
});


resultado.addEventListener("click", (opera) => {
  valor2 = display1.value;
  if (esPorcentaje) opera = eval((valor1 * valor2) / 100);
  else opera = eval(valor2);
  
  display1.value = opera;
  // localSto.setItem("operacion", datos );
  
  // valorHistorial.push(localSto.operacion);
  // console.log(valorHistorial);
  
  esPorcentaje = false;
});


conteiner.addEventListener("click", (e) => {
  
  
    if (
      e.target &&
      e.target.id === "operador"
      // e.target && e.target.id ==='porcentaje'
    ) {
      display1.value += e.target.value;
    }
  datos = display1.value 
  localSto.setItem("operacion", datos );
  
  valorHistorial.push(localSto.operacion);
  console.log(valorHistorial);
    // console.log(e.target.value)
    console.log(datos)
  });
  
  boton.addEventListener('click', () =>{
    historial.innerHTML = `${valorHistorial}`
  })

