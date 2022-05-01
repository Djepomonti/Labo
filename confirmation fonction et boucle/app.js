let commande= (piz, qt)=>{  
    let prix;
    if (piz=="reine") {prix=10;}
    else if (piz=="calzone") {prix=10;}

let total = qt * prix;

return document.querySelector(".box").innerHTML=`Total à payer = ${total}`;
};

commande("reine",5);