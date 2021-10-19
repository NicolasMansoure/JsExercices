// Écrivez un programme qui simulera une calculatrice et demande à l'utilisateur de saisir un premier opérande, un opérateur et un second opérande.
// Ce programme exécutera des opérations arithmétiques de base (addition, soustraction, multiplication et division selon l'opérateur saisi
// Resultat attendu:
// [12, "+", 3] = 15
// [12, "*", 3] = 36
// [12, "/", 3] = 4
// [12, "-", 3] = 9

let read = require("readline-sync");

let operande1 = read.questionFloat("Veuillez saisir la premiere operande: ");
let operateur = read.question("Veuillez saisir l'operateur (addition: +, soutraction: -, division! /, multiplication: *): ");
let operande2 = read.questionFloat("Veuillez saisir la seconde operande: ");
let resultat = 0;

let calculatrice = (operande1, operateur, operande2) => {
    if (operateur == "+") {
        resultat = operande1 + operande2
        console.log(`${operande1} ${operateur} ${operande2} = ${resultat}`)
    }
    else if (operateur == "-") {
        resultat = operande1 - operande2
        console.log(`${operande1} ${operateur} ${operande2} = ${resultat}`)
    }
    else if (operateur == "/") {
        resultat = operande1 / operande2
        console.log(`${operande1} ${operateur} ${operande2} = ${resultat}`)
    }
    else if (operateur == "*") {
        resultat = operande1 * operande2
        console.log(`${operande1} ${operateur} ${operande2} = ${resultat}`)
    }
    else {
        console.log("Erreur");
    }
}

calculatrice(operande1, operateur, operande2);

