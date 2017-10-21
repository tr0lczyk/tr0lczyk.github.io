//$ = jQuery

$(document).ready(function() {
    hideShow();
    showNumberOfP();
    changeClassColor();
    showText();
    showHTML();
    addText();
    deleteContent();
    emptyContent();
    showInputValue();
    addClassToNav();
    scrolled();
    changeLinksColor();
    dontRefresh();
});


$(window).resize(function() {
    
});

$(window).scroll(function() {
    scrolled();
    
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
//bez parametru - pokazuje zawartość tekstową elementów o klasie green 
//z podanym parametrem - zmienia zawartość tekstową elementów
function showText() {
    console.log($('.green').text());
    $('.green').text(' ');
}


function showHTML() {
    console.log($('.green').html());
    $('.green').html('<h2>tekst</h2>');
}

//metody dodające treść
//append() , prepend(), before(), after() 
//próćz tekstu można wstrzykiwać zawartość html
function addText() {
    $('#added .append').append('<h1>What will we do with a drunkin sailor?</h1>');
    $('#added .prepend').prepend('<h1>What will we do with a drunkin sailor??</h1>');
    $('#added .before').before('<h1>What will we do with a drunkin sailor???</h1>');
    $('#added .after').after('<h1>early in the morning!</h1>');
}

//remove() empty()
//remove usuwa znacznik z HTML
//empty usuwa treść ze znacznika, pozostawiając sam znacznik
function deleteContent() {
    $('#added .append').remove();
} 

function emptyContent() {
    $('#added .prepend h1').empty();
} 

//METODA VAL
// bez parametrów - zwraca wartość z input formularza
//z parametrem - ustawia wartość input formularza

function showInputValue() {
    $('#form form input').val('Tekst')
    $('#form form input').each(function() {
        $(this).change(function() {
            console.log($(this).val());
        });
    });
}

//addClass dodaje klasę/y
//removeClass - usuwa klasę/y
function addClassToNav() {
    $('#main-nav').addClass('blue-background');
}

function removeClassToNav() {
    $('#main-nav').removeClass('blue-background');
}

function scrolled() {
    var windowPosition = $(window).scrollTop();
    var navHeight = $('#main-nav').height();
    console.log($(window).scrollTop());
    console.log($('#main-nav').height());
    if(windowPosition  > navHeight) {
        $('#main-nav').addClass('blue-background');
    } else {
        $('#main-nav').removeClass('blue-background');
    }
}

//Metoda find posiada !!!!wymagany parametr!!!!!


function changeLinksColor() {
    var parent = $('#main-nav ul .list-item');
    parent.each(function() {
        $(this).mouseenter(function() {
            $(this).find('a').css('color','gray');
        }).mouseleave(function() {
            $(this).find('a').css('color','white');
        });
    });
}

function dontRefresh() {
    var parent = $('#main-nav ul .list-item a');
    parent.each(function() {
        $(this).click(function(event) {
//            event.preventDefault();
//            console.log($(this).attr('href'));
            if ($(this).attr('href') == '' || $(this).attr('href') == '#' ){
                event.preventDefault();
            }
        });
    });
}