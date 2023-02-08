// Given an integer, return the sum of each individual digit added together
// Integer will always be positive
// Example: Given (4567) return 22


function getSumOfDigits(integer) {
    integer = integer.toString().split("")
    
    return integer.reduce((acc,c) => acc + +c, 0)
};

getSumOfDigits(5173) // returns 16