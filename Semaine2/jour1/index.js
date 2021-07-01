
let button;
let rectangle;

function click()
{
    rectangle.classList.toggle('supp');
}

function hover()
{
   
    rectangle.classList.add('important');
}

function out()
{
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
}

function double()
{
    rectangle.classList.remove('important');
    rectangle.classList.add('good');
}


button = document.querySelector('#toggle-rectangle');
button.addEventListener('click', click);

rectangle = document.querySelector('.rectangle');
rectangle.addEventListener('mouseenter', hover);

rectangle.addEventListener('mouseout', out);


rectangle.addEventListener('dblclick', double);
