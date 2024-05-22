const displayDelete = document.querySelector(".displayDelete");
let display1 = document.querySelector("input");
// const display2   = document.querySelector('display2')
const operador = document.querySelectorAll("#operador");
let resultado = document.querySelector(".btn-resultado");
const numero = document.querySelectorAll(".btn-numero");
const conteiner = document.querySelector(".conteiner");
const borrar = document.querySelector(".btn-delete");
let porcentaje = document.querySelector("#porcentaje");
// console.log(porcentaje.value)
// let resultado2 = document.querySelector('.btn-resultado')
let valor1 = 0;
let valor2 = 0;

// console.log(operador)

for (let i = 0; i < numero.length; i++) {
  numero[i].addEventListener("click", () => {
    // console.log(numero[i].value)
    display1.value += numero[i].value;
  });
}



conteiner.addEventListener("click", (e) => {
  if (
    e.target &&
    e.target.id === "operador"
    // e.target && e.target.id ==='porcentaje'
  ) {
    display1.value += e.target.value;
  }
  // console.log(e.target.value)
});

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
  esPorcentaje = true
});

resultado.addEventListener("click", (opera) => {
 valor2 = display1.value
  if(esPorcentaje){
  opera = eval((valor1 * valor2) / 100);
  }
  else{
    opera = eval(valor2)
  console.log(eval(valor2));
  display1.value = opera;
    esPorcentaje = false;
  }
})
