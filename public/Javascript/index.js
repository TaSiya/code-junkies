document.addEventListener("DOMContentLoaded", function () {
    var x = document.querySelector("#demo");
    let lat = document.querySelector('#lat');
    let long = document.querySelector('#long');
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        lat.innerHTML = position.coords.latitude;
        long.innerHTML = position.coords.longitude;
    }
    getLocation();
});