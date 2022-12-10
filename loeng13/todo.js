const ylesanne1 = {
    kirjeldus: 'Hommikuvoimlemine',
    tehtud: true,
    olulisus: 1,
}

const ylesanne2 = {
    kirjeldus: 'Praadida mune',
    tehtud: false,
    olulisus: 2,
}

const ylesanne3 = {
    kirjeldus: 'Jaluta koera',
    tehtud: false,
    olulisus: 3,
}

const ylesanded = [ylesanne1, ylesanne2, ylesanne3]

function valmistaTahekesed(olulisus) {
    let tagasta = ''
    for (let i = 1; i <= olulisus; i++) {
        tagasta += `
            <span class="material-symbols-outlined">
                star
            </span>
        `
    }
    return tagasta
}



function naitaYlesanne(ylesanne) {
    const valjund = document.getElementById('valjund')
    let isChecked = ""
    if(ylesanne.tehtud) {
    isChecked = "checked=true"
}

const tahekesed = valmistaTahekesed(ylesanne.olulisus)



    valjund.innerHTML += `
    <div class="kirjeldus">
        <input type="checkbox" onclick="MuudaCheckboxi(${index})" ${isChecked}>
        ${ylesanne.kirjeldus}
        ${tahekesed}
    </div>
`
}

function MuudaCheckboxi() {
    console.log("Muutsin Checkboxi")
    ylesanded [index].tehtud = !ylesanded[index].tehtud
    naitaKoguValjund()
}

function lisaYlesanne() {
    const nimetus = document.getElementById('uus_ylesanne').value
    const olulisus = parseInt (document.getElementById('olulisus').value)
    console.log(nimetus, olulisus)

    const uusYlesanne = {
        kirjeldus: nimetus,
        tehtud: false,
        olulisus
    }

    console.log(uusYlesanne)

    ylesanded.push(uusYlesanne)
    console.log(ylesanded)

}

naitaKoguValjund()


function naitaKoguValjund() {
    document.getElementById('valjund').innerHTML = ''
    let i = 0
    for (y of ylesanded) {
        naitaYlesanne(y, i)
        i += 1
    }
}

naitaKoguValjund()


