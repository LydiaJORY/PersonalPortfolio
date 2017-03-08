$(function(){

   console.log('jQuery');

   var hauteurFenetre   = $( window ).height();
   var millieuFenetre = hauteurFenetre / 2;
   var pressStart = false;


  // SYSTHEME DE NAVIGATION PAR ECRAN

  //$('.homepage').css({'height': hauteurFenetre});

  
  $('.page').click(function() {

    $('.homepage').hide();
    $(".pageContact").css("display", "block");
    
    
  });


  // PRESS START BUTTON
  		
    $( "body" ).keypress(function() {

      pressStart = true;

      if(pressStart) {

        $(".pressStart").hide();
        $( "nav" ).addClass("menu");
        $(".title").addClass("startPress");
        $( "#title" ).addClass( "col-lg-offset-1" ) 
      }
  	});
  });


// VANILLA JS
// Petit script pour connaitre la date de la dernière modification :D
lastUpdate();

function lastUpdate() {
    var date = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = date;
}