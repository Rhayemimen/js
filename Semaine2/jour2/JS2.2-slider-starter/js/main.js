'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var slides;
var state;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function refreshSlider()
{
    document.querySelector('.slider-figure.active').classList.remove('active');
    document.querySelector('.slider-dots li.selected').classList.remove('selected');
    document.querySelector('.slider-miniatures img.selectedImg').classList.remove('selectedImg');

    slides[state.index].classList.add('active');
    document.querySelectorAll('.slider-dots li')[state.index].classList.add('selected');
    document.querySelectorAll('.slider-miniatures img')[state.index].classList.add('selectedImg');

}

function onClickNext()
{
   if(state.index == slides.length - 1)
   {
       state.index = 0;
   }
   else
   {
       state.index++;
   }
   refreshSlider()
}

function onClickPrev()
{
    if(state.index == 0)
    {
        state.index = slides.length - 1;
    }
    else
    {
        state.index--;
    }
    refreshSlider()
}

function onClickRandom()
{
    let i;
    do
    {
        i = getRandomInteger(0, slides.length - 1);
    }
    while(i == state.index)  
    state.index = i;

    refreshSlider(); 
}

function onClickPlayPause()
{
    if(state.timer == null)
    {
        state.timer = setInterval(onClickNext, 1000);
        document.querySelector('.play-pause').title ='Arrêter diaporamat';
    }
    else
    {
        clearInterval(state.timer);
        document.querySelector('.play-pause').title ='Démarrer diaporamat';
        state.timer = null;
    }
    // if(icon.classList.contains('fa-play'))
    // {
    //     icon.classList.remove('fa-play');
    //     icon.classList.add('fa-pause');
    // }
    // else
    // {
    //     icon.classList.remove('fa-pause');
    //     icon.classList.add('fa-play');
    // }       
    const icon = document.querySelector('.play-pause i');

    icon.classList.toggle('fa-pause');
    icon.classList.toggle('fa-play');
}

function onSliderKeydown()
{
    console.log(event)
    switch(event.code)
    {
        case'ArrowRight':
        onClickNext();
        break;

        case'ArrowLeft':
        onClickPrev();
        break;

        case'Space':
        onClickPlayPause();
        //pour annuler le comportement pas défaut de l'espace 
        event.preventDefault();
        break;
    }
    
}

function clickDotImg() 
{
    state.index = this.dataset.index;
    refreshSlider()
}

function sliderDots()
{
    for(let i = 0; i < slides.length; i++)
    {
        let li = document.createElement('li');
        li.dataset.index = i;
        
        if(i == 0)
        {
            li.classList.add('selected');
        }
        document.querySelector('ul').appendChild(li);

        li.addEventListener('click',clickDotImg);
    }
}

function sliderMiniatures()
{
    let images = document.querySelectorAll('.slider-picture')
    for (let i = 0; i < slides.length; i++) 
    {
        let img = document.createElement('img');
        img.dataset.index = i;

        if(i == 0)
        {
            img.classList.add('selectedImg');
        }
        img.src=images[i].src

        document.querySelector('.slider-miniatures').appendChild(img);

        img.addEventListener('click',clickDotImg);
        
    }
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

slides = document.querySelectorAll('.slider-figure');

state = new Object();
state.index = 0;
state.timer = null;

document.querySelector('#next').addEventListener('click', onClickNext);
document.querySelector('#prev').addEventListener('click', onClickPrev);

document.querySelector('.random').addEventListener('click', onClickRandom);

document.querySelector('.play-pause').addEventListener('click', onClickPlayPause);

document.addEventListener("keydown",onSliderKeydown);

sliderDots();
sliderMiniatures();
    