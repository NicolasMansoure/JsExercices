// Écrivez un programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand

let read = require("readline-sync");


let nombre = read.questionFloat("Veuillez saisir un nombre: ");
let i = 0;

while (i < 2) {
    i++
    let temp = read.questionFloat("Veuillez saisir un nombre: ");
    if (nombre < temp) {
        nombre = temp;
    }
}

console.log(`Le nombre le plus grand que vous avez saisi est le ${nombre}`);