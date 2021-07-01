
var resultat
var a = parseFloat(window.prompt('Entrer un nombre :'));
var b = parseFloat(window.prompt('Entrer un deuxième nombre :'));
var operation = window.prompt('Quel type d\'opération vous désirez :'); 

if (isNaN(a) || isNaN(b) )
{
   document.write('Nombres invalides. il faux saisir des nombres.');
}
else
{
    switch(operation)
    {
        case '+':
        case 'addition' : 
            resultat = a+b ;
        break;
    
        case '-':
        case 'soustraction' : 
            resultat = a-b ;
        break;
    
        case '*':
        case 'multiplication' : 
            resultat = a*b ;
        break;
    
        case '/':
        case 'division' : 
            if (b == 0) 
            {
                document.write('<p> opération incorrecte(division par 0) </p>');
            }
            else
            {
                resultat = a/b ;   
            } 
        break;
    
        case '^':
        case 'puissance' : 
            resultat = a**b ; 
        break;
    
        default :
            document.write('Erreur');
    }

    if ( resultat != undefined) 
    {
        document.write('<p>Le résultat est ' +resultat+ '</p>');
    }
    
}

   
       
    
