$(function(){

    // VARIABLES GLOBAAAALES !! :D

    actualEcran = $(".actualEcran"); // méfie toi. A mon avis quand tu auras des ancres et tout ça va te porter prejudice que le actual ecran soit par défaut sur homepage...
    contact = $("#contact");
    travaux = $("#travaux");
    menuLi = $( "#menu li" );
    homepage = $("#homepage");

    // var hauteurFenetre   = $( window ).height();
    // var millieuFenetre = hauteurFenetre / 2;
    $(actualEcran).show();
   
});


// VANILLA JS
// Petit script pour connaitre la date de la dernière modification :D
lastUpdate();

function lastUpdate() {
    var date = new Date(document.lastModified);
    document.getElementById("lastUpdate").innerHTML = date.toLocaleString([], {day:'2-digit', month: '2-digit', year:'2-digit'});
}



