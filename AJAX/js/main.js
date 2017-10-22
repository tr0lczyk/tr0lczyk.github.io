
function ajax(ajaxOptions) {
    var options = {
        type: ajaxOptions.type || 'POST',
        url: ajaxOptions.url || '',
        onError: ajaxOPtions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || 'text'
    };
    
    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpRequest.status == 'undefined');
        } catch (e) {
            return false;
        }
    }
    
    var httpReq = new XMLHttpRequest();
    
    httpReq.open(options.type, options.url, true);
    
    //onreadystatechange odpalane za każdym razem, kiedy zostanie zmieniony stan dokumentu (httpReq.readystate)
//    możliwe wartości:
//    0: połączenie nienawiązane,
//    1:połączenie nawiązane,
//    2:zadanie odebrane,
//    3: przetwarzanie zadania,
//    4: dane zwrócone i gotowe do uzycia
            
    httpReq.onreadystatechange = function() {
        //jezeli 4 , dane są zwrócone i gotowe
        if(httpReq.readyState == 4) {
            
            //sprawdź status połączenia
            if (httpSuccess(httpReq)) {
                //jezeli dane w formacie xm;l to zwróć obiekt responseXML,
                //jezeli nie, zwróc dane w formie responseText
                var returnData = (options.dataType == 'xml')? httpReq.responseXML : httpReq.responseText;
                
                options.onSuccess(returnData);
            }
        }
    }
}

//ajax({
//
//
//})