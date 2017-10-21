
function ustawTlo() {
    var paragraf = document.getElementsByTagName('p');
    paragraf[0].style.backgroundColor = "yellow";
    paragraf[1].style.backgroundColor = "red";
}

document.getElementById('btn').addEventListener('click',ustawTlo);
    
