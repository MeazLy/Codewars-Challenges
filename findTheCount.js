// Given an array of numbers, return the count of the most reoccuring number in the array. If the array is empty return 0.
//Array will always be numbers, the numbers can be positive or negative. 
//Example: Given [1,1,2,5,6,6,7,2,1] return 3

function mostFrequentItemCount(arrOfNums) {
    arrOfNums = arrOfNums.map((val) => arrOfNums.filter(el => el == val).length)
    arrOfNums = arrOfNums.sort((a,b) => a-b)
    return arrOfNums[arrOfNums.length-1] || 0
}

mostFrequentItemCount([2,5,6,1,2,9,9,7,6,4,9,9]) // returns 4