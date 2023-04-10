let amigo = {
    nome: 'Osvaldo',
    sexo: 'M',
    idade: '61',
    peso: 68.30,
    engordar(p=0) {
        console.log('engordou')
        this.peso += p
    }
}

amigo.engordar(2,5)
console.log(`${amigo.nome} pesa agora ${amigo.peso}kg`)