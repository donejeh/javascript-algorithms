"use strict";

function isPrime(n) {
  if (n < 2) return false;

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1)); //false

console.log(isPrime(4)); //true

console.log(isPrime(5)); //true

console.log(isPrime(7)); //true
//Big-O = O(sqrt(n))

module.exports = isPrime;