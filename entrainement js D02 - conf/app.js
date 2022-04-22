let nom = "reine";
let quantitee = 10;
let valeur;
let remise;
let pluriel;

if (nom == "calzone"){
valeur = 8; }
else if (nom == "reine"){
    valeur = 10; }
 else if (nom == "royale"){
    valeur = 12; }   

if ((quantitee >=5) && (quantitee < 10)) {
    remise = 5;}
    else if(quantitee >=10) {
        remise = 10;}
        else if(quantitee <5) {
            remise = 0;}


quantitee > 1 ? pluriel="pizzas" : pluriel="pizza";

let total = quantitee * valeur - remise;

document.querySelector(".test").innerHTML=
`Vous avez commandé ${quantitee} ${pluriel}<br>
Type de pizza commandée : ${nom}<br>
Valeur unitaire : ${valeur} &euro;<br>
Remise : ${remise} &euro;<br>
Total à payer : ${total} &euro;`

newTotal = total - valeur;

quantitee >= 10 ? document.querySelector(".test2").innerHTML=
`Vous avez droit à 1 pizza gratuite<br>
Nouveau total à payer: ${total} - ${valeur} = ${newTotal} &euro;<br>
Merci pour votre commande`
: document.querySelector(".test2").innerHTML= `Merci pour votre commande`;



console.log(pluriel);
