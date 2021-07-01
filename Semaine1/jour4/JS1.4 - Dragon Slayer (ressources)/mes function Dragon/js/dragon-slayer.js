'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
const NIV_FACILE = 1;
const NIV_NORMAL = 2;
const NIV_DIFFICILE = 3;
const JOUEUR = 'joueur';
const DRAGON = 'dragon';

var  jeu;   //variable objet qui représente le jeu

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
/*****************************initialisation**********************************/
function initialiserJeux()
{   
    jeu = {};
    
    jeu.tour = 1;

    jeu.niveau = getRoquetInteger(1,3," 1-niveau facile \n 2-niveau normal \n 3-niveau difficile");
    
    switch(jeu.niveau)
    { 
        case NIV_FACILE:
        jeu.pvDragon = 100 + lancerDes(5,10);
        jeu.pvJoueur = 100 + lancerDes(10,10);
        break;

        case NIV_NORMAL:
        jeu.pvDragon = 100 + lancerDes(10,10);
        jeu.pvJoueur = 100 + lancerDes(10,10);
        break;

        case NIV_DIFFICILE:
        jeu.pvDragon = 100 + lancerDes(10,10);
        jeu.pvJoueur = 100 + lancerDes(7,10);
        break;
    }
   
}

/*****************************Déroullement*******************************************/

function getAttaquant()
{
    let initiativeDragon,initiativeJoueur;
    let attaquant;
    do
    {
        initiativeDragon = lancerDes(10,6);
        initiativeJoueur = lancerDes(10,6);
            
        if (initiativeDragon > initiativeJoueur) 
        {
            attaquant = DRAGON;
        }
        else
        {
            attaquant = JOUEUR;
        }
    }
    while (initiativeDragon == initiativeJoueur);

    return attaquant;
}

function calculDommage(attaquant)
{
    let pointDommage = lancerDes(3,6);

    if(attaquant == DRAGON)
    {
        if (jeu.niveau == NIV_FACILE) 
        {
            pointDommage = Math.round(pointDommage - (pointDommage * lancerDes(2,6) / 100));
        }
        else if(jeu.niveau == NIV_DIFFICILE)
        {
            pointDommage = Math.round(pointDommage + (pointDommage * lancerDes(1,6) / 100));
        }
    }
    else    //attaquant == JOUEUR
    {
        if (jeu.niveau == NIV_FACILE) 
        {
            pointDommage = Math.round(pointDommage + (pointDommage * lancerDes(2,6) / 100));
        }
        else if(jeu.niveau == NIV_DIFFICILE)
        {
            pointDommage = Math.round(pointDommage - (pointDommage * lancerDes(1,6) / 100));
        }
    }

    return pointDommage;
}

function deroulementJeu()
{
    let pointDommage;
    let attaquant;
    while(jeu.pvDragon > 0 && jeu.pvJoueur >0)
    {
        pointDommage = calculDommage(attaquant);
        attaquant = getAttaquant();

        if(attaquant == JOUEUR)
        {
            jeu.pvDragon = jeu.pvDragon - pointDommage;
        }
        else
        {
            jeu.pvJoueur = jeu.pvJoueur - pointDommage;
        }

        console.log('Tour N° '+jeu.tour);
        console.log('le score du Joueur est '+jeu.pvJoueur+' Le score du Dragon est '+jeu.pvDragon);

        jeu.tour++
    }
    
    if (jeu.pvDragon <= 0) 
    {
        console.log('Vous avez gagné avec un score de '+jeu.pvJoueur);
    }
    if(jeu.pvJoueur <= 0)
    {
        console.log('Le Dragon a gagné avec un score de '+jeu.pvDragon);
    }
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/******************initialisation*********************/

initialiserJeux();
console.log('Les poinr de vie du Joueur : '+jeu.pvJoueur+'\nLes point de vie du Dragon : '+jeu.pvDragon+'\nLe tour N° '+jeu.tour+'\nAu niveau '+jeu.niveau);

/***********************************Déroullement*********************************************/
console.log('L\'attaquant c\'est le '+getAttaquant())
console.log(calculDommage(getAttaquant()))
console.log(deroulementJeu())


