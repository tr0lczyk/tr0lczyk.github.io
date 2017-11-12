$(function(){
    
    
    var interval = null;
    
    function getDataExchange() {
        
        var buyArrow = $('#buy-arrow')
        var currentBuyPrice = parseFloat($('#buy').html());
        
        var sellArrow = $('#sell-arrow')
        var currentSellPrice = parseFloat($('#sell').html());
        
        $.getJSON( "https://blockchain.info/pl/ticker", function( data ){
            $('#buy').html(data.PLN.buy);
            $('#sell').html(data.PLN.sell);
            
            if(currentBuyPrice < parseFloat(data.PLN.buy)){
                buyArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log('increase');
            } else if(currentBuyPrice > parseFloat(data.PLN.buy)){
                buyArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log('decrease');
            } else {
                buyArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log('no change');
            };
            
            if(currentSellPrice < parseFloat(data.PLN.sell)){
                buyArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
                console.log('increase');
            } else if(currentSellPrice > parseFloat(data.PLN.sell)){
                buyArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
                console.log('decrease');
            } else {
                buyArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
                console.log('no change');
            };
            
            
        });
    }
    
    getDataExchange();
    
    interval = setInterval(getDataExchange, 5000);
    
    $('.control-button').click('on', function(){
        clearInterval(interval);
        interval = setInterval(getDataExchange, $(this).val());
        $('#refresh-frequency').html($(this).text());
    });
    
});  

