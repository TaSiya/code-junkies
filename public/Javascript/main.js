function menuOpen() {
    document.getElementById("mySidebar").style.display = "block";

}
function menuClose() {
    document.getElementById("mySidebar").style.display = "none";

}

mapboxgl.accessToken = 'pk.eyJ1IjoibmFjaG93b2xmIiwiYSI6ImNqbnJmY3lnaTAyYWIza3M1bmhtMzk5aWYifQ.QlRy-XrxNlgif9rp-LE2RQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [18.63539, 	-33.88830],
    zoom: 15
})

function pointOnCircle(angle) {
    return {
        "type": "Point",
        "coordinates": [
            18.63539,           
            -33.88830

        ]
    };
}

map.on('load', function () {
    map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: "markers",
          type: "symbol",
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features:[{"type":"Feature","geometry":{"type":"Point","coordinates":["18.63539","-33.88830"]}}]}
          },
          layout: {
            "icon-image": "custom-marker",
          }
        });
      });

});