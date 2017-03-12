$(function(){

  // var hauteurFenetre   = $( window ).height();
  // var millieuFenetre = hauteurFenetre / 2;

   var startButtonPressed = false;
   var clickOnPage = false;
   var actualEcran; // méfie toi :/ A mon avis quand tu auras des ancres et tout ça va te porter prejudice que le actual ecran soit par défaut sur homepage...

   console.log(startButtonPressed, clickOnPage);


   
  // PRESS START BUTTON

  function buttonPressed() {

      $(".pressStart").hide();
      $( "nav" ).addClass("menu");
      $(".title").addClass("startPress");
      $(".homepage").addClass("actualEcran");
      $( "#title" ).removeClass( "col-lg-offset-3" ).addClass( "col-lg-offset-1" );
  }

  $( "body" ).keypress(function() {
    startButtonPressed = true;
    buttonPressed();

  });

   $( "body" ).click(function() {
    clickOnPage= true;
    buttonPressed()
  });


          

 // SYSTHEME DE NAVIGATION PAR ECRAN

//$('.homepage').css({'height': hauteurFenetre});

  
  $('.lauch').click(function() {

    $('.actualEcran').hide();

    var slide = $(this).attr('data-slide');
    //$(slide).load("contact.html");  
    $(slide).css( "display", "block" );
    console.log ("affichez moi cette page contact u___u")
        
  });

  $('.return').click(function() {
      var slide = $(this).attr('data-slide');
      $(slide).css( "display", "none" );
      $(".homepage").addClass("actualEcran");
      $(".homepage").css( "display", "block" );
      console.log("retourner sur la homepage");

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





