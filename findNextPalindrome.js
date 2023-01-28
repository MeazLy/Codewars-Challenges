//Given a number, find and return the next number that is a palindrome.
//Number will always be a valid positive integer
//Example: Given 187 return 191.


function nextPalindrome(val) {
    let j = true;
    let i = val
    while(j){
      i++
      if(i.toString() == [...i.toString()].reverse().join("")){
        j = false
        return i
    }
}
};
  
nextPalindrome(2541) // returns 2552