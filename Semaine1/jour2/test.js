/*var ch = prompt('Entrer une chaine de caractères');
ch = ch.trim();
document.write('<ul><li>'+ch+'</li><li>'+ch.length+'</li><li>'+ch.toLowerCase()+'</li><li>'+ch.toUpperCase()+'</li></ul>');*/




/*
var i = 0;
var tab=[];
var somme=0;
while (i <10) 
{
   tab[i]= parseInt(prompt('saisir un nombre '+(i+1)+' entier'));
    somme = somme + tab[i];
    i++;
}
document.write(tab);
document.write('<br>la somme est '+somme);*/

/*



var tab = [];
var i = 0;

do
{
    var N = parseInt(prompt('Saisir un nombre positif'));
}
while (N < 0) 

for(i=0; i < N; i++)
{

    do
    {
        tab[i] = parseInt(prompt('Saisir le contenu de la position '+(i+1)));
        
    }
    while (tab[i] < 0)
}
///////////////////////
var x = parseInt(prompt('Entrer votre nombre'));
let position = tab.indexOf(x);

if (position >-1)
{
    document.write('Votre nombre existe dans la posision '+(position+1));
}
else
{
    document.write("Votre nombre n'existe pas");
}

 ////////////////////
var x = parseInt(prompt('Entrer votre nombre'));
console.log(i);

i=0;
while (i < N && tab[i] != x)
{
    i++;
}
if(i>=N)
{
    document.write(x," n'existe pas");
}
else
{
    document.write(x," existe dans la position " +(i+1));
} 
    
*/





/*
var T = [i];
var i =0;

T.push('Mouath','Sabrin','Rochdi','Sarra');

T.unshift('Jilani','Nada');

T.reverse();
document.write(T);
document.write('<br>');
document.write(T.join('**'));
document.write('<br>');
document.write('<table><tr>');
for (let i = 0; i < T.length; i++) 
{
    document.write('<td>'+T[i]+'</td>');
}
document.write('</table></tr>');
*/





/*
var tab1 = [];
var tab2 = [];

for (let i = 0; i < 10; i++) 
{
    do
    {
        tab1[i] = parseInt(prompt('Saisir le '+(i+1)+' nombre '));
    }
    while (isNaN(tab1[i]) || tab1[i]<0)

    tab2[i] = tab1[i]**2;
  
}
document.write('<table><tr>')
for(let i=0;i<10;i++)
{
    document.write('<td>'+tab1[i]+'<td>');
}
document.write('</table></tr>')
document.write('<br>');
document.write('<table><tr>')
for(let i=0;i<10;i++)
{
    document.write('<td>'+tab2[i]+'<td>');
}
document.write('</table></tr>')
document.write('<br>');
*/


/*
var Tmultip =[];


do
{
    var n = parseInt(prompt('Saisir la taille du tableau de multiplication'));
}
while (n <= 0 || isNaN(n))

for(let i=1; i<=n; i++)
{
    Tmultip[i] = [];
    for(let j=1; j<=n; j++)
    {
        Tmultip[i][j] = i*j;
    }
}

document.write('<table>')
for(let i=1;i<=n;i++)
{
    document.write('<tr>')
    for(let j=1;j<=n;j++)
    {
        if (i == j)
        {
            document.write('<td style="background-color:red">'+Tmultip[i][j]+'</td>');  
        }
        else
        {
            document.write('<td>'+Tmultip[i][j]+'</td>');  
        }
    }
    document.write('</tr>')
}

document.write('</table>')

ou////////////////////

do
{
    var n = parseInt(prompt('Saisir la taille du tableau de multiplication'));
}
while (n <= 0 || isNaN(n))

document.write('<table>');
for (var j = 1; j <= n; j++) 
{
    document.write('<tr>')
    for(var i=1 ; i <= n ; i++)
    {
        
        if (i == j)
        {
            document.write('<td style="background-color:red">'+i*j+'</td>');  
        }
        else
        {
            document.write('<td>'+i*j+'</td>');  
        }
    } 
    document.write('</tr>')
}   
document.write('</table>');
 ///////////////////////////////
*/



