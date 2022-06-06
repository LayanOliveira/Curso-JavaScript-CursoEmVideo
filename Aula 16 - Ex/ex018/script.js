var num = document.getElementById("txtn")
var adi = document.getElementById('selad')
var res = document.getElementById('res')
var valores = [ ]

function isNumero (n){
    if(Number(n)>= 1 && Number(n) <= 100){return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!=-1){
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){ 
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        adi.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores){ 
            soma += valores[pos]
            if (valores[pos]> maior) 
            maior = valores[pos]
            if (valores[pos] < menor) 
            menor = valores[pos]    
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao Todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p/> O maior valor informado foi ${maior}.`
        res.innerHTML += `<p/> O menor valor informado foi ${menor}.`
        res.innerHTML += `<p/> Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p/> A média dos valores digitados é ${media}.`
    }

}







// function adicionar() {
//     if (isNumero(num.value) && !inLista(num.value, valores)){ 
//         let n = Number(num.value)
//         var item = document.createElement('option')
//         item.text = (`Valor ${n} adicionado.`)
//         item.value = `adi${n}`
//         valores.push(n)
//         adi.appendChild(item)
//         } else {window.alert('Valor inválido ou já encontrado na lista')}}
    
// function finalizar() { 
//         res.innerHTML = `<br/> Ao todo, temos ${valores.length} número(s) cadastrado(s). `
//         let maior = Math.max.apply(null, valores)
//         res.innerHTML += `<p/> O maior valor informado foi ${maior}.`
//         let menor = Math.min.apply(null, valores)
//         res.innerHTML += `<p/> O menor valor informado foi ${menor}.`

//         let total =
//         res.innerHTML += `<p/> Somando todos os valores, temos ${total}.`
//         let media =
//         res.innerHTML += `<p/> A média dos valores digitados é ${media}.`
// }
