// Adaptez l'exercice 8 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide
// Resultat attendu:
// (ex : nombre = 5)
// *               
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

let read = require("readline-sync");
let nombre = read.questionFloat("Veuillez saisir un nombre positive: ");
let compteur = 1;
let etoiles = "";

let sapin = (nombre, compteur, etoiles) => {
    for (let i = 0; i < nombre; i++) {
        if (compteur <= nombre) {
            etoiles += "*";
            console.log(etoiles);
            compteur++
        }
    }
    for (let j = compteur; compteur > 0; j--) {
        etoiles = etoiles.substring(1);
        console.log(etoiles);
        compteur--
    }
}
sapin(nombre, compteur, etoiles);