class Circle {

    constructor(point1, radius) {

        this.point1 = point1;
        this.radius = radius;

    }

    area() {

        return Math.PI * (Math.pow(this.radius, 2));

    }

    containsPoint(point2) {

        this.diffX = this.point1.getX() - point2.getX();
        this.diffY = this.point1.getY() - point2.getY();

        this.distance = Math.sqrt(Math.pow(diffX, 2) +  Math.pow(diffY, 2));

        if(distance <= this.radius && this.distance >= 0) {

            console.log("Le cercle contient le point");

        }
        else {

            console.log("Le cercle ne se trouve pas dans le point");

        }

    }

    toString() {

        return "Centre : " + this.point1.toString() + ", Rayon :" + this.radius.toString() + ")";

    }

}

module.exports = Circle