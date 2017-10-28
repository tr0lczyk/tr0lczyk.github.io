$(document).ready(function(){
    karuzelka();
})

/*Jeżeli chcemy zeby załączył się skrypt edytujący karuzelkę, musimy usunąc data-ride w skeypcie htmla*/
function karuzelka(){
    $('#carouselExampleControls').carousel({
        interval: 100
    });
}