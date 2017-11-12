$(document).ready(function(){
    console.log('ready!');
    $.getJSON( "https://blockchain.info/pl/ticker", function( data ){
        console.log(data);
        console.log(data.PLN.buy , data.PLN.sell);
        $('#buy').html(data.PLN.buy);
        $('#sell').html(data.PLN.sell);
    });
    
});  

