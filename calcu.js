
let display1 = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let esp = ['+','-','*','/','%']
let salida = '';


const calculate = (btnValue) =>{

  if(btnValue === '='&& salida !==''){
    
    salida = eval(salida.replace("%","/100"))
    console.log('siii')
  }
else if(btnValue === 'AC'){
  salida = ''
}
else if(btnValue === 'Del'){
  salida = salida.toString().slice(0, -1)
}
else{
  if(salida === ''&& esp.includes(btnValue))return;
  salida+= btnValue;
}
  display1.value = salida
    
    
}
buttons.forEach((button) =>
{
  button.addEventListener('click', (e) => calculate(e.target.dataset.value))
}) 

