
//selectionner un élément
document.querySelector("#p1").innerHTML = "3WA";
document.querySelector("#p1").style.color = "red";
document.querySelector("input").value = "3WA";

//créer un élément
var elementUl = document.createElement('ul');
var elementLi = document.createElement('li');
elementLi.innerHTML="test"
var elementLi2 = document.createElement('li');

document.body.appendChild(elementUl);
elementUl.appendChild(elementLi);
elementUl.appendChild(elementLi2).innerHTML = "test test";

document.getElementById('p1').remove();

//Evennement
var button=document.querySelector('button')
button.addEventListener("click", click); 

var mydiv=document.querySelector('#myDIV')
function click()
{
    mydiv.classList.toggle('mystyle');
}    