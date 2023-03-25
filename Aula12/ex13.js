var agora = new Date()
var diaSem = agora.getDay()
/*
 0 - Domingo
 1 - Segunda
 2 - Terça
 3 - Quarta
 4 - Quinta
 5 - Sexta
 6 - Sábado
*/

switch(diaSem) {
    case 0:
        console.log(`Domingo-feira [${diaSem}] `)
        break
    case 1: 
        console.log(`Segunda-feira [${diaSem}] `)
        break
    case 2: 
        console.log(`Terça-feira [${diaSem}] `)
        break
    case 3: 
        console.log(`Quarta-feira [${diaSem}] `)
        break
    case 4: 
        console.log(`Quinta-feira [${diaSem}] `)
        break
    case 5: 
        console.log(`Sexta-feira [${diaSem}] `)
        break
    case 6: 
        console.log(`Sábado-feira [${diaSem}] `)
        break
    default: 
        console.log(`[ERRO] - dia-feira inválido [${diaSem}] `)
        break
}