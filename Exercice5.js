// Écrivez un programme pour un professeur flemmard. Vous disposez d'une liste de notes comprises entre 0 et 20. Écrivez un commentaire pour chacune de ces copies d'élève
// Résultat attendu :
// 0-4 --> "Catastrophique, il faut tout revoir"
// 5-10 --> "Insuffisant"
// 11-14 --> "Peut mieux faire"
// 15-17 --> "Bien"
// 18-20 --> "Excellent, bon travail"

let read = require("readline-sync");

let listeEleve = [0, 17, 9, 11, 19];

let commentaireNote = (listeEleve) => {
    let i = 0;
    while (i < listeEleve.length) {
        if (listeEleve[i] >= 0 && listeEleve[i] <= 4) {
            console.log(`la note est de: ${listeEleve[i]}. Catastrophique, il faut tout revoir`)
        }
        else if (listeEleve[i] >= 5 && listeEleve[i] <= 10) {
            console.log(`la note est de: ${listeEleve[i]}. Insuffisant`)
        }
        else if (listeEleve[i] >= 11 && listeEleve[i] <= 14) {
            console.log(`la note est de: ${listeEleve[i]}. Peut mieux faire`)
        }
        else if (listeEleve[i] >= 15 && listeEleve[i] <= 17) {
            console.log(`la note est de: ${listeEleve[i]}. Bien`)
        }
        else if (listeEleve[i] >= 18 && listeEleve[i] <= 20) {
            console.log(`la note est de: ${listeEleve[i]}. Excellent, bon travail`)
        }

        else {
            console.log(`la note est de: ${listeEleve[i]}`)
        }

        i++
    }
}

commentaireNote(listeEleve);
