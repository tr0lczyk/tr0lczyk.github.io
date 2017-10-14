
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

imiona[6] = 'grzegorz';
imiona[7] = 'anna';

console.log(typeof imiona);
console.log(imiona);

//Jezeli jakiś index zostaje pusty, wyskakuje ze jest on empty