let read = require("readline-sync");


let num1 = read.questionFloat("Veuillez saisir le premier numero: ");
let num2 = read.questionFloat("Veuillez saisir le second numero: ");

let addition = (num1, num2) => {
    let somme = num1 + num2;
    return `La somme de ${num1} et de ${num2} est de: ${somme}`
}

console.log(addition(num1,num2));