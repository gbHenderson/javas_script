let nuns = [] 
function adicionar(){
    var num = document.getElementById('num')

    if (num.value > 100 || num.value < 1){
        window.alert('Digite um valor válido!')}    

    else{    
        nuns.push (Number(num.value))
        var tabela = document.getElementById('tab')
        var add = document.createElement('option')
        for(var c = 0; c < nuns.length; c++){add.text = `Valor ${nuns[c]} adicionado.`}
        tabela.appendChild(add)}

num.value= ''
num.focus()}



function finalizado(){
    var soma = 0
    
    if(nuns.length == 0){window.alert('Digite valores antes de finalizar!')}

    else{
    for(c = 0; c < nuns.length; c++){
        soma += nuns[c]}

    var p1 = document.getElementsByTagName('p')[2]
    p1.innerHTML = `Ao todo, temos <strong>${nuns.length} números cadastrados</strong>`

    var p2 = document.getElementsByTagName('p')[3]
    p2.innerHTML = `O <strong>maior valor</strong> informado foi de <strong>${Math.max.apply(null, nuns)}</strong>`

    var p3 = document.getElementsByTagName('p')[4]
    p3.innerHTML = `O <strong>menor valor</strong> informado foi de <strong>${Math.min.apply(null, nuns)}</strong>`
   
    var p4 = document.getElementsByTagName('p')[5]
    p4.innerHTML = `<strong>Somando</strong> todos os valores, temos <strong>${soma}</strong>`
    
    var p5 = document.getElementsByTagName('p')[6]
    p5.innerHTML = `A <strong>média</strong> dos valores digitados é <strong>${soma/nuns.length}</strong>`}}