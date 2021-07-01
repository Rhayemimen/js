
//getDay() => 0->6
//getMonth() => 0->11
const weekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

let d = new Date()


    document.write('<p>Nous sommes le '+weekDays[d.getDay()]+ " " +d.getDate() +" "+ months[d.getMonth()]+" "+ d.getFullYear()+'</p>');
    document.write('<p>Il est exactement '+d.getHours()+ ' H , ' + d.getMinutes()+' min et '+ d.getSeconds()+' seconde.</P>')


