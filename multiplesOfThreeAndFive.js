// Given a number, return the sum of all multiples of 3 and 5 below that number. If number is a multiple of both 3 and 5, count it only once.
// Given number will always be a positive integer
// Example: Given (10) return 23


function sumOfMultiples(number){
    let sum = 0;
    for(let i = 0; i < number; i++){
      if(i % 3 == 0 && i % 5 == 0){
        sum += i
      }else if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum
};

sumOfMultiples(12) // returns 33 