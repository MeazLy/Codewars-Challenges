// Given two params, a start and end number, count the amount of numbers in between but exclude any numbers with a 5 in it. Include the start and end numbers.
// Numbers can be positive or negative, start number will always be smaller than end number
// Example: Given (1,9) return 8


function removeTheFives(start, end){
    let count = 0
    
    for(let i = start; i <= end; i++){
      if(!i.toString().includes(5)){
         count ++
         }
    }return count
};

removeTheFives(4,17) // returns 12