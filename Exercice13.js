// Vous disposez d'une liste de nombre.
// Triez la liste du plus petit au plus grand.
// Resultat attendu:
// [12, 25, 5, 7, 6, -5]
// -> [-5, 5, 6, 7, 12, 25]
//_______________________________________________________________


let tri = () => {
    let liste = [12, 25, 5, 7, 6, -12];
    let liste2 = liste;

    for (let i = 0; i < liste.length; i++) {
        for (let j = 0; j < liste2.length; j++) {
            // if (liste[i] > liste2[j]) {
            //     liste2[j] = liste[i]
            // }
            console.log(liste[j]);
        }
    }

    console.log(liste);
    console.log(liste2);
}

tri();