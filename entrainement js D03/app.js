
let commande = (piz, qt)=>{
    let pu;
if (piz == "reine") { pu = 8;}
else if (piz == "royale") { pu = 10;}
else if (piz == "calzone") { pu = 12;}



        let calcul = pu * qt;
        

    return document.getElementsByTagName('div')[0].innerHTML = `
    Total à  payer: ${calcul} &euro;`;
    
};
commande("royale", 2);