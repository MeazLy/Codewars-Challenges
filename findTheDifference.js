// Given an array of numbers, find the difference between the largest number and the smallest
// The numbers in the array can be negative or positive, and in any order
// Example: Given [27, 2, 9, 10, 6, 1] return 26.

function findTheDifference(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
};

findTheDifference([7,1,2,28,30,3,42]) // returns 41


