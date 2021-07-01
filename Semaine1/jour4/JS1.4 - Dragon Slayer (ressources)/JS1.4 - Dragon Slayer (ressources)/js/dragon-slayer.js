'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
const NIV_FACILE 	= 1;
const NIV_NORMAL 	= 2;
const NIV_DIFFICILE = 3;

const CHEVALIER = 1;
const VOLEUR    = 2;
const MAGE      = 3;

const JOUEUR = 'joueur';
const DRAGON = 'dragon';

let jeu;
let pvJoueurInitial;
let pvDragonInitial;

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
function initialiserJeu()
{
	//creation de l'objet jeu
	jeu = new Object(); // = {}

	//initialisation du niveau
	jeu.niveau = getRequestInteger(1,3,"Chosir niveau: 1-facile 2-moyen 3-difficile");

	//initialisation personnages
	jeu.personnage = getRequestInteger(1,3,"Chosir un personnage: 1-Chevalier 2-Voleur 3-Mage")

	//initialisation des PV selon le niveau
	switch(jeu.niveau)
	{
		case NIV_FACILE:
		jeu.pvJoueur = 100 + lancerDes(10,10);
		jeu.pvDragon = 100 + lancerDes(5,10);
		break;

		case NIV_NORMAL:
		jeu.pvJoueur = 100 + lancerDes(10,10);
		jeu.pvDragon = 100 + lancerDes(10,10);
		break;

		case NIV_DIFFICILE:
		jeu.pvJoueur = 100 + lancerDes(7,10);
		jeu.pvDragon = 100 + lancerDes(10,10);
		break;
	}

	//initialisation des valeurs de pv

	pvJoueurInitial = jeu.pvJoueur;
	pvDragonInitial = jeu.pvDragon;

	//initialisation du tour
	jeu.tour = 1;
}

function getAttaquant()
{
	let initiativeJoueur = lancerDes(10,6);
	let initiativeDragon = lancerDes(10,6);

	if (jeu.personnage == VOLEUR)
	{
		initiativeJoueur += Math.round(initiativeJoueur * lancerDes(1,6)/100);
	}

	if(initiativeJoueur >= initiativeDragon)
	{
		return JOUEUR;
	}
	else
	{
		return DRAGON;
	}
	
}

function calculerDommage(attaquant)
{
	let dommage = lancerDes(3,6);

	switch(jeu.niveau)
	{
		case NIV_FACILE:
			if(attaquant == DRAGON)
			{
				dommage -= Math.round(dommage * lancerDes(2,6) / 100);
				if(jeu.personnage == CHEVALIER)
				{
					console.log(dommage);
					dommage = Math.round(dommage - (dommage * lancerDes(1,10) / 100));
					console.log(dommage);
				}
			}
			else //attaquant == JOUEUR
			{
				dommage += Math.round(dommage * lancerDes(2,6) / 100);
				if(jeu.personnage == MAGE)
				{
					dommage = Math.round(dommage + (dommage * lancerDes(1,10) / 100));
				}
			}
			break;

		case NIV_DIFFICILE:
			if(attaquant == DRAGON)
			{
				dommage += Math.round(dommage * lancerDes(1,6) / 100);
				if(jeu.personnage == CHEVALIER)
				{
					dommage = Math.round(dommage - (dommage * lancerDes(1,10) / 100));
				}
			}
			else //attaquant == JOUEUR
			{
				dommage -= Math.round(dommage * lancerDes(1,6) / 100);
				if(jeu.personnage == MAGE)
				{
					dommage = Math.round(dommage + (dommage * lancerDes(1,10) / 100));
				}
			}	
			break;
	}


	return dommage;
}

function afficherJournal(attaquant,dommage)
{
	document.write('<h3>Tour n°'+jeu.tour+'</h3>');

	if(attaquant === JOUEUR)
	{
		document.write('<figure class="game-round">'+'<img src="images/knight-winner.png" alt="Chevalier vainqueur">'+
		'<figcaption>Vous êtes le plus rapide, vous attaquez le dragon et lui infligez '+dommage+' points de dommage !</figcaption>'+
		'</figure>')
	}
	else
	{
		document.write('<figure class="game-round">'+
		'<img src="images/dragon-winner.png" alt="Dragon vainqueur">'+
		'<figcaption>Le dragon prend l\'initiative, vous attaque et vous inflige '+dommage+' points de dommage !</figcaption>'+
		'</figure>')
	}
}


