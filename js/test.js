$(function(){

	var elementSelec = 1;

	var projets = [
					"CMJN",
					"technicolors",
					"la bas si j'y suis",
					"UX samsung",
					"charles Denner"];

	var nbTravaux= projets.length;


	$("div").on('click', function(e) {

	  	
	  	var selected = $('.bloc.select');
	  	var firstProjet = $(".bloc:first-child");

	  	console.log("le projet selectioné est le " + elementSelec);

	  	if (elementSelec > 4){
	  		elementSelec=1;
	  		selected.removeClass(".select");
	  		firstProjet.addClass("select");

	  		
	  	}
	  	else {
	  		elementSelec++;
	  		selected.next().addClass("select").prev().removeClass("select");
	  		//console.log("la classe select est dans la div :" + );

	  	}
  	});

	var i;

	console.log(projets[3]);

  	for (i=0; i < nbTravaux; i++) {

  		var projetActif = projets[i];
  		console.log(projets[i]);

  	}



   
});