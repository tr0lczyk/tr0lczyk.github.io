
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


OPERATORY LOGICZNE --------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------

