
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var image;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function clickImage()
{   
    //pour prendre les moification dans la classe selected
    this.classList.toggle('selected');

    // let somme=0;
    // for (let index = 0; index < image.length; index++) 
    // {
    //     if(image[index].classList.contains('selected'))
    //     {
    //         somme++
    //     }
    //     document.querySelector('span').innerHTML=somme;
    // }
   
    let somme=document.querySelectorAll('.selected').length;
    document.querySelector('span').innerHTML=somme;
   
  
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
image = document.querySelectorAll('img');

for (let index = 0; index < image.length; index++) 
{
    image[index].addEventListener('click', clickImage);
}


