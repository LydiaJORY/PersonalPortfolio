$(function(){

   console.log('jQuery');



// PRESS START BUTTON

	
		
   $( "body" ).keypress(function() {
  		$(".pressStart").hide();
  		console.log('test');
  		$( "nav" ).show();


	});

});


// Petit script pour connaitre la date de la dernière modification :D
lastUpdate();

function lastUpdate() {
    var date = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = date;
}