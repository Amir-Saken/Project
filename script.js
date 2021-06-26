$(document).ready(function(){
    $('.coolMenu ul li').hover(
        function() {
            $(this).find('ul:first').slideDown();
        },
        function() {
            $(this).find('ul:first').slideUp('fast');
        }
    );
    $('.coolMenu li:has(ul)').find('a:first').append('»');
});
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.355494574167686, lng: -121.90912943659009 },
    zoom: 11,
  });
  var icon = {
    url: "https://image.flaticon.com/icons/png/512/37/37134.png",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
  };
  var marker = new google.maps.Marker({
    position: {lat: 37.406144176655445, lng: -122.01542047434214},
    map: map,
    icon: icon
  });
  var marker1 = new google.maps.Marker({
    position: {lat: 37.49365121713374, lng: -121.94480724881551},
    map: map,
    icon: icon
  });
  var marker2 = new google.maps.Marker({
    position: {lat: 37.41121152684959, lng: -122.07176501443091},
    map: map,
    icon: icon
  });
    map.addListener("click", (e) => {
      placeMarkerAndPanTo(e.latLng, map);
    });
  }

  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }
