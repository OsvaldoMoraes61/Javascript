function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let mens = 'digite um valor para Número' 

    if (num.value.length == 0 ) {
        alert(mens )
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = mens
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
    }

}