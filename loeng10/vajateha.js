const ylesanded = [
    'Pese hambad ja nägu',
    'Tee kassile pai',
    'Prae muna',
    'Loe lehte',
    'Jaluta koera',
]

function lisaValjund(tekst) {
    const valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += `
    <div>
        <input type="checkbox">
        ${tekst}
    </div>
    `
}

function lisaYlesanne() {
    const ylesanneHTML = document.getElementById('sisend')
    ylesanded.push(ylesanneHTML.value)
    document.getElementById('valjund').innerHTML = ''
    valjastaVarvid()
}

function valjastaVarvid() {
    for(let index=0; index < ylesanded.length; index++) {
    lisaValjund(ylesanded[index])
    }
}

valjastaVarvid()