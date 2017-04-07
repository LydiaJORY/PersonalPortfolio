$(function(){

  $(document).ready(function() {

    var home = $(".homepage");

    var i;
    var PressNumber=0;

    var nbItemMenu= menuLi.length;
    var elementSelec = 1;
    var firstItemMenu = $("#menu li:first-child");
    var lastItemMenu = $("#menu li:last-child");

//TRAVAUX
    var projetSelecNb = 1;
  

    var projetsBloc = $(".travaux__Bloc");
    var projetsBlocParent = $(".travaux__item");

    var FirstprojetsBlocParent = $(".travaux__item:first-child");
    var LastprojetsBlocParent = $(".travaux__item:last-child");


    var nbTravaux = projetsBloc.length;

  console.log(nbTravaux);
    

    // Afficher les pages 
    function afficherNouvellePage (pageACacher,pageAMontrer) {

      $(pageACacher).removeClass("actualEcran").hide();
      $(pageAMontrer).css( "display", "block" ).addClass("actualEcran");

      if ($(travaux).hasClass("actualEcran")) {
    
        $(document).on('keyup', function(e) {

          if(e.which == 39){ // >> right
          
            var selected_projet = $('.travaux__selected');

            if(projetSelecNb < nbTravaux){

              projetSelecNb++;
              selected_projet.removeClass('travaux__selected').parent(projetsBlocParent).next().children(projetsBloc).addClass('travaux__selected');
            }   

            else if (projetSelecNb >= nbTravaux){
              projetSelecNb = 1;
              selected_projet.removeClass("travaux__selected");
              FirstprojetsBlocParent.children(projetsBloc).addClass("travaux__selected"); 

            }       

          }

          if(e.which == 37){ // << left
          
            var selected_projet = $('.travaux__selected');

            if(projetSelecNb <= nbTravaux && projetSelecNb !== 1){

              projetSelecNb--;
              selected_projet.removeClass('travaux__selected').parent(projetsBlocParent).prev().children(projetsBloc).addClass('travaux__selected');
            }   

            else if (projetSelecNb === 1){

              projetSelecNb = nbTravaux;
              selected_projet.removeClass("travaux__selected");
              $(".end").addClass("travaux__selected");
              //LastprojetsBlocParent.children().addClass("travaux__selected");
            }       

          }
        });
      } 
    }


  

  // COMPTEUR KeyPRESS

    $(document).on('keyup', function(e) {

      PressNumber++;

      if (PressNumber===1) {
        preeeStartbuttonPressed();
      }

      if (PressNumber>=2){
        
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


    if ($(home).hasClass("actualEcran")) {

      $(document).on('keyup', function(e) {

        if(e.which == 38){ // up arrow

          var selected_item = $('.selected');
          
          if(elementSelec <= nbItemMenu && elementSelec !== 1) {

            elementSelec--;
            selected_item.removeClass('selected').prev().addClass('selected');

          } else if (elementSelec === 1) {
              elementSelec = nbItemMenu;
              firstItemMenu.removeClass("selected");
              lastItemMenu.addClass("selected");
          }

        } else if (e.which == 40) { // down arrow
            
          var selected_item = $('.selected');
        
          if(elementSelec < nbItemMenu){
            elementSelec++;
            selected_item.removeClass('selected').next().addClass('selected');
          }          

          else {
            elementSelec = 1;
            lastItemMenu.removeClass("selected");
            firstItemMenu.addClass("selected"); 

          }
        } 
      });
    }

    // SYSTHEME DE NAVIGATION PAR ECRAN

    //$('.homepage').css({'height': hauteurFenetre});

      $('.lauch').click(function(e) {

        e.preventDefault(); //Empêche le navigateur d'intéteprêter le fait que ce soit un vrai lien (ne le suit pas !)

        var pageSelected = $(this).attr('data-slide');
        afficherNouvellePage(home,pageSelected);

        // select a projet :3 CHOOSE A CHARACTER
        
    });

    $('.return').click(function(e) {

        e.preventDefault();
        var slide = $(this).attr('data-slide');
        
        afficherNouvellePage(slide,home);

    });


  });
});

