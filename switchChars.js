// Given a string of a's b's and c's, swap all of the a's with b and vice versa.
// String will always be lowercase and will only contain abc's.
// Example: Given ("aaabbccc") return bbbaaccc


function switchChars(x){
    x = x.split("")
    
    for(let i = 0; i < x.length; i++){
      if(x[i] === "a"){
        x[i] = "b"
      }else if(x[i] === "b"){
        x[i] = "a"
      }
    }return x.join("")
};

switchChars("bbbccaab") // returns aaaccbba