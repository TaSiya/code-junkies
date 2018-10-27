function menuOpen() {
    document.getElementById("mySidebar").style.display = "block";

}
function menuClose() {
    document.getElementById("mySidebar").style.display = "none";

}

mapboxgl.accessToken = 'pk.eyJ1IjoibmFjaG93b2xmIiwiYSI6ImNqbnJmY3lnaTAyYWIza3M1bmhtMzk5aWYifQ.QlRy-XrxNlgif9rp-LE2RQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v10'
});