function afficherEtat()
{
	document.write('<div class="game-state">');

	if(jeu.pvJoueur>pvJoueurInitial*30/100)	
	{
		document.write('<figure class="game-state_player"><img src="images/knight.png" alt="Chevalier battu"> <figcaption> <progress max="'+pvJoueurInitial+'" value="'+jeu.pvJoueur+'"></progress>'+jeu.pvJoueur+'</figcaption></figure>')
	}	
	else if(jeu.pvJoueur<pvJoueurInitial*30/100&&jeu.pvJoueur>0)
	{
		document.write('<figure class="game-state_player"><img src="images/knight-wounded.png" alt="Chevalier battu"> <figcaption><progress max="'+pvJoueurInitial+'" value="'+jeu.pvJoueur+'"></progress>'+jeu.pvJoueur+'</figcaption></figure>')
	}
	else
	{
		document.write('<figure class="game-state_player"><img src="images/knight-wounded.png" alt="Chevalier battu"> <figcaption><progress max="'+pvJoueurInitial+'" value="'+jeu.pvJoueur+'"></progress>'+'Game Over'+'</figcaption></figure>')
	}


	if(jeu.pvDragon>pvDragonInitial*30/100)	
	{
		document.write('<figure class="game-state_player"><img src="images/dragon.png" alt="Chevalier battu"> <figcaption> <progress max="'+pvDragonInitial+'" value="'+jeu.pvDragon+'"></progress>'+jeu.pvDragon+'</figcaption></figure>')
	}	
	else if(jeu.pvDragon<pvDragonInitial*30/100&&jeu.pvDragon>0)
	{
		document.write('<figure class="game-state_player"><img src="images/dragon-wounded.png" alt="Chevalier battu"> <figcaption> <progress max="'+pvDragonInitial+'" value="'+jeu.pvDragon+'"></progress>'+jeu.pvDragon+'</figcaption></figure>')
	}
	else
	{
		document.write('<figure class="game-state_player"><img src="images/dragon-wounded.png" alt="Chevalier battu"> <figcaption> <progress max="'+pvDragonInitial+'" value="'+jeu.pvDragon+'"></progress>'+'Game Over'+'</figcaption></figure>')
	}

	document.write('</figure></div>')
	
}
function deroulementJeu()
{
	let attaquant;
	let dommage;

	//on est dans un tour
	while(jeu.pvJoueur > 0 && jeu.pvDragon > 0)
	{
		//qui est l'attquant
		attaquant = getAttaquant();

		//calculer les points de dommages
		dommage = calculerDommage(attaquant);

		//mettre à jour les points de vie
		if(attaquant == DRAGON)
		{
			jeu.pvJoueur -= dommage;
		}
		else
		{
			jeu.pvDragon -= dommage;
		}
			
		//affichage
		afficherJournal(attaquant,dommage);
		afficherEtat();

		//passer au tour suivant
		jeu.tour++;
	}

}

function afficherFinJeu()
{
	document.write('<h3>Fin de la partie</h3>');

	if(jeu.pvJoueur > 0)
	{
		document.write(' <footer><figure class="game-end">'+
		'<figcaption>BRAVO vous avez battu le dragon!</figcaption>'+
		'<img src="images/knight-winner.png" alt="Dragon'+ 'vainqueur">'+'</figure></footer>')
	}	
	else
	{
		document.write(' <footer><figure class="game-end">'+
		'<figcaption>Vous avez perdu le combat, le dragon vous a carbonisé !</figcaption>'+
		'<img src="images/dragon-winner.png" alt="Dragon'+ 'vainqueur">'+'</figure></footer>')
	}
		
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

initialiserJeu();
afficherEtat();
deroulementJeu();
afficherFinJeu();