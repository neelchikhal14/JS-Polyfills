let myCar = {
  color: 'black',
  company: 'BMW',
};

function purchaseCar(currency, price) {
  return console.log(
    `I purchased ${this.company} car , in a ${this.color} color at a price of ${currency} ${price}`
  );
}

// using apply
purchaseCar.apply(myCar, ['INR', 700000]);

// creating polyfill
Function.prototype._apply = function (context = {}, arrayOfArgs = []) {
  //check if function
  if (typeof this !== 'function') throw new Error(this + 'Its not callable');
  //check if args passed in array
  if (!Array.isArray(arrayOfArgs))
    throw new Error('Args must be passed in an array');

  // attach function to context
  context.fn = this;

  // execute the function
  context.fn(...arrayOfArgs);
};
//testing pollyfill
purchaseCar._apply(myCar, ['INR', 2000000]);
