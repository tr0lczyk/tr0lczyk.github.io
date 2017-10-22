$(document).ready(function(){
    $('#pobierzDane').click(function() {
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data) {
            console.log(data);
        })
    });
});
//function ajax(ajaxOptions) {
//    var options = {
//        type: ajaxOptions.type || 'POST', 
//        url: ajaxOptions.url || '',
//        onError: ajaxOptions.onError || function () {},
//        onSuccess: ajaxOptions.onSuccess || function () {},
//        dataType: ajaxOptions.dataType || 'text'
//    };
//    
//    function httpSuccess(httpRequest) {
//        try {
//            return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpRequest.status == 'undefined');
//        } catch (e) {
//            return false;
//        }
//    }
//    
//    var httpReq = new XMLHttpRequest();
//    
//    httpReq.open(options.type, options.url, true);
//    
//    //onreadystatechange odpalane za każdym razem, kiedy zostanie zmieniony stan dokumentu (httpReq.readystate)
////    możliwe wartości:
////    0: połączenie nienawiązane,
////    1:połączenie nawiązane,
////    2:zadanie odebrane,
////    3: przetwarzanie zadania,
////    4: dane zwrócone i gotowe do uzycia
//            
//    httpReq.onreadystatechange = function() {
//        //jezeli 4 , dane są zwrócone i gotowe
//        if(httpReq.readyState == 4) {
//            
//            //sprawdź status połączenia
//            if (httpSuccess(httpReq)) {
//                //jezeli dane w formacie xm;l to zwróć obiekt responseXML,
//                //jezeli nie, zwróc dane w formie responseText
//                var returnData = (options.dataType == 'xml')? httpReq.responseXML : httpReq.responseText;
//                
//                options.onSuccess(returnData);
//                
//                //zeruj obiekt, aby nie utrzymać niepotrzebnego połączenia z serwerem
//                httpReq = null;
//            } else {
//                //jezeli blad
//                options.onError(httpReq.statusText)
//            }
//        }
//    }
//    httpReq.send();
//}
//
//function pobierzDane(event) {
//    var event = ajax();
//}
//
//var przycisk = $('btn');
//
//przycisk.click(getJSON(){
//    ajax({
//        type:'GET', url :'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', onError:function(){
//            console.log('Nie udało się nawiązać połączenia');
//        },
//        onSuccess: function(response) {
//            console.log(response);
//
//            var jsonObj = JSON.parse(response);
//            
////            var paragraf = document.createElement('p');
////    //        var text = jsonObj.uderId;
////            paragraf.innerText = 'UserID: ' + jsonObj.userId;
////            document.getElementById('odebraneDane1').appendChild(paragraf);
////            
////            var paragraf2 = document.createElement('p');
////    //        var text = jsonObj.uderId;
////            paragraf2.innerText = 'User Name: ' + jsonObj.userName;
////            document.getElementById('odebraneDane2').appendChild(paragraf2);
////            
////            var paragraf3 = document.createElement('p');
////    //        var text = jsonObj.uderId;
////            paragraf3.innerText = 'UserURL: ' + jsonObj.userURL;
////            document.getElementById('odebraneDane3').appendChild(paragraf3);
//
//    //        console.log('połączenie działa');
//            
//            var paragraf = document.createElement('p');
//            var paragraf2 = document.createElement('p');
//            var paragraf3 = document.createElement('p');
//            
//            paragraf.innerText = 'UserID: ' + jsonObj.userId;
//            paragraf2.innerText = 'User Name: ' + jsonObj.userName;
//            paragraf3.innerText = 'UserURL: ' + jsonObj.userURL;
//   
//            document.getElementById('odebraneDane1').appendChild(paragraf);
//            document.getElementById('odebraneDane1').appendChild(paragraf2);
//            document.getElementById('odebraneDane1').appendChild(paragraf3);
//
//        }
//    })
//})