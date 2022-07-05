const add = function(a,b) {
  return a+b;
  };
  
  add(2,6);
const subtract = function(a,b) {
	return a-b;
};

  subtract(10,4)


const sum = function(a) {
  
  return a.reduce((total, operator) => total + operator, 0);

};
  
sum([]);

const multiply = function(a) {
  return a.reduce((total, operator) => total * operator, 1);
};

multiply([2,4,6,8,10,12,14]);

const power = function(a,b) {
	return Math.pow(a,b);
};

power(4,3);

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  return a * factorial(a-1);
};

factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
