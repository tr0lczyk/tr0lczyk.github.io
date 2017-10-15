
//KO0MENTARZ LINIOWY
/* komentarz blokowy
*/


console.log('12345');
console.log('alamakota');
console.log('Kot ma "ALE"');

/* Komentarz blokowy zaczyna się slash i wgiazdka i zajmuje więcej niż jedną lkinie */

/* zmienne*/

var liczba = 10;
var string = 'To jest przykładowy tekst';

console.log(liczba);
console.log(string);

console.log(liczba + string)

//FUNKCJE
//funkvja loguje do konsoli

/*
function logToConsole(){
    console.log('Jestem wywołąniem funkcji');
}
*/

//wywołąnie funkcji za pomocą jej nazwy (nalezy pamiętać o nawiasach)

//logToConsole();

//definicja funkcji za pomocą "var"
var logToConsole = function() {
    console.log('Jestem wywołąniem \n funkcji');
}

logToConsole();


//FUnkcja z parametrami

function dodawanie(par1, par2) {
    var wynik = par1 + par2;
    console.log(wynik);
    return wynik;
}

var wynik2=dodawanie(liczba,liczba);
console.log('Wynik ' + wynik2);

//dodawanie(liczba,liczba);
//
//dodawanie(10,20);
//dodawanie(14,15);

//typy proste
var typZmiennej; /*Nie zainicjowane zmienne*/
console.log(typZmiennej);

var typZmiennejNull = null; /*zmienne puste*/
console.log(typZmiennejNull);


var element = document.getElementById('div');

if (element !== null) {
    element.style.width = 600 + 'px';
    element.style.height = 600 + 'px';
    
} else {
    console.log('niema takiego elementu');
}



//Tablice

var imiona = ['Marcin','AGnieszka','Małgorzata', 1, 10];
console.log(imiona[4]);

//indeksujemy od 0, jezeli chcemy odwołać się do konkretnej komórki trzymającej wartość, podajemy nazwę tablicy i w nawiasie kwadratowym numer indeksu
console.log(imiona[0]);

imiona[5] = 'grzegorz';
imiona[6] = 'anna';

console.log(typeof imiona);
console.log(imiona);

//Jezeli jakiś index zostaje pusty, wyskakuje ze jest on empty



//za pomocą metody push() możemy zamienić wartość elementu listy na inną

imiona.push('andrzej');
console.log(imiona);
console.log(imiona[7]);
console.log(imiona.length);


//metoda pop usuwa ostatni element z tabliocy, nastepnie zwróci go

var imiona2 = [ 'Marcin', 'Ania', 'Agnieszka' ];
console.log(imiona2);
imiona2.pop();
console.log(imiona2);
console.log(imiona2.pop());
console.log(imiona2.length);
console.log(imiona2);

//unshift wstawia element na tablicy na początku a potem zwraca długość tablicy

imiona.unshift('Romek', 'tomek');
console.log(imiona);

//metoda shift usuwa pierwszy element z tablicy, a następnie go zwraca na widoku

imiona.shift();
console.log(imiona.shift());
console.log(imiona);


//metoda join - łączy kolejne elementy w jeden ciąg lub tekst. standardowo znakiem pomiędzy jest przecinek, ale możemy to edytować w nawiasach - nie zmienia to typu tablicowego tylko zmienia sposób wyświetlania.

console.log(imiona.join(" + "));


//metoda reverse odwraca kolejność elementów na tablicy 

imiona.reverse();
console.log(imiona.reverse());


//Sortowanie- słuzy do tego metoda sort() najpierw sortuje liczby po pierwszym znaku i zależnie od jego wartości, potem stringi zaczynające się od wielkich liter i na końcu te zaczynające się od małych liter
//aby uszeregować wszystkie elementy po kolei należy dodać parametr metody sort  function(a,b){return a-b}

imiona.sort();
console.log(imiona);

var tablica_liczb = [10,1,1234,234055, 8329243.89, 187.90, 345];
tablica_liczb.sort();
console.log(tablica_liczb);



//OBIEKTY --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//this - odwołuje się do obiektu jezeli jest umiejscowione w jego wnętrzu klucz podajemy po kropce lub w nawiasach kwadratowych

