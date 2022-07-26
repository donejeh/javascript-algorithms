"use strict";

function factorial(n) {
  var result = 1;

  for (var i = 2; i < n; i++) {
    result *= i;
  }

  return result;
} // console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))
// console.log(factorial(9))


module.exports = factorial;