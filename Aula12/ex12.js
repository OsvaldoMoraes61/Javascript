var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} h.`)

if (hora >=0 && hora <= 6) {
    console.log(`São ${hora}h => Madrugada`)
} else if (hora >= 7 && hora <= 11) {
    console.log(`São ${hora}h => Bom dia`)
} else if (hora >= 12 && hora <= 17) {
    console.log(`São ${hora}h => Boa tarde`)
} else {
    console.log(`São ${hora}h => Boa noite`)
}