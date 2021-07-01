'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function getRandomInteger(min,max)
{
	return Math.round(Math.random() * (max - min) + min);
}

function lancerDes(n,f)
{
	let somme = 0;

	for(let i = 1; i <= n; i++)
	{
		somme = somme + getRandomInteger(1,f);
		//somme += getRandomInteger(1,f);
	}

	return somme;
}

function getRequestInteger(min,max,message)
{
	let choix;

	do
	{
		choix = parseInt(window.prompt(message));	
	}
	while(isNaN(choix) || choix < min || choix > max);
	
	return choix;
}
