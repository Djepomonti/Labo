/***** Variables */
let pizzas = ['calzone', 'reine', 'royale', 'savoyarde'];
const BOX  = document.getElementById('box');
let liste  = 'Liste des pizzas commandées: ';

/***** Boucle FOR */
for(let i = 0; i < pizzas.length; i +=1){
    if (i == pizzas.length-1) {
        liste += pizzas[i] +'.';
        break;
        
    }
    liste += pizzas[i] + ', ';

}

/***** Affichage sur la page web */
BOX.innerText = liste;