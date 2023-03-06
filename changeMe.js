// Given a string, replace all "a/A"'s with 4, all "e/E"'s with 3, and all l's with 1.
// String can be lowercase or uppercase 
// Example: Given "replace me" return r3p14c3 m3"

function changeMe(str){
    return str.replace(/[aA]/g, "4")
              .replace(/[eE]/g, "3")
              .replace(/l/g, "1")
};

changeMe("example") // return "3x4mp1e"