/* Author: Ben van de Sande - Pomodoro */

var pmdro = {
  
  'initGmap': function() {
    var latlng    = new google.maps.LatLng(51.44571601895113, 5.458906888961792);
    var myOptions = {
      zoom: 14,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map       = new google.maps.Map(document.getElementById("gmap"), myOptions);
    var marker    = new google.maps.Marker({
      position: latlng, 
      map: map,
      title:"Pomodoro @ Strijp-CS"
    });
    
    var contentString = '<div class="infoWindow">'+
        '<h2>Pomodoro @ Strijp-CS</h2>'+
        '<p>Gebouw SWA, verdieping 2<br>'+
        'Strijp-S, Glaslaan 2<br>'+
        '5616 LW, Eindhoven 2<br>'+
        '</p>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }
  
};