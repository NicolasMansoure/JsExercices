// Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".
// Calculer la somme de tous les nombres entre 1 et N
// Resultat attendu:
// (ex : nombre = 5)
// 1+2+3+4+5 = 15

let read = require("readline-sync");

let nombre = read.questionFloat("Veuillez saisir un nombre positive: ");
let somme = 0;

for (let i = 0; i < nombre+1; i++){ // "nombre+1" j'ai pas trouver plus propre car il manquait un tour de boucle.
    somme = somme + i
}

console.log(`La somme de tous les nombre de ${nombre} est de ${somme}.`)



// S O L U T I O N
//_______________________________________________________________ 
// let read = require("readline-sync");
// let nombre = read.questionFloat("Saisir un nombre N : " );
// console.log(`Vous avez saisi : ${nombre}`);
// let somme = 0;
// let i = 1;
// let result ="";
// while (i <= nombre) {
//     somme += i;
//     if (i === nombre) {
//         result += i + " = ";
//     } else {
//         result += i + "+";
//     }
//     i++;
// }
// console.log(`${result} ${somme}`);