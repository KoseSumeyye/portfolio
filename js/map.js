var map = L.map('map').setView([51.219502153952725, 4.418175097185725], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.219502153952725, 4.418175097185725]).addTo(map);
