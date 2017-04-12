$(function(){

    var projetsBloc = $(".travaux__Bloc");

    var $lightbox = $(".lightbox"); 

// MEUUUUUF !! bon en gros le probleme c'est que cette variable marche mais tu dois l'appeler dans une fonction ! idéalement pageAAfficher ! Trouve un moyen d'utiliser des fonction globales ;3
	
	$(projetsBloc).mouseover(function() {

	        $(projetsBloc).removeClass("travaux__selected");
	        $(this).toggleClass("travaux__selected");            
	}); 

	// lightbox

	$(projetsBloc).click(function(e){ 

		var $slider = $(this).find('.sliderWrap').clone(); //Clone est très important, ça sert à COPIER (CLONER) l'image mais sans modifier l'originale !
		var $lightbox__wrap = $('.lightbox__wrap'); 
		var $description = $slider.find('.slider__description');

		$slider.removeClass('hidden-xl-down');
		$lightbox__wrap.prepend($slider); //On met le slider dans la lightbox

		// Nous créons le titre si l'attribut alt existe
		if ($slider.data("title")) {

			$(".lightbox__title").text($slider.data("title"));
		}

		//Idem pour le sous-titre...
		if ($slider.data("soustitre")) {
			$(".lightbox__sous_titre").text($slider.data("soustitre"));
		}

		//Description
		$('.lightbox__description').text($description.text());
		$description.remove();

		//Et enfin nous la faisons apparaitre progressivement.
		$lightbox.fadeIn();
	});


	$('.lightbox__wrap__close').click(function() {

	    $lightbox.fadeOut(function() {
			$lightbox.find('.sliderWrap').remove();
		});
	});

});