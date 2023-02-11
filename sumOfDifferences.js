// Given two strings of equal length, return the number of differences where the positions do not exactly match
// Both parameters will always be strings so no need to worry about validation
// Example: Given ("thanksgiving turkeys", "thanksgiving turtles") return 3

function sumOfDifferences(a,b) {
    let count = 0
    a = a.split("")
    b = b.split("")
    for(let i = 0; i < a.length; i++){
      if(a[i] !== b[i]){
        count += 1
      }
    }
    return count
};

sumOfDifferences("Expresso", "espresso") // return 2