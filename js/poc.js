$(function(){

   console.log('jQuery');



// PRESS START BUTTON
		
   $( "body" ).keypress(function() {

  		$(".pressStart").hide();
  		$( "nav" ).addClass("menu");
      $(".title").addClass("startPress");
      $( "#title" ).toggleClass( "col-lg-offset-3 col-lg-offset-1" ) 

      




	});

});


// Petit script pour connaitre la date de la dernière modification :D
lastUpdate();

function lastUpdate() {
    var date = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = date;
}