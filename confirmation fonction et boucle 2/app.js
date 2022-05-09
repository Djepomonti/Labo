let pizza=["calzone", "reine", "royale", "savoyarde"]

let box = document.querySelector(".box")
let liste = "liste de nos pizzas: ";

for( let i = 0; i < pizza.length; i +=1){
    if (i == pizza.length-1)  {
        liste += pizza[i] += '.';
        break; }
    liste += pizza[i] += ', ';
}








box.innerHTML=liste;