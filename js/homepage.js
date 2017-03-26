$(function(){

  $(document).ready(function() {

    var home = $(".homepage");

    var PressTwice = false;
    var i;
    var PressNumber=0;

    function afficherNouvellePage (pageACacher,pageAMontrer) {

      $(pageACacher).removeAttr("id", "actualEcran").hide();
      $(pageAMontrer).css( "display", "block" ).attr("actualEcran");
    }

  // COMPTEUR KeyPRESS

    $(document).on('keyup', function(e) {

      PressNumber++;

      if (PressNumber===1) {
        preeeStartbuttonPressed();
      }

      if (PressNumber>=2){
        
        PressTwice = true;
        if (e.keyCode == 13 || e.keyCode == 32) { // enter or space

          var itemActif = $("#menu").find(".selected").attr('data-slide'); 
          afficherNouvellePage(home,itemActif);
        }
      }
    });

    // PRESS START BUTTON

    function preeeStartbuttonPressed() {

      $(".pressStart").hide();
      $( "nav" ).addClass("menu");
      $( "#title" ).removeClass( "col-lg-offset-3" ).addClass( "col-lg-offset-1" );
    }

    $("body").click(function() {
        preeeStartbuttonPressed();
    });

    // SELECTION MENU ANIMATION ^^

    $(menuLi).mouseover(function() {

      $(menuLi).removeClass("selected");
      $(this).toggleClass("selected");
    });


    $(document).on('keyup', function(e) {

        if(e.which == 38){ // up arrow
            var selected_item = $('.selected');

            if(typeof selected_item.prev()[0] !== 'undefined') {
                selected_item.removeClass('selected').prev().addClass('selected');
                

            }
        } else if (e.which == 40) { // down arrow
            var selected_item = $('.selected');

            if (typeof selected_item.next()[0] !== 'undefined') {
                selected_item.removeClass('selected').next().addClass('selected');       
            }
        } 
    });

  // SYSTHEME DE NAVIGATION PAR ECRAN

  //$('.homepage').css({'height': hauteurFenetre});

    $('.lauch').click(function(e) {

      e.preventDefault(); //Empêche le navigateur d'intéteprêter le fait que ce soit un vrai lien (ne le suit pas !)

      var pageSelected = $(this).attr('data-slide');
      afficherNouvellePage(home,pageSelected);
      
    });

    $('.return').click(function(e) {

        e.preventDefault();
        var slide = $(this).attr('data-slide');
        
        afficherNouvellePage(slide,home);

    });
  });
});

// FIN JQUERY