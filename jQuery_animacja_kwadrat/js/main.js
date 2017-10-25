$(document).ready(function() {
    przesunTo();
    wyswietl();
});

function przesunTo(){
    $('button').click(function(){
        $('div').animate({
            left:'100px',
            width: '100px',
            height: '100px'
        },3000,function(){
            $('div').css({
                'background-color': 'blue',
                'transition': 'all 5s'
            }, function(){
                $('div').after('<h2>Animacja Zakończona</h2>')
            })
        })}
                     )} 


function wyswietl(){
    $('button').click(function(){
        console.log('nacisniete');
    });
}