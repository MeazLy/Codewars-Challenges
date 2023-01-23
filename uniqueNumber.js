//Given an array of numbers, return the one unique number
//Given array will always have at least 3 numbers
// Unique number can be anywhere in the given array
//Example: Given [1,1,1,1,2] return 2.

function findUnique(arr) {
    let sortedArr = arr.sort((a,b)=>a-b)
    return sortedArr[0] === sortedArr[1] ? sortedArr[sortedArr.length -1] : sortedArr[0]
};

findUnique([4,4,4,5,4,4]) // Returned 5
  