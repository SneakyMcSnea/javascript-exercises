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

const power = function(num1, num2) {
  return num1 ** num2;	
};

const factorial = function(numFactorial) {
	if(numFactorial == 0){
    return 1;
  }

  let arrayFactorial = Array.from({length: numFactorial}, (_, index) => index + 1);
  return arrayFactorial.reduce((factorial, current) => {
    factorial *= current;
    return factorial;
  }, 1);
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
