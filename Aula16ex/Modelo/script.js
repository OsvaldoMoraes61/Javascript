let num = document.querySelector('input#fnum')
let lista= document.querySelector('select#flista')
let res = document.querySelector('div#res')
let avalores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if( l.indexOf( Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if( isNumero(num.value) && !inLista(num.value, avalores)) {
        avalores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) 
        res.innerHTML = ''
    } else {
        alert('Valor Inválido ou já encontrado na lista')

    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if( avalores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = avalores.length
        let maior = avalores[0]
        let menor = avalores[0]
        let soma = 0
        let média = 0

        for(let pos in avalores) {
            soma += avalores[pos]
            if(avalores[pos] > maior) {
                maior = avalores[pos]
            } 
            if(avalores[pos] < menor) {
                menor = avalores[pos]
            }
        }
        média = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números inseridos</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>A média dos valores inseridos é de ${média} </p>`
        res.innerHTML += `<p>A soma de todos os valores é de ${soma}</p>`
    }
}
