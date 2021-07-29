function calcular(){

    var n1 = document.getElementById('txtn1')
    if (n1.value.length == 0){
        window.alert('[ERRO] Digite Um Numero')
    } else {
        var valor = Number(n1.value)
        var res = document.getElementById('seltab')
        res.innerHTML = ''
        for(var c = 1; c <= 10; c ++){
            var item = document.createElement('option')
            item.text = `${valor} X ${c} = ${valor*c}`
            res.appendChild(item)}
    

        
        
    }

}