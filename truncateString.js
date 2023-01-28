// Given two params, (str,len) if str is longer than the given max length (len) return the truncated string with "..." as an ending. 
// The "..." will add to length of the string, unless max string length given is less than or equal to 3, then dots do not add to the string length.
//Example: Given ("newchallenge", 7) return "newc...". Given ("newchallenge", 2) return "ne..."

function truncateString(str, num) {
    if(str.length > num && num <= 3){
      return str.slice(0,num) + "..."
    }else if(str.length > num){
      return str.slice(0,num-3) + "..."
    }else{
    return str
}
};

truncateString("interesting", 6) // returns "int..."