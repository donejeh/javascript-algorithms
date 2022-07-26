const fib = require('../maths/fibonnaci')


describe('#fabonnaciTest', () => {

    test('fib(2) this should return [0, 1] ', () => {

        expect(fib(2)).toEqual([0, 1])

    })

    test('fib(5) this should return [ 0, 1, 1, 2, 3 ] ', () => {

        expect(fib(5)).toEqual([0, 1, 1, 2, 3])

    })

    test('fib(7) this should return [0, 1, 1, 2,3, 5, 8] ', () => {

        expect(fib(7)).toEqual([0, 1, 1, 2, 3, 5, 8])

    })


})