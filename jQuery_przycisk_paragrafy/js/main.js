$(document).ready(function(){
    przesunTo();
    przesunTo2();
});


function przesunTo(){
    $('#przycisk').click(function(){
        $('p:eq(4)').insertBefore('p:eq(0)')
    })

}

function przesunTo2(){
    $('#przycisk2').click(function(){
        $('p:eq(0)').insertAfter('p:eq(4)')
    })

}