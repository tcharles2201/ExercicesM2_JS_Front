const nombres = [];
let indiceMax;
let valueMax;
let total;
let moyenne;
var scanf =  require("scanf");

while(nombres.length <= 5) {

    console.log("Entrez un nombre : ");
    let value;
    scanf("%d", value);
    nombres.push(value);

}