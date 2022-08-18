let maxRandom = document.getElementById('maxRandom')
let minRandom = document.getElementById('minRandom')
let res = document.getElementById('res')
let displayTxt = document.getElementById('displayTxt')
let inputTask = document.getElementById('inputTask')
let lista = document.getElementById('lista')

if(localStorage.getItem('maxRandom') != ''){
    maxRandom.value = localStorage.getItem('maxRandom')
}else{
    minRandom.value = 0
}

if(localStorage.getItem('taskAtual') != ''){
    displayTxt.innerHTML = localStorage.getItem('taskAtual')
    lista.innerHTML = localStorage.getItem('taskAtual')

}else{
    displayTxt.innerHTML = 'Adicione uma task'
    lista.innerHTML = "Adicione uma task"

}

if(localStorage.getItem('numAle') != ''){
    res.innerHTML = localStorage.getItem('numAle')
}else{
    res.innerHTML = '0'
}

function random() {
    res.innerHTML = Math.floor(Math.random(minRandom, maxRandom+1) * 10)
    localStorage.setItem('numAle', res.innerHTML)

}
function saveMax(){
    localStorage.setItem('maxRandom', maxRandom.value)
}
function enterText(){
    displayTxt.innerHTML = inputTask.value
    localStorage.setItem('taskAtual', inputTask.value)
    inputTask.value = ''
    lista.innerHTML = localStorage.getItem('taskAtual')


}