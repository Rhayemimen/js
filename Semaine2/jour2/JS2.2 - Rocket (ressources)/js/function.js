// chrono pour afficher chaque seconde un nombre de 100 à 0.la fonction s'arrete à 0.

var chrono;
var count=100;
function countDown()
{
    count = count-1;
    console.log(count);
    if(count == 0)
    {
        clearInterval(chrono);

    }
}
chrono = setInterval(countDown,1000);

//afficher nom apres 20s de chargement de la page.

setTimeout(function(){ alert("Rhaiem Imen"); }, 20000);