/*
var tnote = [];

for(let i=0; i<3; i++)
{
    tnote[i] = [];
    var somme = 0;
    for(let j=0; j<3; j++)
    {
        do
        {
            tnote[i][j] = parseFloat(prompt('Saisir la note '+(j+1)+'de l\'étudiant ' +(i+1)));
        }
        while (tnote[i][j]<0 || isNaN(tnote[i][j]) || tnote[i][j]>20) 
        somme=somme+tnote[i][j];
    }
    if ((somme/3) < 10) 
    {
        document.write('la moyenne de l\'étudiant '+(i+1)+ ' est '+(somme/3)+' Vous etes refusé <br>');   
    } 
    else
    {
        document.write('la moyenne de l\'étudiant '+(i+1)+ ' est '+(somme/3)+' Vous etre Admis <br>');
    }  
}
*/


/*
function factoriel(n)
{
    let fact = 1;
    for (let i = 1; i <= n; i++) 
    {
       fact = fact*i;
    }
    return fact
}

var n=parseInt(prompt('saisir un nombre'))
var res = factoriel(n);
document.write('le factorielle de '+n+' est '+res);
*/



/*
function max(a,b,c)
{
    var m;
   if( a>b && a >c)
   {
       m= a
   }
   if( c>b && c >a)
   {
       m= c
   }
   if( a<b && b >c)
   {
       m= b
   }
   return m
}
//il faux que le nom de la variable soit le meme (max) et le meme nombre de peramètre (3) et de meme type(nombre)
var x=parseInt(prompt('saisir nombre 1'));
var y=parseInt(prompt('saisir nombre 2'));
var z=parseInt(prompt('saisir nombre 3'));
var res = max(x,y,z);
document.write ('le max est '+res);
*/



/*
function saisi_entier()
{
    let n;
    do
    {
        n = parseInt(prompt('saisir un entier strictement positif'))
    }
    while (isNaN(n) || n <= 0)
    return n
}
*/
//var result = saisi_entier();
/*document.write('afficher '+result)*/

/*
function saisir_tab(result)
{
    let tab=[]
   
    for (let i= 0; i < result; i++)
    {
        tab[i] = saisi_entier();
        
    }
    return tab
}

document.write(saisir_tab(result))
*/
/*************ou********/
/*
function saisir_tab()
{
    let tab=[];
    let result =saisi_entier();
    for (let i= 0; i < result; i++)
    {
        tab[i] = saisi_entier();
        
    }
    return tab
}
*/
/*
function affiche_tab(t)
{
    document.write('<table>')
    document.write('<tr>')
    for (let i = 0; i < t.length; i++) 
    {
        document.write('<td>'+t[i]+'</td>')
    }
    document.write('</tr>')
    document.write('</table>')
}
let Tab=saisir_tab()
affiche_tab(Tab)
*/
/*
function Moyenne(T) 
{
   let S=0;
   for(let i=0; i<T.length;i++)
   {
       S=S+T[i];
   }
   let M=S/T.length;
   return M  
}

var m=Moyenne(saisir_tab())
document.write('la moyenne est '+m)
*/
/*
function diviseur(x,y)
{
    if (x % y == 0)
    {
         return true;    
    }
    else
    {
        return false;
    }
}

var x=saisi_entier()
var y=saisi_entier()
*/
// if (diviseur(x,y)==true) 
// {
//     document.write(y+' est diviseur de '+x)
// }
// else
// {
//     document.write(y+' n\'est pas diviseur de '+x)
// }
/*
function Multiple(x,y)
{
   return diviseur(x,y)
}

if (Multiple(x,y)==true)
{
   document.write(x+' est multiple de '+y) 
}
else
{
    document.write(x+' n\'est pas multiple de '+y) 
}
*/


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

document.write(lancerDes(3,6))

