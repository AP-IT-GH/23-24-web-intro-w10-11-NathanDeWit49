
let map = L.map("apMap").setView([51.23009, 4.41616], 17);
L.tileLayer("https://tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let bounds = [
  [51.23041, 4.4155],
  [51.22991, 4.41675],
];
L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);
let coffeeIcon = L.icon({
  iconUrl: "./assets/coffee-icon",
  shadowUrl: "./assets/coffee-icon-shadow.png",
  iconSize: [19, 47],
  shadowSize: [25, 32],
  iconAnchor: [11, 47],
  shadowAnchor: [2, 31],
  popupAnchor: [-2, -38],
});
let marker = L.marker([51.23009, 4.41616], { icon: coffeeIcon }).addTo(map);