var object = {
    name: "mateusz",
    height: 186,
    print: function() {
        console.log(this.name);
    }
}

console.log(object.name);

console.log(`${object.name} to jest swietny gość, ma ${object.height} cm wzrostu.`);

object.print();

object.weight = 82;
object.printDetail = function() { // dodawanie metody
console.log(this.name + " " + this.height + " " + this.weight);
}

console.log(object);
object.printDetail();



//KLASY-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Osoba {
    constructor(imie, nazwisko, wzrost) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
    }
    wyswietlInfo() {
        console.log( "Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko + ", wzrost " + this.wzrost);
    }
}

var krystian = new Osoba('Krystian', 'Dziopa','186');
krystian.wyswietlInfo();


var lukasz= new Osoba('Lukasz','Badocha',175);
lukasz.wyswietlInfo();

krystian.imie = 'Pawel';
console.log(krystian.imie);
console.log(krystian);


class gry {
    constructor(tytuł,gatunek,wydawca) {
        this.tytuł = tytuł;
        this.gatunek = gatunek;
        this.wydawca = wydawca;
    }
    displayInfo() {
        console.log("Nazwa: " + this.tytuł + ", Gatunek: " + this.gatunek + ", wydawca: " + this.wydawca);
    }
}

var mass_effect = new gry('Mass effect', 'RPG', 'EA');
mass_effect.displayInfo();

//OBIEKT MATH-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Math.random - wypisuje różne wartości w przedziale od 0-1. Jezeli dodatkowo zanczymy *x to przedział liczbowy od do, zmieni się na maxymalnie x.

var rozna = Math.random()*100;
console.log(typeof rozna);
console.log(Math.floor(rozna));

rozna.toString(36);
console.log(typeof rozna);
console.log(rozna);


//OPERATORY ARYTMETYCZNE----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//modulo % -zwraca resztę z dzielenia

var new_int = 6 % 4;
console.log(new_int);

// pre/post inkrementacja/dekrementacja
liczba = 20;
console.log(liczba); 
++liczba;
console.log(liczba); 
liczba++;
console.log(liczba); 
liczba--;
liczba--;
console.log(liczba); 

//* , / , ++ , -- , + , -


//operatory przypisania +/=---------------------------------------
console.log(liczba); 
liczba += liczba;
console.log(liczba); 
liczba -= liczba;
console.log(liczba); 

//skrócony zapis if - z lewej strony warunek, znak zapytania? po znaku zapytania instrukcja jezeli prawda, dwukropek, instrukcja jeżeli znak zapytania

('2' == 2)? console.log('prawda'): console.log('nieprawda');

if ('2' == 2) {
    console.log('prawda');
} else {
    console.log('fałsz');
}

('3' != 4)? console.log('fałsz'): console.log('prawda');


if ('2' === 2) {
    console.log('prawda');
} else {
    console.log('fałsz');
}


//OPERATORY LOGICZNE ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- and = &&, zwraca true tylko i tylko wtedy, gdy or = ||, not = ! 

if (('2' == 2) && (2>5)) {
    console.log('prawda');
} else {
    console.log('fałsz');
}

if (('2' == 2) || (2>5)) {
    console.log('prawda');
} else {
    console.log('fałsz');
}

if (!(('2' !== 2) && (8<4))) {
    console.log('prawda');
} else {
    console.log('fałsz');
}


//Instrukcje warunkowe---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//if else else if

if (2>5) {
    console.log('2 jest wieksze od 5');
} else if (3>5) {
    console.log('3 jest wieksze od 5');
}  else if (4>5) {
    console.log('4 jest wieksze od 5');
}  else if (5==5) {
    console.log('5 równe 5');
} else {
    console.log('nie ma większej od 5');
}



//SWITCH

var kolor = 'zielony';

switch(kolor) {
    case 'czerwony':
        console.log('kolor czerwony');
        break;
    case 'zielony':
        console.log('kolor zielony');
        break;
    case 'niebieski':
        console.log('kolor niebieski');
        break;
    default:
        console.log('inny kolor');       
}


