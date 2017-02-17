$(function(){

   console.log('jQuery est prêt !');


// PRESS START BUTTON
  
   $( "body" ).keypress(function() {
  		$( ".menu" ).append("Travaux");
	});

});


// Petit script pour connaitre la date de la dernière modification :D
lastUpdate();

function lastUpdate() {
    var date = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = date;
}