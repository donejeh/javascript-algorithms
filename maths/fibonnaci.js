function fib(n){
    const f = [0,1]
    for (let i = 2; i < n; i++) {
        f[i] = f[i-1] + f[i-2];
    }

    return f;
}

//  console.log(fib(2))
//  console.log(fib(5))
//  console.log(fib(7))

function recursiveFibonacci(n){
    if (n<2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-1)
}

module.exports = {fib,recursiveFibonacci}
