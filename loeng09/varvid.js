function valjastaRuutJaKuup(x) {
    console.log(x * x)
    console.log(x * x * x)
}

valjastaRuutJaKuup(100)
valjastaRuutJaKuup(25)
valjastaRuutJaKuup(3)


function valjasta(tekst) {
    let valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += '<div>' + tekst + '</div>'

}

function arvaVarv () {

    let varv = document.getElementById('sisend').value

    let minuLemmikvarv = 'kollane'
    let minuLemmikvarv2 = 'punane'

    if (varv === minuLemmikvarv) {
        valjasta('Tubli, arvasid ära minu esimese lemmikvärvi!')
    } else if (varv === minuLemmikvarv2) {
        valjasta('Tubli, arvasid ära minu teise lemmikvärvi!')
    } else {
        valjasta('See ei ole minu lemmikvärv, aga tubli oled ikka!')
    }

}

