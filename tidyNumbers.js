// Given a number, return true if the number is tidy (in ascending order) and false if not.
// Number will always be an integer
// Example: Given (12345) return true

function tidyNumber(n){
    const numberArray = Array.from(String(n), Number);
    for(let i = 0; i < numberArray.length - 1; i++){
      if(numberArray[i] > numberArray[i + 1]){
        return false
      
      }
    }
    return true
};

tidyNumber(12354) // returns false