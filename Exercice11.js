// Écrivez un programme qui demande à l'utilisateur de saisir un nombre décimal.
// Le programme doit renvoyer exactement le nombre de billets et de pièces qu'il faut pour obtenir ce nombre
// Resultat attendu:
// (ex : nombre = 2437,57€)
// Billet 500€ : 4
// Billet 200€ : 2
// Billet 20€ : 1
// Billet 10€ : 1
// Billet 5€ : 1
// Pièce 2€ : 1
// Pièce 0,50€ : 1
// Pièce 0,02€ : 1
// Pièce 0,01€ : 0

let read = require("readline-sync");

let numbreAgent = read.questionFloat("Entrez un nombre : ");

const listeBillets = [500, 200, 20, 10, 5, 2, 1, 0.5, 0.02, 0.01];

let distributeurBillet = () => {
    listeBillets.forEach((billet) => { 
        if ((numbreAgent%billet) >= 0 ) {
            let nombreDebillets = Math.trunc(numbreAgent/billet);
            if (numbreAgent > 5 ) {
                console.log(`Billets de ${billet}€ : ${nombreDebillets}`);
            } else {
                console.log(`Pièces de ${billet}€ : ${nombreDebillets}`);
            }
            numbreAgent = numbreAgent - (nombreDebillets*billet);
        }
    });
}

distributeurBillet(numbreAgent);