const TAUX_TVA = 0.2;

var m_remise,tva,montantTTC,taux_remise

var montantHT = parseFloat(window.prompt('Entrer un montant HT'));
var remise = window.prompt('Voulez-vous une remise?');

if (remise=='oui' || remise=='yes')
{
    var taux_remise = window.prompt('Donnez le montant de la remise');
    m_remise = montantHT-(montantHT*taux_remise/100);
    document.write('<p>Le montant de la remise est: ' +m_remise+'</p>');
    tva = m_remise * TAUX_TVA;
    document.write('<p>Le montant de la TVA est: ' +tva+ '</p>');
    montantTTC = m_remise + tva;
    document.write('<p>Le montant TTC est: ' +montantTTC+ '</p>');
}
else
{
    document.write('<p>Aucun remise</p>');
    tva = montantHT* TAUX_TVA;
    document.write('<p>Le montant de la TVA est: ' +tva+ '</p>');
    montantTTC = montantHT+ tva;
    document.write('<p>Le montant TTC est: ' +montantTTC+ '</p>');
}







