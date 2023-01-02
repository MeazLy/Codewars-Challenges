// Given a number, square each digit of the number and concatenate them
// Argument passed will be always be integer
// Return an integer

//Given 2112, return 4114
//Given 9119, return 811181


function squareDigits(num){
    let newNum = "";
    let arrayOfDigits = Array.from(String(num), Number);
  
    arrayOfDigits.forEach(x => {
      let res = x * x;
      newNum += res;
    });
    return parseInt(newNum);
}
    
squareDigits(2112)
squareDigits(9119)
    
  
   