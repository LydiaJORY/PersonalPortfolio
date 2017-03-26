$(function(){

	var elementSelec = 1;

	var projets = [
					"CMJN",
					"technicolors",
					"la bas si j'y suis",
					"UX samsung",
					"charles Denner"];

	var nbTravaux= projets.length;
	var firstProjet = $(".bloc:first-child");
	var lastProject = $(".bloc:last-child");

	// On met tous le bordel de selection un par un ici
	var nav = function lol(){

		var selected = $('.select');

	  	console.log("le projet selectioné est le " + elementSelec);

	  	if (elementSelec > 4){

	  		elementSelec=1;
	  		
	  		lastProject.removeClass("select");
	  		firstProjet.addClass("select");	
	  	}
	  	else {
	  		elementSelec++;
	  		selected.next().addClass("select").prev().removeClass("select");
	  		//console.log("la classe select est dans la div :" + );
	  	}
	}


	$(".bloc").on('click', nav);

	$("body").keypress(function(e) {

    if (e.which == 13) {
    	nav();
    }
    
	});


	/*var i;
  	for (i=0; i < nbTravaux; i++) {

  		var projetActif = projets[i];
  		//console.log(projets[i]);
  	}*/



   
});