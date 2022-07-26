"use strict";

function fib(n) {
  var f = [0, 1];

  for (var i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f;
} // console.log(fib(2))
// console.log(fib(5))
// console.log(fib(7))


module["export"] = fib;