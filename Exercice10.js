// Adaptez l'exercice 9 pour que la pyramide soit dans le bon sens (^)
// Resultat attendu:
// (ex : nombre = 5)
//     *            
//    ***
//   *****
//  *******
// *********
//________________________________________________________________________
// nombre = 5 -> etages
// __Boucle nombre étage
// __let espaces = ""
// __Boucle qui définit le nombre d'espaces
// __let etoiles = ""
// __let etoiles2 = ""
// __Boucle qui définit le nombre d'étoiles
// ____un tour où je mets pas de "*" dans etoiles2
// __console.log(espaces + etoiles)
//________________________________________________________________________

let read = require("readline-sync");

let pyramide = () => {
    let nombre = read.questionFloat("Veuillez saisir un nombre positive: ")

    for (let i = 1; i <= nombre; i++) { // boucle etages
        let espaces = "";
        let etoiles = "";
        let etoiles2 = "";
        for (let j = 0; j < nombre - i; j++) { // boucle espaces
            espaces += " ";
        }
        for (let k = 0; k < i; k++) { // boucle etoiles
            etoiles += "*";
            if (k !== 0) {
                etoiles2 += "*";
            }
        }
        console.log(espaces + etoiles + etoiles2);
    }
}

pyramide();