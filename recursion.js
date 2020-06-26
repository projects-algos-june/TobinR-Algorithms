// Tobin Risser's Recursion

// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num){
    if (num === 1) return 1;
    if (num > 0){
        return num + rSigma(num - 1);
    } else {
        return num + rSigma(num + 1);
    }
}

// console.log(rSigma(5));
// console.log(rSigma(-1));
// console.log(rSigma(2.5));

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function factorial(n){
    if (n === 1) return 1;
    return Math.floor(n) * factorial(Math.floor(n - 1)); 
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(6.5));
