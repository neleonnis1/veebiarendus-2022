const kassid = [
    "./cat2.jpg",
    "./cat2.jpg",
    "./cat2.jpg",
    "./cat2.jpg",
]

function lisaPilt(pildiUrl) {
    const valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += `
        <div> 
        <img src="${pildiUrl}">
        </div>
    `
}

function valjastaKassid() {
    lisaPilt(kassid[0])
    lisaPilt(kassid[1])
    lisaPilt(kassid[2])
    lisaPilt(kassid[3])
}

valjastaKassid()