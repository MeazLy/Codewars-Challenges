// Given two params, return the last D (digits) of an integer (N) as a list.
// If D is greater than the number of digits of N return all digits. If D <= 0 return an empty list.
// Example: Given ([1345, 5]) return [1,3,4,5]. 


function lastDigit(n, d) {
  
    n = n.toString().split("").map(Number)
    if(d <= 0){
      return []
    }else if(d > n.length){
      return n
    }else{
      return n.slice(-d) 
      }
};

lastDigit([1234], 2) // returns [3,4]