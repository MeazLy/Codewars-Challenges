//Given two parameters, (str,sep), return an output that replaces each character in str by the amount of times it appears in the total str and joined together by the sep param.
//String will always be a lowercase valid string of letters and sep will always be a valid char or symbol.
//Example: Given ("hello world", ":") return 1:1:3:3:2:1:1:2:1:3:1.


function freqSeq(str, sep) {
    let newStr = str.split("")
    let freq = newStr.map(val => newStr.filter(el => el == val).length)
    return freq.join(sep)
};

freqSeq("hello world", "x") //returns 1x1x3x3x2x1x1x2x1x3x1