$(function(){

   console.log('jQuery est prêt !');


// PRESS START BUTTON

	var $menu = $("<p class="menu"></p>"),
		
  
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