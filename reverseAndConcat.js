// Given two strings, a and b, return a string where the shorter word is at the beginning and end of the string and the longer word is reversed in the middle. 
// If both strings have the same length, treat a as the longer word
// Example: Given ("hi", "there") return "hierehthi". Given ("hello", "there") return "thereollehthere"

function reverseAndConcat(a,b){
    return a.length >= b.length ? b + a.split("").reverse().join("") + b :
    a + b.split("").reverse().join("") + a
};

reverseAndConcat("reverse", "me") // returns "meesreverme"
