'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const mewo = document.getElementById('mewo')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const fundo = document.getElementById('fundo')
const forma8 = document.getElementById('forma8')

function mudarCor(){
    forma1.classList.toggle('amarelo')
}
function mudarForma(){
    forma2.classList.toggle('circulo')
}
function girar(){
    forma3.classList.toggle('girar')
}
function oddEye(){
    forma4.classList.toggle('oec')
}
function mudarTexto(){

    if(mewo.textContent === 'meow.'){
        mewo.textContent = '(Esperando algo acontecer?)'
        forma5.classList.add('mewoimg')
    }else{
        mewo.textContent = 'meow.'
        forma5.classList.remove('mewoimg')
    }
}
function jumpscare(){
    forma6.classList.add('endgame')
}
function nevar(){
    fundo.classList.toggle('neve')
}
function mover(){
    forma8.classList.toggle('mover')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', girar)
forma4.addEventListener('click', oddEye)
forma5.addEventListener('click', mudarTexto)
forma6.addEventListener('click', jumpscare)
forma7.addEventListener('click', nevar)
forma8.addEventListener('click', mover)
