'use strict';

/*************************************************************************************************/
/* *************************************** FONCTIONS ************************************** */
/*************************************************************************************************/

function clickAddSupp(event)
{
    console.log(this);
    console.log(event.target)
   if( event.target.classList.contains('mots'))
   {
         clearAll()  
        event.target.querySelector('.tooltip').classList.add('clickmots'); 
   }
   else
   {
    clearAll()
   }
}

function clearAll()
{
    let shown=document.querySelectorAll('.clickmots');


    for (let index = 0; index < shown.length; index++) 
    {
        shown[index].classList.remove('clickmots');    
    }
}

/*************************************************************************************************/
/* *************************************** CODE PRINCIPAL ************************************** */
/*************************************************************************************************/
document.addEventListener('click',clickAddSupp);