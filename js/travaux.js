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

		var $slider = $(this).find('.sliderWrap').clone(), //Clone est très important, ça sert à COPIER l'image mais sans modifier l'originale !
			$lightbox__wrap = $('.lightbox__wrap'), 
			$description = $slider.find('.slider__description');

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
		$lightbox.fadeIn();
	});


	$('.lightbox__wrap__close').click(function() {

	    $lightbox.fadeOut(function() {
			$lightbox.find('.sliderWrap').remove();
		});
	});

	$('.blankArea').click(function() {

	    $lightbox.fadeOut(function() {
			$lightbox.find('.sliderWrap').remove();
		});
	});





	// slider

	var slideActive = 1;

	$('.lightbox').on('click', '.slider__prev', function(e) {

		var $slider_wrap 	= $('.sliderWrap'), //La virgule est fait exprès, on déclare autant de variables qu'on veut à la fois (séparés par des virgules !)
		$slide 	 		= $('.slider'),
		nbSlides			= $(this).parent().find('li').length; 

		if(slideActive > 1) {
			$slide.css({'marginLeft': '+=850px'});
			
			slideActive--; //On décrémente slideActive pour mettre à juor la position au sein du slide
		}
		else {
			//Si on est déjà à la première slide et qu'on clique sur précédent, on "flashforeward" vers la dernière slide
			$slide.css({'marginLeft' : '-' + 850 * (nbSlides-1)  + 'px'});
			slideActive = nbSlides; //On décrémente slideActive pour mettre à jour la position au sein du slide
		}
	});



	$('.lightbox').on('click', '.slider__next', function() {

		var $slider_wrap	= $('.sliderWrap'), //La virgule est fait exprès, on déclare autant de variables qu'on veut à la fois (séparés par des virgules !)
		$slide 	 		= $('.slider'),
		nbSlides			= $(this).parent().find('li').length; 

		if(slideActive < nbSlides) {
			$slide.css({'marginLeft' : '-=850px'});
			slideActive++;
		}
		else {
			//Si on est déjà à la fin, et qu'on clique à droite, on retourne en "flashback" à la première slide
			$slide.css({'marginLeft' : '0'});
			slideActive = 1;
		}
	});

});