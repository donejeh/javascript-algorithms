const {factorial,recursiveFactorial} = require('../maths/factorial');


describe('#factorial', () => { 
   
   
    test('factorial(1) return 1', () => { 

         expect(factorial(0)).toBe(1)
     })

     test('factorial(1) return 1', () => { 

        expect(factorial(1)).toBe(1)
    })

    test('factorial(5) return 24', () => { 

        expect(factorial(5)).toBe(24)
    })

    test('factorial(9) return 40320', () => { 

        expect(factorial(9)).toBe(40320)
    })
 })