$(function(){

   console.log('jQuery');

   var hauteurFenetre   = $( window ).height();
   var millieuFenetre = hauteurFenetre / 2;


  // SYSTHEME DE NAVIGATION PAR ECRAN

  $('.contact').hide();
  $('.homepage').css({'height': hauteurFenetre});




  // PRESS START BUTTON
  		
     $( "body" ).keypress(function() {

    		$(".pressStart").hide();
    		$( "nav" ).addClass("menu");
        $(".title").addClass("startPress");
        $( "#title" ).toggleClass( "col-lg-offset-3 col-lg-offset-1" ) 


  	});
  });




// VANILLA JS
// Petit script pour connaitre la date de la dernière modification :D
lastUpdate();

function lastUpdate() {
    var date = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = date;
}