//$ = jQuery

$(document).ready(function() {
    hideShow();
    showNumberOfP();
    changeClassColor();
});


$(window).resize(function() {
    
});

$(window).scroll(function() {
    
});

//zmienia css, ukrywa i pokazuje element
function hideShow() {
    $('#first').css('background-color','red').hide('slow').show(3000);
    //metoda .css, jeżeli zmieniamy więcej niż jedną włąsciwość to pary włąsciwość: wartość , muszą znaleźć się w nawiasie klamrowym{}.
    /*$('#first').css({
        'background-color' : 'red',
        'height' : '70vh',
        'width' : '50%'
    });*/
}

/*
function hideShow() {
    document.getElementById('first').stye.background = 'red';
}

document.getElementById('first').style.background = 'red';
*/

//rejestrujemy zdarzenie "DOMContentLoad" za pomocą addEventlistener na obiekcie document
document.addEventListener('DOMContentLoad',function() {
    hideShow();
})

//pokazuje liczbę elementów [ w kontenerze #first
function showNumberOfP() {
    var number = $('#first p').length;
    console.log(number);
}
//get element by class
function changeClassColor() {
    $('.green').css ({
        'color': 'green',
        'font-size': '30px'
    });
}