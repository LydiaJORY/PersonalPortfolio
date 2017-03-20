$(function(){

    // var hauteurFenetre   = $( window ).height();
    // var millieuFenetre = hauteurFenetre / 2;

    var startButtonPressed = false;
    var clickOnPage = false;
    var actualEcran; // méfie toi :/ A mon avis quand tu auras des ancres et tout ça va te porter prejudice que le actual ecran soit par défaut sur homepage...



    // PRESS START BUTTON

    function preeeStartbuttonPressed() {

      $(".pressStart").hide();
      $( "nav" ).addClass("menu");
      $(".title").addClass("startPress");
      $(".homepage").addClass("actualEcran");
      $( "#title" ).removeClass( "col-lg-offset-3" ).addClass( "col-lg-offset-1" );
    }


    $( "body" ).keypress(function() {
        startButtonPressed = true;
        preeeStartbuttonPressed();
    });

    $( "body" ).click(function() {
        clickOnPage= true;
        preeeStartbuttonPressed();
    });


    // SELECTION MENU ANIMATION ^^

    var $currSelect = $( ".selected" );

    $( "li" ).mouseover(function() {
        $("*").removeClass("selected");
        $(this).toggleClass("selected");
        
    });
  

      $(document).on('keyup', function(e) {

          if(e.which == 38){ // up arrow
              var selected_item = $('.selected');

              if(typeof selected_item.prev()[0] !== 'undefined') {
                  selected_item.prev().addClass('selected');
                  selected_item.removeClass('selected');

              }
          } else if (e.which == 40) { // down arrow
              var selected_item = $('.selected');

              if (typeof selected_item.next()[0] !== 'undefined') {
                  selected_item.next().addClass('selected');
                  selected_item.removeClass('selected');
              }
          }

          if (e.keyCode == 13 || e.keyCode == 32) { // enter or space
            
              
          }
      });




 // SYSTHEME DE NAVIGATION PAR ECRAN

//$('.homepage').css({'height': hauteurFenetre});

  
  $('.lauch').click(function() {

    $(".homepage").removeClass("actualEcran");
    $(".homepage").hide();


    var slide = $(this).attr('data-slide');
    $(slide).css( "display", "block" );
    $(slide).addClass("actualEcran");

  });

  $('.return').click(function() {
      var slide = $(this).attr('data-slide');
      $(slide).css( "display", "none" );
      $(slide).addClass("actualEcran");

      $(".homepage").addClass("actualEcran");
      $(".homepage").css( "display", "block" );


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





