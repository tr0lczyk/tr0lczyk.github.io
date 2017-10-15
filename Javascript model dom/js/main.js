//EVENTY EVENTY EVENTY EVENTY EVENTY EVENTY:--------------------------------------------------------------------------------------------------------------------

document.addEventListener( "DOMContentLoaded", function() {
// tutaj trafia skrypt operujący na elementach ze strony




//główny korzeń (document) wyswietla się cąły dokument

    console.log(document);

    //element html wyswietla się html

    console.log(document.documentElement);

    //element body wyswietla się sam body

    console.log(document.body);

    //element head wyswietla się sam head

    console.log(document.head);




    //Znajdowanie elementów
    //ZNAJDOWANIE PO ID
    var pierwszyDiv = document.getElementById('parFirst');
    console.log(pierwszyDiv);


    //ZNAJDOWANIE PO KLASIE 
    // łapiąc po klasie, tworzy się obiekt tablicy, dostęp do konkretnego elementu mamy dzięki indexowi[index] łąpiąc elementy po klasie tworzy się obiekt wezłó
    var linki = document.getElementsByClassName('link');
    console.log(linki);
    console.log(linki[1]);

    //wpisanie wszystkich linków na raz
    for (var i=0; i < linki.length; i++) {
        console.log(linki[i]);
    }

    //ZNAJDOWANIE PO TAGACH

    var anchor = document.getElementsByTagName('a');
    console.log(anchor);



    //ZNAJDOWANIE ZA POMOCĄ querySelector SELEKTOR to odniesienie z CSSa - pierwszy po selektorze

    var sekcjaPoId = document.querySelector('#sectionFirst');
    console.log(sekcjaPoId);

    //ZNAJDOWANIE KLASY PRZEZ querySelector 

    var linkPoKlasie = document.querySelector('.link');
    console.log(linkPoKlasie);

    //querySelectorAll wybiera wszystkie trafienia z klasy link
    var linkPoKlasie = document.querySelectorAll('.link');
    console.log(linkPoKlasie);

    //ELEMENTY RODZICA-------------------------------------------------------------------------------------------------------------


    var elementParent = document.getElementById('parFirst').parentNode; /*moze być też parentELement zamiast node*/
    console.log(elementParent);

    //lista dzieci danego węzłą - białe znaki są brane pod uwagę jako text

    var parSecondChilds = document.getElementById('parSecond').childNodes;
    console.log(parSecondChilds);

    var parSecondChilds2 = document.getElementById('parSecond').children;
    console.log(parSecondChilds);

    var firstNodeOfParSecond = document.getElementById('parSecond').childNodes[0];
    console.log(firstNodeOfParSecond);

    //children - listra dzieci danego elementu - zwraca kolekcję dzieci danego elementu

    console.log(pierwszyDiv.children);

    //firstchild/lastchild - odrzuca białe znaki w dokumen cie html

    console.log(pierwszyDiv.firstchild);
    console.log(pierwszyDiv.lastchild);

    ////DOstęp do wczesniejszego/następnego rodzeństwa danego elementu

    console.log(pierwszyDiv.nextSibling);
    console.log(pierwszyDiv.previousSibling);

    //aby zobaczyć jakiego typu jest węzeł, uzywamy nodeType

    console.log(pierwszyDiv.firstChild.nextSibling.nodeType);

    pierwszyDiv.childNodes.forEach(function(element) {
        if(element.nodeType == 3) {
            console.log(element);
        }
    })

    //Tworzymy węzły i dodajemy je do drzewka dodawanie atrybutó, dodawanie wartości za pomocą odpowiednich komend 

    var btn = document.createElement('button'); //tworzy element button
    var textBtn = document.createTextNode('Click me'); //tworzy tekst
    var classAtr = document.createAttribute('class'); //ustawiamy klasę tego atrybutu
    classAtr.value = 'btn'; //ustawia wartość atrybutu
    console.log(classAtr);


    //dodajemy wezeł do body

    document.body.appendChild(btn);
    //document.getElementById('sectionFirst').appendChild(btn);

    btn.appendChild(textBtn); //dodaj tekst do utworzonego button
    btn.setAttributeNode(classAtr); // dodaw wezeł atrybutu
    btn.setAttribute('href', '#'); //nowy atrybut wraz z zawartością
    document.getElementById('parSecond').insertBefore(btn, document.getElementById('parSecond').firstElementChild);

    //STQORZENIE PARAGRAFU

    var par = document.createElement('p');
    var parText = document.createTextNode('Lorem Ipsum');

    document.body.appendChild(par);
    par.appendChild(parText);
    par.setAttribute('id','para1');

    var inpoot = document.createElement('input');
    document.body.appendChild(inpoot);
    inpoot.setAttribute('type','textarea');
    inpoot.setAttribute('placeholder', 'dupa');

    var inpoot2 = document.createElement('input');
    document.body.appendChild(inpoot2);
    inpoot2.setAttribute('type','textarea');
    inpoot2.setAttribute('placeholder', 'zopa');

    document.body.replaceChild(inpoot2, inpoot);

    var inpoot3 = document.createElement('input');
    document.body.appendChild(inpoot3);
    inpoot3.setAttribute('type','textarea');
    inpoot3.setAttribute('placeholder', 'mopa');
    inpoot3.setAttribute('class', 'form');

    inpoot2.removeAttribute('placeholder');



    var inpoot4 = document.createElement('input');
    document.body.appendChild(inpoot4);
     var attributes = ['type', 'placeholder','class'];
     var values = ['textarea','jopa','form'];

    for(var i=0; i<attributes.length; i++) {
        inpoot4.setAttribute(attributes[i],values[i])
    }


    //USUWANIE WĘZŁÓW

    console.log(document.getElementById('sectionFirst').childNodes[9]);
    document.getElementById('sectionFirst').removeChild(document.getElementById('sectionFirst').childNodes[9]);

    //USUWANIE ATRYBUTÓW


    inpoot4.removeAttribute('placeholder');

    inpoot3

    //MANIPULACJA DOM I HTML I CSS------------------------------------------------------------------------------------

    var firstParagraph = document.getElementById('parFirst').firstElementChild;
    firstParagraph.innerHTML = '<h1>zmiana tekstu</h1>';

    //w innerText nie można wstrzykiwać nowych znaczników html, całość jest brana pod uwagę jako string /text
    console.log(firstParagraph.innerText);
    firstParagraph.innerText = '<h2>Kolejny zmieniony tekst</h2>';

    //outerHTML
    console.log(document.getElementById('parSecond').outerHTML);

    var outer=document.getElementById('parSecond').outerHTML;
    console.log(typeof outer);
    firstParagraph.innerText = outer;
    //firstParagraph.innerHTML = outer;

    //Zmiana i ustawianie atrybutów za pomocą innej skłądni---------------------------
    console.log(document.getElementById('parSecond').id);
    document.getElementById('parSecond').id = 'nowe';
    document.getElementById('nowe').id = 'parSecond';


    //ZMIANA I USTAWIENIE KLASY ELEMENTU classList className
    document.getElementById('parSecond').className = "section row";
    console.log(document.getElementById('parSecond').classList);


    //ZMIANA I USTAWIENIE STYLU CSS BEZPOŚREDNIO DO ELEMENTU
    btn.setAttribute('id','btn_2');
    document.getElementById('btn_2').style.backgroundColor = "green";
    document.getElementById('btn_2').style.width = 500 + "px";
//EVENTY DALEJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
    
//    callback -  funkcja wysteująca po jakimś zdarzeniu : click, dblclick, mouseover, mouseout, keydown, keypress,eventy dotykowe, itp., obsługa formularzy, 

    
//    Obsługa eventów------------------------------------------------------------------------------------------------------------------------------------------=
    
    document.getElementById('btn_2').onclick = function czyDziała() {
        console.log('Działa');
    }
    
    document.getElementById('parFirst').addEventListener('click',czyDziała);
    document.getElementById('parFirst').removeEventListener('click',czyDziała);
    
//    za pomocą removeEventListener nie mozna usunać wywołąnia funkcji z html
    document.getElementById('parSecond').removeEventListener('click',czyDziała);
    
    document.getElementById( "link" ).addEventListener( 'click', function(e){
        if (!e) var e = window.event; // dla IE
        console.log(e.type);
    } );
    document.getElementById('last_last_anchor').addEventListener('click',function(e){
        console.log('123');
        e.preventDefault();
    });
    
    
//KONIEC EVENTÓW--------------------------------------
});

function czyDziała() {
   console.log('click');
}
