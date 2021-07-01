
let achat = [];

function ajout_produit()
{
    let n=prompt("combien de produit voulez vous ajouter")
    for(let i=0; i<n; i++)
    {
       let produit = prompt('Ajouter le produit '+(i+1));
        achat.push(produit);
    }
  
   //ou achat[achat.length] = produit; 
}

function affiche_tab()
{
    if(achat.length > 0) 
    {
        document.write('Les produit sont: '+achat.join('-')+'<br>');
        document.write('Nombre de produit est '+achat.length+'<br>');
    }
    else
    {
        document.write('La liste des achats est vide');
    }
}

function supprim_produit(produit)
{
    let index = achat.indexOf(produit);
    if (index == -1)
    {
        document.write('Ce produit n\'existe pas');
    }
    else
    {
        achat.splice(index,1);
    }
}

function supprim_tous()
{
    achat=[];
    //ou achat.splice(0);
    //ou achat.splice(0,achat.length);
    //ou achat.length = 0;
}
var choix;
do
{
    choix = window.prompt(" Si vous voulez ajouter un produit choisir: 1 \n Si vous voulez supprimer un produit choisir: 2 \n Si vous voulez vider le liste choisir: 3 \n Si vous voulez quitter choisir: 4");

    switch(choix)
    {
        case'1': 
        ajout_produit();
        affiche_tab();
        break;
    
        case'2':
        supprim_produit(window.prompt('Entrer un produit pour la suppression'));
        affiche_tab();
        break;
    
        case'3':
        supprim_tous();
        affiche_tab();
        break;
    
        case'4':console.log('vous avez quitté la page');
        break;
    
        default:console.log('Mauvaise manipulation')
    }
}
while (choix !=4) 

