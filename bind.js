let myCar = {
  color: 'black',
  company: 'BMW',
};

function purchaseCar(currency, price) {
  return console.log(
    `I purchased ${this.company} car , in a ${this.color} color at a price of ${currency} ${price}`
  );
}

// using bind
//variation-1
const boundFunction = purchaseCar.bind(myCar, 'INR', 700000);
boundFunction();
// variation-2
const boundFunction2 = purchaseCar.bind(myCar);
boundFunction('INR', 700000);
// variation-3
const boundFunction3 = purchaseCar.bind(myCar, 'INR');
boundFunction(700000);

// creating polyfill
Function.prototype._bind = function (context = {}, initialArgs) {
  //check if function is passed
  if (typeof this !== 'function') throw new Error(this + 'Its not callable');
  return function (finalArgs) {
    //attach function to context
    context.fn = this;
    //execute the function
    context.fn(...initialArgs, ...finalArgs);
  };
};
//testing pollyfill
const modifiedboundFunc = purchaseCar.bind(myCar, 'INR', 700000);
modifiedboundFunc();
// variation-2
const modifiedboundFunc2 = purchaseCar.bind(myCar);
modifiedboundFunc('INR', 700000);
// variation-3
const modifiedboundFunc3 = purchaseCar.bind(myCar, 'INR');
modifiedboundFunc(700000);
