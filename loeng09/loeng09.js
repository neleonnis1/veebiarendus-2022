let nimi = prompt('Sisesta enda nimi')
let taishaalikud = 'aeiouõäöü'
let nimiIKeeles = ''

console.log('Nimi on: ' + nimi + ' ja selles on ' + nimi.length + ' tähte')
console.log(`Nimi on: ${nimi} ja selles on ${nimi.length} tähte`)

for (let index = 0; index < nimi.length; index++) {
    if (taishaalikud.includes (nimi[index])) {
        console.log('i')
        nimiIKeeles = nimiIKeeles + 'i'
    } else {
        console.log(nimi[index])
        nimiIKeeles = nimiIKeeles += nimi[index]
    }  
}

if (nimi.length < 8) {
    console.log('Sul on ilus lühike nimi')
} else {
    console.log('Sul on ilus pikk nimi')
}

console.log('Nimi iii keeles:' + nimiIKeeles)

let valjundBlokk = document.getElementById('valjund')
valjundBlokk.innerHTML = '<h2> Sinu nimi iii keeles: ' + nimiIKeeles + '</h2>'