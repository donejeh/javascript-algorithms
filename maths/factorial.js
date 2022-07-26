function factorial(n){
   
    let result = 1

    for (let i = 2; i < n; i++) {
    result *= i        
    }
    return result;
}

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))
// console.log(factorial(9))


function recursiveFactorial(n){
    if (n < 2) {
        return 1
    }

    return n * recursiveFactorial(n-1)
}
//Big-O = O(n)

console.log(recursiveFactorial(3))
console.log(recursiveFactorial(9))
module.exports = {factorial,recursiveFactorial}
