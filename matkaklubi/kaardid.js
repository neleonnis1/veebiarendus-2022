const uudised = [
	{
		pildiUrl: "./Pildid/Munamagi_05.jpg",
		pealkiri: 'Matk Munamäe tippu ja tagasi',
		sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit! Ipsa est tempora id error sapiente saepe veritatis suscipit beatae incidunt, possimus dolorem, impedit illo hic, cumque corporis soluta laudantium?',
	},
	{
		pildiUrl: "./Pildid/Munamagi_05.jpg",
		pealkiri: 'Kõpu tuletorni jalgsimatk ja piknik',
		sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit! Ipsa est tempora id error sapiente saepe veritatis suscipit beatae incidunt, possimus dolorem, impedit illo hic, cumque corporis soluta laudantium?',
	},
	{
		pildiUrl: "./Pildid/Munamagi_05.jpg",
		pealkiri: 'Jalgsimatk Oandust Iklani',
		sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit! Ipsa est tempora id error sapiente saepe veritatis suscipit beatae incidunt, possimus dolorem, impedit illo hic, cumque corporis soluta laudantium?',
	},
	{
		pildiUrl: "./Pildid/Munamagi_05.jpg",
		pealkiri: 'Viru raba räätsamatk ja linnuvaatlus',
		sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit! Ipsa est tempora id error sapiente saepe veritatis suscipit beatae incidunt, possimus dolorem, impedit illo hic, cumque corporis soluta laudantium?',
	},
	{
		pildiUrl: "./Pildid/Munamagi_05.jpg",
		pealkiri: 'Marimetsa raba räätsamatk',
		sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit! Ipsa est tempora id error sapiente saepe veritatis suscipit beatae incidunt, possimus dolorem, impedit illo hic, cumque corporis soluta laudantium?',
	},
	{
		pildiUrl: "./Pildid/Munamagi_05.jpg",
		pealkiri: 'Laulasmaa raba räätsamatk',
		sisu: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit! Ipsa est tempora id error sapiente saepe veritatis suscipit beatae incidunt, possimus dolorem, impedit illo hic, cumque corporis soluta laudantium?',
	},
]

function valjastaUudis(uudis) {
    document.getElementById('sisu').innerHTML += `
			<div class="uudis-konteiner">
				<div>
					<img class="pilt" src="${uudis.pildiUrl}">
				</div>
				<div>
					<h2>${uudis.pealkiri}</h2>
				</div>
				<div class="sisu">
					${uudis.sisu}
				</div>
				<button class="tutvu">Registreeru</button>
			</div>
		`
}

for (i=0; i<uudised.length; i++) {
	valjastaUudis(uudised[i])
}






