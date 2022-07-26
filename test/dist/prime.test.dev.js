"use strict";

var prime = require('../maths/prime');

describe('#isPrime', function () {
  test('prime(1) return True', function () {
    expect(prime(1)).toBeFalsy();
  });
  test('prime(4) return True', function () {
    expect(prime(4)).toBeFalsy();
  });
  test('prime(5) return True', function () {
    expect(prime(5)).toBeTruthy();
  });
  test('prime(7) return True', function () {
    expect(prime(7)).toBeTruthy();
  });
});