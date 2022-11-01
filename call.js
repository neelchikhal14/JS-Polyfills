let myCar = {
  color: 'black',
  company: 'BMW',
};

function purchaseCar(currency, price) {
  return console.log(
    `I purchased ${this.company} car , in a ${this.color} color at a price of ${currency} ${price}`
  );
}

// using call
purchaseCar.call(myCar, 'INR', 700000);

// creating polyfill

Function.prototype._call = function (context = {}, ...args) {
  //check if the function is passed
  if (typeof this !== 'function') throw new Error(this + 'Its not callable');
  // add function to context object
  context.fn = this;
  // execute the function using ...args
  context.fn(...args);
};

//testing pollyfill
purchaseCar._call(myCar, 'INR', 2000000);
