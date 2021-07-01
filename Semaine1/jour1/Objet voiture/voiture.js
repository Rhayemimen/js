
var voiture =
{
    marque :"Kia",
    anneeFab :"2018",
    dateAchat : new Date('2019-5-20'),
    passager : ['Papa', 'Maman', 'Baya']
};
document.write
(
    '<ul>', 
        '<li>' +voiture.marque+ '</li>', 
        '<li>' +voiture.anneeFab+ '</li>', 
        '<li>' +voiture.dateAchat.toDateString()+ '</li>', 
        '<li>' +voiture.passager+ '</li>', 
    '</ul>'
);



