document.addEventListener( "DOMContentLoaded", function() {

function ustawTlo() {
    var paragraf = document.getElementById('p');
    paragraf[0].style.background = "yellow";
    paragraf[1].style.background = "red";
}

document.getElementById('button').addEventListener('click',ustawTlo);
    
}