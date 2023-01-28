// Given a string, replace all vowels with a 1 and all non-vowels with a 0. 
// String will always be a valid string, can contain uppercase and lowercase letters, as well as symbols and spaces. 
// Example: Given "abcdefg" return 1000100

function zerosAndOnes(str){

    str = str.split("")
    let newStr = str.map(val => val.match(/[aeiou]/i) ? 1 : 0)
    return newStr.join("")
};

zerosAndOnes("hello there!") // return 01001000101