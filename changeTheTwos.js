// Given a string OR number, replace all 2's or "2"'s with a "t".
// String or number can be passed, but still must return a string.
// Example: Given (572) return "57t"

function changeTheTwos(input) {
  
    input = input.toString().split("")
    
    for(let i = 0; i < input.length; i++){
      if(input[i] == "2"){
        input[i] = "t"
      }
    }return input.join("")
};

changeTheTwos(562622) // returns "56t6tt"