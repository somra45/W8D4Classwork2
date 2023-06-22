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

Array.prototype.myBind = function () {
    let that = this;
    let args = Array.prototype.slice.call(arguments).slice(1);
    let ctx = arguments[0];

    return function () {
        if (!(arguments === undefined)) {
            let callArgs = Array.prototype.slice.call(arguments);
            callArgs.concat(args);
            return that.apply(ctx,callArgs);
        } else {
            return that.apply(ctx,args);
        }
    };
};




