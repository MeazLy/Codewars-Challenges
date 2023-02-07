// Given a string, sum all of the integers found in the string and return it.
// String will only contain positive numbers, numbers together in the string must stay together, so "he11o th3re" will be 11 + 3, not 1 + 1 + 3.
// Example: ("The Great Depression lasted from 1929 to 1939.") // returns 3868

function sumOfIntegersInString(s){
    let sum = 0
    let digits = s.match(/\d+/g)
    if(digits){
    for(digits of digits){
      sum += Number(digits)
    }
  }
    return sum
};

sumOfIntegersInString("c4ts ar3 gr34t") // return 41