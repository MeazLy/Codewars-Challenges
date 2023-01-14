// Given an array of numbers, return the number that is different from the rest. 
// Only a single number will be different, numbers can be positive or negative
// Example: Given ([5,5,5,5,2,5,5,5]) return 2

function findTheStrayNum(numbers) {
    numbers = numbers.sort((a,b) => a-b)
    return numbers[0] === numbers[1] ? numbers[numbers.length-1] : numbers[0]
};

findTheStrayNum([6,6,6,7,6,6,6]) // returns 7

