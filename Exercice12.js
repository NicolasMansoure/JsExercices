// Vous disposez d'une liste de températures (°C).
// Parcourez cette liste et affichez la température la plus proche de 0°C. 
// Si une température négative est aussi proche de 0 qu'une température positive, la valeur négative prend le dessus.
// Resultat attendu:
// [12, 25, 5, 7, 6, -5]
// La température la plus proche de 0°C est -5°C.


const listeTemp = [12, 25, 5, 7, 6, -12];
let temporaire = listeTemp[0];

listeTemp.forEach((temperature) => {
    if ((0 - temperature) > (0 - temporaire)) {
        temporaire = temperature;
    }
});

console.log(temporaire);
