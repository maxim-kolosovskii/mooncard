// onClick open loader and close it after time
function envoiEnCours() {
    var element = document.getElementById("form-blur");
    element.classList.add("js-blur");
    setTimeout(function() {element.classList.remove("js-blur")}, 2000);
}
