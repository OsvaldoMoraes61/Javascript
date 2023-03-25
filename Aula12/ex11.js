var idade = 65.5

if (idade <= 12) {
    console.log('Menor de Idade')
    console.log('Não vota')
} else {
    if (idade < 18 || idade >= 65){
        console.log('Voto Opcional')
        console.log(`O Voto é opcional para ${idade} anos de idade`)
    } else if (idade >= 18 && idade < 65 ){
        console.log(`O Voto é obrigatório para que tem ${idade} anos de idade`)

        }


}