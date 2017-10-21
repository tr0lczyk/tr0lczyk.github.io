
class Ksiazka {
  constructor(tytul, autor, przeczytana){
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = (przeczytana === true) ? "została przeczytana": "nie została przeczytana";
  }
  opiszKsiazke(){
    console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${this.przeczytana}.`)
  }
}

var ksiazkaOne = new Ksiazka('Wiedzmin', 'Andrzej Sapkowski', true);
console.log(ksiazkaOne);
var ksiazkaTwo = new Ksiazka('Hobbit', 'J.R.R. Tolkien',false);
console.log(ksiazkaTwo);
var ksiazkaThree = new Ksiazka('Nocny Patrol', 'Siergiej Łukjanienko',false);
console.log(ksiazkaThree);

ksiazkaOne.opiszKsiazke();

var globalArray = [ksiazkaOne,ksiazkaTwo,ksiazkaThree];

function iloscPrzeczytanych(globalArray) {
    for (var i = 0; i < globalArray.length; i++){
    globalArray[i].opiszKsiazke();
    var przeczytane = 0;
    if (globalArray[i].przeczytana = true){
      przeczytane += 1;
    } else {
      przeczytane += 0;
    }
  }console.log(przeczytane);
} 
