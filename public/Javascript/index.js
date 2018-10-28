document.addEventListener("DOMContentLoaded", function () {
    var x = document.querySelector("#demo");
    let lat = document.querySelector('#lat');
    let long = document.querySelector('#long');
    let address = document.querySelector('.address');
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        console.log(position);
        
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(lat, long);

 if (geocoder) {
    geocoder.geocode({ 'latLng': latLng}, function (results, status) {
       if (status == google.maps.GeocoderStatus.OK) {
         console.log(results[0].formatted_address); 
         address.innerHTML = results[0].formatted_address;
         $('#address').html('Address:'+results[0].formatted_address);
       }
       else {
        $('#address').html('Geocoding failed: '+status);
        console.log("Geocoding failed: " + status);
       }
    }); //geocoder.geocode()
  }      
    }
    getLocation();
});