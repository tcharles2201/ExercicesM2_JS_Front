let chaine1;
let chaine2;

var scanf = require('scanf'); 

console.log("Veuillez rentrer la première chaine : ");
scanf("%s", chaine1);

console.log("Veuillez rentrer la deuxième chaine : ");
scanf("%s", chaine2);

if(chaine1 > 2 * chaine2) {

    console.log("La première chaine est deux fois plus longue que la deuxième");

}
else {

    console.log("La première chaine a une longueur inférieure à deux fois celle de la deuxième chaine");

}

