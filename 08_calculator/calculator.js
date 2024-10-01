const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, current) => {
    sum += current;
    return sum;
  }, 0);	
};

const multiply = function(array) {
  return array.reduce((multiplication, current) => {
    multiplication *= current;
    return multiplication;
  }, 1);
};

const power = function() {
	
};

const factorial = function() {
	
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
