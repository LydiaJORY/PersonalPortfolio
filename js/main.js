$(function(){

  // var hauteurFenetre   = $( window ).height();
  // var millieuFenetre = hauteurFenetre / 2;

   var startButtonPressed = false;
   var clickOnPage = false;



  // PRESS START BUTTON
  		
  $( "body" ).keypress(function() {
    startButtonPressed = true;
  });

 $( "body" ).click(function() {
    clickOnPage= true;
  });


  if ( (startButtonPressed = true) || (clickOnPage = true) ) {

        $(".pressStart").hide();
        $( "nav" ).addClass("menu");
        $(".title").addClass("startPress");
        $( "#title" ).addClass( "col-lg-offset-1" );
        console.log("coucou");
     
  }


 // SYSTHEME DE NAVIGATION PAR ECRAN

  //$('.homepage').css({'height': hauteurFenetre});

  
  $('.page').click(function() {

    $('.homepage').hide();
    $(".contact").css({"display": "block"});
    
  });

// FIN JQUERY
});


// VANILLA JS
// Petit script pour connaitre la date de la dernière modification :D
lastUpdate();

function lastUpdate() {
    var date = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = date;
}