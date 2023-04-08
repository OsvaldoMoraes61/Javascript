let num = [5,8,4,7,6]
num.push(2)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]} `)

//indexOf()
let pos = num.indexOf(5)
if( pos == -1 ){
    console.log(`O nrº não foi encontrado`)
} else {
    console.log(`O valor solicitado está na posição ${pos}`)
}