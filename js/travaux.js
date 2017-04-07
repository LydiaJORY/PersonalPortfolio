$(function(){



// MEUUUUUF !! bon en gros le probleme c'est que cette variable marche mais tu dois l'appeler dans une fonction ! idéalement pageAAfficher ! Trouve un moyen d'utiliser des fonction globales ;3

	
$(projetsBloc).mouseover(function() {

        $(firstProjet).removeClass("travaux__selected");
        $(this).toggleClass("travaux__selected");
              
    }); 
	

});