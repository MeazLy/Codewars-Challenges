// Given a string and an array of indexes, capitalize the letters in the array matching the given indexes.
// String will always be lowercase with no spaces. If a number in the index array does not exist in the string, do nothing.
// Example: Given ("hello", [1,3]) return "hElLo" 

function capitalize(s,arr){

    return s
          .split("")  
          .map((char,index) =>{
        
          if(arr.includes(index)){
            return char.toUpperCase()
          }else{
            return char
          }
    }).join("")
};

capitalize("capitalize"[0,6,7]) // returns "CapitaLIze"