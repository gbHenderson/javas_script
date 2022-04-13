function contar(){
    var ini = window.document.getElementById('in')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('pas')
    var res = window.document.getElementsByTagName('p')[3]
   
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert("ERRO! Está faltando DADOS!")
        res.innerHTML = 'Impossível contar!'}

    else{res.innerHTML = "Contando:<br>"}
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}👉`}
                res.innerHTML += "🏁"}

        else{
            for(var c = i; c >= f; c-=p){
                res.innerHTML += `${c}👉`}
                res.innerHTML += "🏁"}
    }