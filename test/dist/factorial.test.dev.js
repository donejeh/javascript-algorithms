"use strict";

var factorial = require('../maths/factorial');

describe('#factorial', function () {
  test('factorial(1) return 1', function () {
    expect(factorial(0)).toBe(1);
  });
  test('factorial(1) return 1', function () {
    expect(factorial(1)).toBe(1);
  });
  test('factorial(5) return 24', function () {
    expect(factorial(5)).toBe(24);
  });
  test('factorial(9) return 40320', function () {
    expect(factorial(9)).toBe(40320);
  });
});