//PĘTLE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------for i while

//petla for
console.log('elementy tablicy:')
for(var i=0; i < imiona.length; i++){
    console.log('index: ' + i + 'element' + imiona[i]);
}


//petla forEach - skrócony for
//miejsca element i index mają znaczenie

imiona.forEach(function(element, index) {
    console.log('Element z Indexem: ' + index +  'ma wartość ' + element);
});


//Petla while od for róźni się tym , ze stosujemy ja kiedy nie nzamy liczby elementów tablicy. dopóki wartunek jest mozliwy do spełnienia, będzie odbywał się test (true false)

var z = 100;
while(z>1) {
    console.log(z);
    z--;
    
    if (z==50) {
        console.log(z);
        break; /* petle możemy zatrzymać tak naprawdę poprzez zastosowanie sformułowania break*/
    }
}

//continue pozwala na przeskok w iteracji do kolejnej zmiennej.

for (var i = 0; i <10; ++i) {
    if (i ==5){
        continue;
    } else {
        console.log(i);
    }
    
    console.log('++');
}

//Petla Do while - jezeli w warunku ma fałsz, wykona się raz, jezeli w warunku ma prawdę wykona się do spełnienia okreslonego warunku

var iter = 20;
do {
    console.log(iter);
    iter--;
} while (iter > 10);


//JSON-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Javascript object natation 


var jsonOsoby = {
    'osoby': [
        {
            imie: 'Krystian', 
            nazwisko: 'Dziopa',
            wzrost: 180,
            oczy: 'niebieskie',
            zainteresowania: [
                {nazwa: 'programowanie'},
                {nazwa: 'podróze'},
                {nazwa: 'jezyki'}
                
            ]
        },
        {
            imie: 'Łukasz', 
            nazwisko: 'Badocha',
            wzrost: 160,
            oczy: 'niebieskie',
            zainteresowania: [
                {nazwa: 'programowanie'},
                {nazwa: 'podróze'},
                {nazwa: 'jezyki'}
            ]
        },
        {
            imie: 'John', 
            nazwisko: 'Smith',
            wzrost: 120,
            oczy: 'brązowe',
            zainteresowania: [
                {nazwa: 'programowanie'},
                {nazwa: 'podróze'},
                {nazwa: 'jezyki'}
            ]   
        
        },
    ]
}

console.log(jsonOsoby);
console.log(jsonOsoby.osoby[0].imie);

//for (var i=0; i<jsonOsoby.osoby.length; i++) {
//    console.log(jsonOsoby.osoby[i].imie);
//}

//jsonOsoby.osoby[2].zainteresowania.forEach(function(element,index){
//    console.log(element.nazwa)
//})

for( var i=0; i < jsonOsoby.osoby.length; i++) {
    jsonOsoby.osoby[i].zainteresowania.forEach(function(element,index){
    console.log(element.nazwa)
})
}


function iloczyn(par1,par2,par3) {
    var wynik = par1*par2*par3;
    return wynik;
}

var i = iloczyn(1,2,3)
console.log(i);


//funkcja do odwracania wyrazów

function wez(wyraz) {
    var splitWyraz = wyraz.split("");
    var reverseWyraz = splitWyraz.reverse();
    var joinWyraz = reverseWyraz.join("");
    var wynik = joinWyraz;
    return wynik;
}

var odwrot = wez("akademia108")
console.log(odwrot);

//funkcja do sortowania elementów wyrazu

function sortowanie(i) {
    return i.split("").sort().join("");
}

var o = sortowanie("akademia108");
console.log(o);

//funkcja do wyśwuietlania własciwości każdego z elementów

var jsonPracownicy = {
  "pracownicy":[
    {"firstName": "Krystian", "lastName": "Dziopa"},
    {"firstName": "Anna", "lastName": "Szapiel"},
    {"firstName": "Piotr", "lastName": "Żmuda"}
   ]
}

//for( var i=0; i < jsonPracownicy.pracownicy.length; i++) {
    jsonPracownicy.pracownicy.forEach(function(element,index){
    console.log('Element z Indexem: ' + index + ' nazywa się ' +element.firstName,element.lastName)
})
//}



