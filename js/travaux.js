$(function(){

	var elementSelec = 1;

	var projets = [
					"projet1",
					"projet2",
					"projet3",
					"projet4",
					"projet5"];

if ($(".contact").hasClass("actualEcran")) {

	
	$(".travaux__Bloc").on('click', function(e) {

	  	var nbTravaux= projets.length;
	  	var selected = $('.selected');
	  	var firstProjet = $(".travaux__Bloc:first-child");

	  	console.log("le projet selectioné est le " + elementSelec);

	  	if (elementSelec > nbTravaux-1){

	  		elementSelec=1;
	  		selected.removeClass("selected");
	  		firstProjet.addClass("selected");
	
	  	}
	  	else {
	  		elementSelec++;
	  		selected.removeClass("selected").next().addClass("selected");
	  	}
  	});
}
   
});