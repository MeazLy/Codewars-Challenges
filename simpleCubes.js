// Given a number, return the sum of every integer up to that number cubed
// Number will always be a positive integer
// Example: Given (2) return 9

function sumCubes(n){
    let sum = 0
    for(let i = 0; i <= n; i++){
      sum += i * i * i
    }
    return sum
};

sumCubes(3) // returns 36