const theArr = [-100, 4, 6, -1000, 67, 49];

// at method

Array.prototype._at = function (place) {
  let element;
  if (!Array.isArray(this))
    throw new Error('Please use this method with an Array');

  const arrLength = this.length;
  if (place > arrLength || place < arrLength * -1) return element;

  if (place < 0) place = place + arrLength;
  element = this[place];
  return element;
};

console.log(theArr._at(-2));
