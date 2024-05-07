/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
let map = L.map('apMap').setView([51.23009, 4.41616], 17);

let koffieIcon = L.icon({
    iconUrl: '../assets/coffee-icon.png'
    shadowUrl: '../assets/coffee-icon-shadow.png'

    iconAnchor: [26.38]
    shadowAnchor: [0,0]
    popupAnchor:  [-3, -76]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([51.23009, 4.41616]), {icon: koffieIcon}.addTo(map);









