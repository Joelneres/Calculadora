"use strict";

var input = window.document.getElementById("input")
var number= window.document.querySelectorAll(".numeros div")
var operator = window.document.querySelectorAll(".operadores div")
var clear = document.getElementById("apagar")

let novoNumero = true;
let operador;
let numeroAnterior;

const operaçaoPendente = () => operator != undefined;

const calcular = () =>{
    if(operaçaoPendente()){
        const numeroAtual = parseFloat(input.textContent);
         novoNumero = true;
        if(operator == "+"){
            atualizarInput(numeroAnterior + numeroAtual)
        }else if (operator == '-'){
            atualizarInput(numeroAnterior - numeroAtual);
        }else if (operator == "*"){
            atualizarInput(numeroAnterior * numeroAtual);
        }else if (operator == "/"){
            atualizarInput(numeroAnterior / numeroAtual);
        }
    }
}

const atualizarInput = (texto) => {
    if(novoNumero){
        input.textContent = texto;
        novoNumero = false
    }else{
        input.textContent += texto;
    }
}

const inserirnumber = (evento) => atualizarInput(evento.target.textContent);
number.forEach(number => number.addEventListener("click",inserirnumber));

const selecionarOperador = (evento) =>{
    if(!novoNumero) {
        calcular()
        novoNumero = true;
        operator = evento.target.textContent;
        numeroAnterior = parseFloat(input.textContent);
        console.log(operator)
    }
}

operator.forEach(operator => operator.addEventListener("click",selecionarOperador));

const ativarIgual = () =>{
    calcular()
    operator = undefined;
}

document.getElementById('resultado').addEventListener('click',ativarIgual)

const limparDisplay = () =>{
    input.textContent = '';
}
clear.addEventListener('click',limparDisplay);