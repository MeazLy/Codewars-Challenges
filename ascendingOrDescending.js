// Given an array of integers, return "ascending" or "descending" depending if the array is in ascending or descending order. Return "no" if otherwise.
// Array can contain negative numbers and will always be valid integers. 
// Example: Given ([1,2,3,7,8,9]) return "ascending"


function ascendingOrDescending(array) {
    let ascending = true
    let descending = true
    
    for(let i = 1; i < array.length; i++){
      if(array[i] > array[i-1]){
        descending = false
      }else if(array[i] < array[i-1]){
        ascending = false
      }
    }
    
  return ascending ? "ascending" : descending ? "descending" : "no"
};

ascendingOrDescending([12,7,5,2,1,-5]) // return "descending"