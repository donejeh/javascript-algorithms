const prime = require('../maths/prime');


describe('#isPrime', () => { 
   
   
    test('prime(1) return True', () => { 

         expect(prime(1)).toBeFalsy()
     })

     test('prime(4) return True', () => { 

        expect(prime(4)).toBeFalsy()
    })

    test('prime(5) return True', () => { 

        expect(prime(5)).toBeTruthy()
    })

    test('prime(7) return True', () => { 

        expect(prime(7)).toBeTruthy()
    })
 })