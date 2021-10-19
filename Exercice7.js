// Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".
// Calculer la somme de tous les nombres entre 1 et N
// Resultat attendu:
// (ex : nombre = 5)
// 1+2+3+4+5 = 15

let read = require("readline-sync");

let nombre = read.questionFloat("Veuillez saisir un nombre positive: ");
let somme = 0;

for (var i = 0; i < nombre+1; i++){ // "nombre+1" j'ai pas trouver plus propre car il manquait un tour de boucle.
    somme = somme + i
}

console.log(`La somme de tous les nombre de ${nombre} est de ${somme}.`)