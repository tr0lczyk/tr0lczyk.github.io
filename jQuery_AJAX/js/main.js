$(document).ready(function(){
   pobierzDane();
});

function pobierzDane(){
    $('button').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
                 function(data){
            $.each(data, function(i, element){
                $('div').append(element + ' ');
            });
        });
    });
}