const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (numbers) {
  return numbers.reduce(
    (total, currentNum) => total + currentNum,
    0
  );
};

const multiply = function (numbers) {
  return numbers.reduce(
    (product, currentItem) => product * currentItem
  )
};

const power = function (num, exponent) {
  return num ** exponent;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= num; ++i) {
    result *= i;
  }

  return result;
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
