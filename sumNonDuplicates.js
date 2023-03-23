// Given an array of numbers, sum the array but ignore any duplicate numbers
// Array can be any length, duplicates can be in any order in the array
// Example: Given [1,4,2,5,6,1,2] return 15

function sumNonDuplicates(numList) {
    let uniqueArray = []
    
    for(let i = 0; i < numList.length; i++){
      if(numList.indexOf(numList[i]) === i && numList.lastIndexOf(numList[i]) === i){
         uniqueArray.push(numList[i])
         }
    }
    return uniqueArray.reduce((acc, c) => acc + c, 0)
};

sumNonDuplicates([6,1,7,7,8]) // returns 15