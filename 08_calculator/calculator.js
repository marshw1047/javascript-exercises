const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  let sum = 0;

	for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  let sum = 1;

	for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }

  return sum;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  }
  else return factorial(x -1) * x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
