// Adaptez l'exercice 9 pour que la pyramide soit dans le bon sens (^)
// Resultat attendu:
// (ex : nombre = 5)
// *            
// ***
// *****
// *******
// *********

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
}
sapin(nombre, compteur, etoiles);