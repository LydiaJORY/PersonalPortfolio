$(function(){

  $(document).ready(function() {

   
    var PressTwice = false;
    var i;
    var PressNumber=0;

    function afficherNouvellePage (pageACacher,pageAMontrer) {

      $(pageACacher).removeClass("actualEcran");
      $(pageACacher).hide();
      $(pageAMontrer).css( "display", "block" );
      $(pageAMontrer).addClass("actualEcran");
    }

  // COMPTEUR

    $(document).on('keyup', function(e) {

      PressNumber++;

      if (PressNumber===1) {
        preeeStartbuttonPressed();

      }

      if (PressNumber>=2){
        PressTwice = true;

        if (e.keyCode == 13 || e.keyCode == 32) { // enter or space

          var itemActif = $("#menu").find(".selected").attr('data-slide'); 
          var homepage = $("#homepage");

          afficherNouvellePage(homepage,itemActif);
        }
      }
    });

    $(actualEcran).show();

    // PRESS START BUTTON

    function preeeStartbuttonPressed() {

      $(".pressStart").hide();
      $( "nav" ).addClass("menu");
      $( "#title" ).removeClass( "col-lg-offset-3" ).addClass( "col-lg-offset-1" );
    }

    $(homepage).click(function() {
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
    });

  // SYSTHEME DE NAVIGATION PAR ECRAN

  //$('.homepage').css({'height': hauteurFenetre});

  $('.lauch').click(function(e) {

    e.preventDefault(); //Empêche le navigateur d'intéteprêter le fait que ce soit un vrai lien (ne le suit pas !)

    $(homepage).removeClass("actualEcran");
    $(homepage).hide();

    var pageSelected = $(this).attr('data-slide');
    //$(slide).load("contact.html", function(){
    //});  
    $(pageSelected).css( "display", "block" );
    $(pageSelected).addClass("actualEcran");
  });



  $('.return').click(function(e) {

      e.preventDefault();
      var slide = $(this).attr('data-slide');
      $(slide).css( "display", "none" );
      $(slide).removeClass("actualEcran");

      $(homepage).addClass("actualEcran");
      $(homepage).css( "display", "block" );

  });

  /*var i = $("li").length;
    var li = $("li");
    var textNode;
    var m;

    var classMenu = $(".menu");

    var menu = [
      "Travaux",
      "Infos",
      "Contact"
      "Contact"
    ];

    var menuCategories = {"Pokedex":0,
      "Pokemon":1,
      "Bag":2,
      "Options":3
    }

    for (m = 0; m < li.length; m++ ) {

      textNode = document.createTextNode(menu[m]);
      li[m].appendChild(textNode);
      li[m].tabIndex=1;
    }


    console.log(i);*/
  });

});

// FIN JQUERY