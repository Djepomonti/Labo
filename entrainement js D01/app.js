let pizza = "reine";
let nombre = 10;
let valeur;
let remise;
let pluriel;
let affRemise;

if (pizza == "calzone") {
    valeur = 8;
}
else if (pizza == "reine") {
    valeur = 10;

}
else if (pizza == "royale") {
    valeur = 12;
}

if ((nombre >= 5) && (nombre < 10)) {
    remise = 2;

} else if (nombre >= 10) {
    remise = 5;

} else {
    remise = 0;
}
if (nombre < 2) {
    pluriel = "pizza";

} else {
    pluriel = "pizzas";
}
if (remise == 0) {
    affRemise = "";

} else {
    affRemise = `Remise: ${remise} &euro;<br>`;
}


let total = nombre * valeur - remise;

document.querySelector(".test").innerHTML =
    `Vous avez commandé ${nombre} ${pluriel}<br>
Type de pizza commandée: ${pizza}<br>
Valeur unitaire: ${valeur}&euro;<br>
${affRemise}
Total a payer: ${total}&euro;
`
