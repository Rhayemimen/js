'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRoquetInteger(min,max,message)
{
    let choix;
    
    do
    {
        choix = parseInt(window.prompt(message))
        
    }
    while (isNaN(choix) || choix < min || choix > max) 
    return choix;
}

function getRandomInteger(min,max)
{
  return Math.floor (Math.random()*(max-min+1)+min);
}

function lancerDes(n,f)
{
    let total = 0;
    for( let i = 0; i < n; i++ )
    {
        total = total+ getRandomInteger(1,f);
    }
    return total
}


