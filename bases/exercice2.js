let nombre;
let total;

var scanf = require('scanf'); 

console.log("Veuillez rentrer un entier :");
scanf("%d", nombre);

for(let i = 1; i <= nombre; i++) {

    total = total + i;

}

