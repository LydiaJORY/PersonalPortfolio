$(function(){

   console.log('jQuery est prêt !');

});

lastUpdate();

function lastUpdate() {
    var date = document.lastModified;
    document.getElementById("lastUpdate").innerHTML = date;
}