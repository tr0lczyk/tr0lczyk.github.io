$(document).ready(function(){
    addScrolled();
});

$(document).scroll(function(){
    addScrolled();
});

function addScrolled() {
    var height = $('#main-nav').height();
    var scroll = $(window).scrollTop();
    
    if(scroll > height) {
        $('#main-nav').addClass('transparent_blue');
    } else {
        $('#main-nav').removeClass('transparent_blue');
    }

}