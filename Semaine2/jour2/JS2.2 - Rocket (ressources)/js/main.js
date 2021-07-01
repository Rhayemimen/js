'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var button;
var chrono;
var compteur=10;
var styles=['tiny','normal','big'];
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function getRandomInt(min,max)
{
  return Math.floor (Math.random()*(max-min+1)+min);
}

function clickButton()
{
    chrono = setInterval(myChrono,1000);
    this.classList.add('disabled');
    this.removeEventListener('click',clickButton);

    document.querySelector('#rocket').src='images/rocket2.gif';

    setTimeout(lancerFus,10000);
}

function myChrono()
{
    document.querySelector('span').innerHTML = compteur;
    compteur--;
    if(compteur == -1)
    {
        clearInterval(chrono);
    }
}

function lancerFus()
{
    document.querySelector('#rocket').src='images/rocket3.gif';
    document.querySelector('#rocket').classList.add('tookOff');
} 

function star() 
{

    let etoile = document.createElement('div')
    etoile.classList.add('star');
    let x = getRandomInt(0,2);

    etoile.classList.add( styles[x]);
    
    etoile.style.top=getRandomInt(0,100/100)+"px";
    etoile.style.bottom=getRandomInt(0,100/100)+"px";
    etoile.style.left=getRandomInt(0,100/100)+"px";
    etoile.style.right=getRandomInt(0,100/100)+"px";

    document.body.appendChild(etoile);

}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
button = document.querySelector('#firing-button');
button.addEventListener('click', clickButton);

for (let index = 0; index < 150; index++) 
{
    star();
}