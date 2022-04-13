function tabuada() {
    var nume = window.document.getElementById('num')
    var tab = document.getElementById('seltab')

    if(nume.value.length == 0){
        window.alert('Digite um número!')}
    
    else{
        var num = Number(nume.value)
        var c = 1
        tab.innerHTML = ''
        for(c; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} X ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)}
        }
}