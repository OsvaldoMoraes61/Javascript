function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()

    var horas = 25

    msg.innerHTML = `Agora são ${horas} hora(s)`

    if (horas >=0 && horas <= 6) {
        //madrugada
        img.src = 'imagens/noite2.png'        
        // msg.innerHTML += ` => Madrugada`
        document.body.style.background = '#515515'
    } else if (horas >= 7 && horas <= 11) {
        //manhã
        img.src = 'imagens/manha.png'        
        // msg.innerHTML += ` => Bom diaaaaaa!`
        document.body.style.background = '#e2cd9f'

    } else if (horas >= 12 && horas <= 17) {
        //madrugada
        img.src = 'imagens/tarde.png'        
        // msg.innerHTML += ` => Boa tarde!`
        document.body.style.background = '#b9846f'
    } else if (horas >= 18 && horas <= 24) {
        //madrugada
        img.src = 'imagens/noite1.png'        
        // msg.innerHTML += ` => => Boa noite`
        document.body.style.background = '#515154'
    
    }    
}