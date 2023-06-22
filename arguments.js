const sum = function() {
    let totalSum = 0;
    let args = Array.prototype.slice.call(arguments);
    args.forEach(element => {
        totalSum += element; 
    });
    console.log(totalSum);
};

// sum(1,2,3);

const sum2 = function(...args) {
    let totalSum = 0;
    args.forEach(element => {
        totalSum += element; 
    });
    console.log(totalSum);
};

// sum2(1,2,3,4);

Function.prototype.myBind = function () {
    let that = this;
    let args = Array.prototype.slice.call(arguments).slice(1)
    let ctx = arguments[0];

    return function () {
        if (typeof arguments != `undefined`) {
            let callArgs = Array.prototype.slice.call(arguments);
            let finalArgs = args.concat(callArgs);
            return that.apply(ctx,finalArgs);
        } else {
            return that.apply(ctx,args);
        }
    };
};

Function.prototype.myBind1 = function (...bindArgs) {
    let that = this;
    let ctx = bindArgs[0];
    let args = bindArgs.slice(1);
    return function (...callArgs) {
        return that.apply(ctx, args.concat(callArgs));
    };
};


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  

//   markov.says("meow", "Ned");

// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind1(pavlov, "meow", "Kush")();

// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind1(pavlov)("meow", "a tree");

// markov.says.myBind(pavlov, "meow")("Markov");
// markov.says.myBind1(pavlov, "meow")("Markov");

// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// const notMarkovSays = markov.says.myBind1(pavlov);
// notMarkovSays("meow", "me");

const curriedSum = function (numArgs) {
    const numbers = [];
    return function _curriedSum (num) {
        numbers.push(num)

        if (numbers.length === numArgs) {
            const totalSum = numbers.reduce(function (acc, ele) {
                return acc += ele;
            })
            console.log(totalSum);
        }

        return _curriedSum
    };

};

// const sum3 = curriedSum(4);
// sum3(5)(30)(20)(1);

Function.prototype.curry = function (numArgs) {
    let that = this;
    const newArray = [];
    return function _curry (arg) {
        newArray.push(arg);

        if (newArray.length === numArgs) {
            return that.apply(null, newArray);
        } else {
            return _curry;
        }
    };
};

Function.prototype.curry = function (numArgs) {
    let that = this;
    const newArray = [];
    return function _curry (...arg) {
        newArray.concat(arg);

        if (newArray.length === numArgs) {
            return that.apply(null, newArray);
        } else {
            return _curry;
        }
    };
};