const theArr = [1, 2, 3, 4, 5];

//reduce method

Array.prototype._reduce = function (cb, acc) {
  // check if using with array
  if (!Array.isArray(this))
    throw new Error('_reduce method can oly be used with array');

  for (let i = 0; i < this.length; i++) {
    // acc = acc ? cb(acc, this[i], i, this) : this[i];
    if (acc) {
      acc = cb(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

console.log(theArr._reduce((acc, item) => acc + item, 0));
