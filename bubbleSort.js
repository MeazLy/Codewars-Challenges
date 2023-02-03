// Given an array of numbers, bubblesort once so the largest number goes to the end
// Array will be in random order and will always contain valid integers
// Example: Given ([9, 7, 5, 3, 1, 2, 4, 6, 8]) return [7, 5, 3, 1, 2, 4, 6, 8, 9]

function bubblesortOnce(a) {
    let result = [...a]
  
    for(let i = 0; i < result.length - 1; i++){
      if(result[i] > result[i + 1]){
        [result[i],result[i + 1]] = [result[i + 1], result[i]]
      }
    } 
    return result
};
  

bubblesortOnce([5,1,9,2,7,6]) // returns [5,1,2,7,6,9]
  