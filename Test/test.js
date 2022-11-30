function valjasta(tekst) {
    let valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += '<div>' + tekst + '</div>'
}

let auto = prompt('Arva, mis on minu lemmikauto?')
let lemmikauto = 'volvo'

if (auto === lemmikauto) {
    valjasta('Tubli!')
} else {
    valjasta('Vale!')
}

