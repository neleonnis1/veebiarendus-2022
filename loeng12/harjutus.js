const matk1 = {
    nimi: 'Taevaskoja kanuumatk',
    osalejaid: 10,
    algusKuupaev: '01.07.2023'
    vabuKohti: 10,
    kirjeldus: "Lähme islandile ja vaatame vulkaane. Põhjalikult"
    pildiUrl: "./Hills.png"
}

const matk2 = {
    nimi: 'Kanuumatk ümber Saaremaa',
    osalejaid: 6,
    algusKuupaev: '02.07.2023'
    vabuKohti: 6,
    kirjeldus: "Kolme päevaga ümber Saaremaa. Tormiga ei sõida."
}

const matk3 = {...matk2}
const matkad = [matk1, matk2, matk3]

function valjastaMatk(retk) {
    let valjund = `
        <div>
            <img class="matka_pilt" src="${retk.pildiUrl}" >
            <h2>${retk.nimi}</h2>
            <div>${retk.nimi}</div>
        </div>
        `
    console.log(valjund)
    document.getElementById('valjund').innerHTML += valjund
}

for (let i = 0; i< matkad.length; i++) {
    valjastaMatk(matkad[i])
}
valjastaMatk(matk1)
valjastaMatk(matk2)
valjastaMatk(matk3)