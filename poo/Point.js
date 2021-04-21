class Point {
    #x = 0;
    #y = 0;

    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    get getX() {

        return this.x;

    }

    set setX(newX) {

        this.x = newX;

    }

    get getY() {

        return this.y;

    }

    set setY(newY) {

        this.y = newY;

    }

    toString() {

        return "(" + this.x + "," + this.y + ")";

    }

}

module.exports = Point