const Point = require("Point.js");
const Circle = require("Circle.js");

let point1 = new Point(3,4);

console.log(point1.toString());

point1.setX(4);

console.log(point1.toString());

let circle1 = new Circle(point1, 2);
let point2 = new Point(3,3);

if(circle1.containsPoint(point2)) {

    console.log("p2 est dans c1");

}
else {

    console.log("p2 n'est pas dans c1");

}

console.log("L'aire de C1 est de " + circle1.area().toString());

console.log(circle1.toString());

