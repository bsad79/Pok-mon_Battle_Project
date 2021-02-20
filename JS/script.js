var body = document.getElementById('body');
var divGen4 = document.getElementById('geracao4');
var divGen5 = document.getElementById('geracao5');
var divGen6 = document.getElementById('geracao6');
var divGen7 = document.getElementById('geracao7');
var divIntro = document.getElementById('intro');
var divMain = document.getElementById('main');
var MainChild;

divGen4.style.visibility = 'hidden';
divGen5.style.visibility = 'hidden';
divGen6.style.visibility = 'hidden';
divGen7.style.visibility = 'hidden';

body.removeChild(divIntro);
body.removeChild(divGen4);
body.removeChild(divGen5);
body.removeChild(divGen6);
body.removeChild(divGen7);

divMain.appendChild(divIntro);
MainChild = divIntro;
divMain.appendChild(document.getElementsByTagName("footer"));

function transition(div){
    divMain.removeChild(MainChild);
    divGen4.style.visibility = 'hidden';
    divGen5.style.visibility = 'hidden';
    divGen6.style.visibility = 'hidden';
    divGen7.style.visibility = 'hidden';
    divIntro.style.visibility = 'hidden';
    if(div == "gen4")
    {
        divMain.appendChild(divGen4);
        MainChild = divGen4;
        divGen4.style.visibility = 'visible';
    }
    if(div == "gen5")
    {
        divMain.appendChild(divGen5);
        MainChild = divGen5;
        divGen5.style.visibility = 'visible';
    }
    if(div == "gen6")
    {
        divMain.appendChild(divGen6);
        MainChild = divGen6;
        divGen6.style.visibility = 'visible';
    }
    if(div == "gen7")
    {
        divMain.appendChild(divGen7);
        MainChild = divGen7;
        divGen7.style.visibility = 'visible';
    }
}