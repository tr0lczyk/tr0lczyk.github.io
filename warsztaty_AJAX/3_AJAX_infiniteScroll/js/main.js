function ajax(ajaxOptions) {
    var options = {
        type: ajaxOptions.type || 'POST',
        url: ajaxOptions.url || '',
        onError: ajaxOptions.onError || function () {},
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

    httpReq.onreadystatechange = function () {
        //jezeli 4 , dane są zwrócone i gotowe
        if (httpReq.readyState == 4) {

            //sprawdź status połączenia
            if (httpSuccess(httpReq)) {
                //jezeli dane w formacie xm;l to zwróć obiekt responseXML,
                //jezeli nie, zwróc dane w formie responseText
                var returnData = (options.dataType == 'xml') ? httpReq.responseXML : httpReq.responseText;

                options.onSuccess(returnData);

                //zeruj obiekt, aby nie utrzymać niepotrzebnego połączenia z serwerem
                httpReq = null;
            } else {
                //jezeli blad
                options.onError(httpReq.statusText)
            }
        }
    }
    httpReq.send();
}


window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users',
            onError: function () {
                console.log('Nie udało się nawiązać połączenia');
            },
            onSuccess: function (response) {
                var jsonObjArray = JSON.parse(response);
                console.log(jsonObjArray);
                
                for ( var i in jsonObjArray) {
                    var userId = document.createElement('p');
                    var userName = document.createElement('p');
                    var userURL = document.createElement('p');
                    
                    userId.innerText = 'User ID:' + jsonObjArray[i].id;
                    userName.innerText = 'User NAME:' + jsonObjArray[i].name;
                    userURL.innerText = 'User URL:' + jsonObjArray[i].website;
                    
                    document.body.appendChild(userId);
                    document.body.appendChild(userName);
                    document.body.appendChild(userURL);
                }

            }
        })
    }
}

//scrollY, document.body.offsetHeight;
//console.log(document.body.offsetHeight);//wysokość body
//console.log(window.innerHeight);//wysokość viewport
//window.onscroll = function() {
//    var y = window.scrollY;//aktualna pozycja scroll
//    console.log(y + window.innerHeight);
//}