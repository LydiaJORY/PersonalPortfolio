$(function(){

  $(document).ready(function() {

    var i,
        PressNumber=0,
        nbItemMenu= menuLi.length,
        elementSelec = 1,
        firstItemMenu = $("#menu li:first-child"),
        lastItemMenu = $("#menu li:last-child");

//TRAVAUX
    var projetSelecNb = 1,
        projetsBloc = $(".travaux__Bloc"),
        projetsBlocParent = $(".travaux__item"),
        FirstprojetsBlocParent = $(".travaux__item:first-child"),
        LastprojetsBlocParent = $(".travaux__item:last-child"),
        nbTravaux = projetsBloc.length;
    

    // Afficher les pages 
    function afficherNouvellePage (pageACacher,pageAMontrer) {

      $(pageACacher).removeClass("actualEcran").hide();
      $(pageAMontrer).show().addClass("actualEcran");

      if ($(travaux).hasClass("actualEcran")) {
    
        $(document).on('keyup', function(e) {

          if(e.which == 39){ // >> right
          
            var selected_projet = $('.travaux__selected');

            if(projetSelecNb < nbTravaux){

              projetSelecNb++;
              selected_projet.removeClass('travaux__selected').parent().next().children().addClass('travaux__selected');
            }   

            else if (projetSelecNb >= nbTravaux){
              projetSelecNb = 1;
              selected_projet.removeClass("travaux__selected");
              FirstprojetsBlocParent.children().addClass("travaux__selected"); 
            }       
          }

          if(e.which == 37){ // << left
          
            var selected_projet = $('.travaux__selected');

            if(projetSelecNb <= nbTravaux && projetSelecNb !== 1){

              projetSelecNb--;
              selected_projet.removeClass('travaux__selected').parent().prev().children().addClass('travaux__selected');
            }   

            else if (projetSelecNb === 1){

              projetSelecNb = nbTravaux;
              selected_projet.removeClass("travaux__selected");
              $(".end").addClass("travaux__selected");
            }       
          }
        });
      } 
    }


  // COMPTEUR KeyPRESS & entrer dans une page

    if ($(homepage).hasClass("actualEcran")) {

      $(document).on('keyup', function(e) {

        PressNumber++;

        if (PressNumber===1) {
          preeeStartbuttonPressed();
        }

        if (PressNumber>=2){
          
          if (e.keyCode == 13 || e.keyCode == 32) { // enter or space

            var itemActif = $("#menu").find(".selected").attr('data-slide'); 
            afficherNouvellePage(homepage,itemActif);
          }
        }
      });
    }

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


    if ($(homepage).hasClass("actualEcran")) {

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

    $('.lauch').click(function(e) {

      e.preventDefault(); //Empêche le navigateur d'intéteprêter le fait que ce soit un vrai lien (ne le suit pas !)
      var pageSelected = $(this).attr('data-slide');
      afficherNouvellePage(homepage,pageSelected);
    });

    $('.return').click(function(e) {

        e.preventDefault();
        var slide = $(this).attr('data-slide');
        afficherNouvellePage(slide,homepage);
    });
  });
});

