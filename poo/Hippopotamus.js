class Hippopotamus {

    constructor(name, weight, tusksSize) {

        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;

    }

    swim() {

        this.weight = this.weight - 0.3;

    }

    eat() {

        this.weight = this.weight + 1.0;

    }

    fight(enemy) {

        if(this.tusksSize > enemy.tusksSize) {

            console.log("Vous avez gagné le combat");

        }
        else {

            console.log("Vous avez perdu le combat");

        }

    }

    toString() {

        return "Name : " + this.name + ", weight: " + this.weight + ", tusksSize : " + this.tusksSize + ".";

    }

    run() {

        for(let i = 1; i < 3; i++) {

            for(let j = 1; j < 7; j++) {

                for(let k = 1; k < 15; k++) {

                        this.eat();
                        this.eat();
                        this.swim();
                        this.swim();
                        this.swim();

                }

                console.log(this.toString());

            }

        }

    }

}

module.exports = Hippopotamus