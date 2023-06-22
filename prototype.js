Function.prototype.inherits = function(superClass) {
    function Surrogate() {}
    Surrogate.prototype = superClass.prototype
    this.prototype = new Surrogate()
    this.prototype.constructor = this
};

Function.prototype.inherits = function() {
    this.prototype = Object.create(Superclass.prototype)
    this.prototype.constructor = this
}

function MovingObject (name) {
    this.name = name 
};

function Ship (name) {
    this.name = name;
    Ship.inherits(MovingObject);
};

function Asteroid (name) {
    this.name = name;
    Asteroid.inherits(MovingObject);
};

MovingObject.prototype.fly = function() {
   console.log(`${this.name} am flying`);
};

const ship1 = new Ship(`floaty`);
const object = new MovingObject(`rock`)
console.log(ship1.fly());
