function valjastaRuut(x) {
    console.log(x * x)
    console.log(Math.pow(x, 3))
}

valjastaRuutjaKuup(100)
valjastaRuutjaKuup(25)
valjastaRuutjaKuup(5)

function valjasta(tekst) {
    let valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += '<div>' + tekst + '</div>'
}

let varv = prompt('Sisesta minu lemmikvarv')

let minuLemmikvarv = 'must'

if (varv === minuLemmikvarv) {
    ')
}