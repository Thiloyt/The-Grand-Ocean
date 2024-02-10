// This code assumes you have a Google Maps API key and have loaded the necessary libraries.
  
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
    zoom: 10
    });
    }