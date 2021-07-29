function calcular(){
    

var n1 = document.getElementById('txtn1')
var n2 = document.getElementById('txtn2')
var n3 = document.getElementById('txtn3')
var res = document.getElementById('res')
if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
    window.alert('[ERRO] Falta De Dados')
} else if( n2.value < n1.value || n3.value <= 0) {
    window.alert('[ERRO]Valores Impossiveis!')
} else {
    res.innerHTML = 'Contando:'
    var inicio = Number(n1.value)
    var fim = Number(n2.value)
    var passo = Number(n3.value)
    
    for (var c = inicio; c <=fim; c+=passo ){
    res.innerHTML += `${c} `
}}















}


















