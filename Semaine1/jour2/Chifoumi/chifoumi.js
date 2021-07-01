
const PIERRE = 'pierre',
      FEUILLE = 'feuille',
      CISEAU = 'ciseau';
var mot_ordi, n;
var mot_joueur = window.prompt('Entrer Pierre ou Feuille ou Ciseau'); 
mot_joueur= mot_joueur.toLowerCase();
n = Math.random();

if (n <= 1/3) 
{
    mot_ordi = PIERRE;
}
else if (n <= 2/3)
{
    mot_ordi = FEUILLE;
}
else
{
    mot_ordi = CISEAU;
}

document.write('<p>L\'ordinateur a choisit :',mot_ordi,'</p>');

if (mot_joueur == PIERRE || mot_joueur == FEUILLE || mot_joueur == CISEAU) 
{
    if (mot_joueur == mot_ordi) 
    {
        document.write ('Egalité');
    }
    else 
    {   
        if((mot_joueur == PIERRE && mot_ordi == CISEAU) || (mot_joueur == FEUILLE && mot_ordi == PIERRE) || (mot_joueur == CISEAU && mot_ordi == FEUILLE))
        {
            document.write('Félicitation Vous avez gagner');
        }
        else ((mot_joueur == PIERRE && mot_ordi == FEUILLE) || (mot_joueur == FEUILLE && mot_ordi == CISEAU) || (mot_joueur == CISEAU && mot_ordi == PIERRE))
        {
            document.write('Désolé Vous avez perdu');
        }                 
    }  
}
else
{
    document.write('Veuillez bien saisir le mot');
}

