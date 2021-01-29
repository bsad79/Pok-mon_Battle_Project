var divGen4 = document.getElementById('geracao4');
var divGen5 = document.getElementById('geracao5');
var divGen6 = document.getElementById('geracao6');
var divGen7 = document.getElementById('geracao7');
var divIntro = document.getElementById('intro');

divGen4.style.visibility = 'hidden';
divGen5.style.visibility = 'hidden';
divGen6.style.visibility = 'hidden';
divGen7.style.visibility = 'hidden';

function transition(div){
    divGen4.style.visibility = 'hidden';
    divGen5.style.visibility = 'hidden';
    divGen6.style.visibility = 'hidden';
    divGen7.style.visibility = 'hidden';
    divIntro.style.visibility = 'hidden';
    if(div == "gen4")
    {
        divGen4.style.visibility = 'visible';
    }
    if(div == "gen5")
    {
        divGen5.style.visibility = 'visible';
    }
    if(div == "gen6")
    {
        divGen6.style.visibility = 'visible';
    }
    if(div == "gen7")
    {
        divGen7.style.visibility = 'visible';
    }
}