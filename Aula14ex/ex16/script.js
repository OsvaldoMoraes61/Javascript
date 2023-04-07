function contar() {
  let n1 = document.getElementById("ini")
  let n2 = document.getElementById("fim")
  let n3 = document.getElementById("pas")
  let res = document.getElementById("res")
 
  if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
    alert("Digite um nr., faltam dados ")
  } else {
    let ni = Number(n1.value)
    let nf = Number(n2.value)
    let np = Number(n3.value)
    res.innerHTML = ''
    if (np == 0) {
      alert("O Passo não pode ser ZERO, então Passo=1")
      np = 1
    }

    if (ni < nf) {
      for (var nr = ni; nr <= nf; nr += np) {
        res.innerHTML += ` ${nr} \u{1F449}`
      }
    } else {
          for (let nr = ni; nr >= nf; nr -= np) {
        res.innerHTML += ` ${nr} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
