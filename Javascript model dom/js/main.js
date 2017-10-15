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

var firstNodeOfParSecond = document.getElementById('parSecond').childNodes[0];
console.log(firstNodeOfParSecond);

//children - listra dzieci danego elementu - zwraca kolekcję dzieci danego elementu

console.log(pierwszyDiv.children);

//firstchild/lastchild - odrzuca białe znaki w dokumen cie html

console.log(pierwszyDiv.firstchild);
console.log(pierwszyDiv.lastchild);