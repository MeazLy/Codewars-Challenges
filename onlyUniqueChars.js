// Given a string, return true if the string contains only unique characters and false if not. String can contain symbols as well.
// Characters are case sensitive, "d" is a different character than "D".
// Example: Given "hgfijk" return true


function hasUniqueChars(str){
    let unique = new Set(str)
    
    return unique.size === str.split("").length ? true : false
};

hasUniqueChars("qwerty") // returns true