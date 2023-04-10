function parimpar(num) {
    if(num%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}

console.log(parimpar(9))

/* função 2 */
function soma(n1 = 0, n2 = 0){
    return n1+n2
}

console.log( soma(7,3) )
console.log( soma(3) )

/* função 3 = atribuir uma função à uma variável */
let v = function (x) {
            return x*2
        }

console.log( v(7) )

/* função 4 = chamada normal e chamada recursiva */
function fatorial(n) { //normal
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log( fatorial(9) )

function fatorial1(n) {
    if(n==1){
        return 1
    } else {
        return n * fatorial1(n-1) //chamada recursiva
    }
}
console.log( fatorial1(9) )
