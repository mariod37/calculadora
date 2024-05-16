const displayDelete = document.querySelector('.displayDelete') 
const display   = document.querySelector('input')
const operador  = document.querySelectorAll('#operador')
const resultado = document.querySelector('.btn-resultado')
const numero    = document.querySelectorAll('.btn-numero')
const conteiner = document.querySelector('.conteiner')
const borrar = document.querySelector('.btn-delete')
let num1 = display.value
let num2 = display.value


// console.log(operador)

for (let i = 0; i < numero.length; i++){
    numero[i].addEventListener('click', ()=>{
    // console.log(numero[i].value)
    display.value+=numero[i].value
    })
}
    conteiner.addEventListener('click',(e) =>{
            if (e.target && e.target.id === 'operador'){
            display.value += e.target.value
    }
            console.log(e.target.value)
})

    resultado.addEventListener('click', function(){
    
            display.value = eval(display.value)
})

    displayDelete.addEventListener('click',() =>{
    display.value = ''
})

    borrar.addEventListener('click', () =>{
            
                return display.value = display.value.slice(0,-1)
})







