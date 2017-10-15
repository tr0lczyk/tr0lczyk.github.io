function ustawTlo() {
    var paragrafy = document.getElementsByTagName('p');
    paragrafy[0].style.background = 'red';
    paragrafy[1].style.background = 'yellow';
}

document.getElementById('button').addEventListener('click',ustawTlo);