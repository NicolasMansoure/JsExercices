let read = require("readline-sync");

let prixFabrication = read.questionFloat("Veuillez saisir le prix de fabrication: ");
let prixVente = read.questionFloat("Veuillez saisir le prix de vente: ");


let soustraction = (prixFabrication, prixVente) => {
    let somme = prixFabrication - prixVente;
    return somme;
}

let ProfitOuPerte = (prixFabrication, prixVente) => {
    if (prixFabrication > prixVente) {
        console.log(`Profit de ${soustraction(prixFabrication, prixVente)}`);
    }
    else {
        console.log(`Perte de ${soustraction(prixFabrication, prixVente)}`);
    }
}

ProfitOuPerte(prixFabrication, prixVente);