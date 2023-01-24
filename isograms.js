//Given a string, return true if the word is an isogram(no duplicate letters). 
//String will always only contain a-z but can be upper or lowercase
//Example: Given ("hydroponics") return false. Given ("SoAPy") return true

function isIsogram(str){
    let set = new Set(str.toLowerCase().split(""))
    let noDuplicateStr = [...set].join("")
    return noDuplicateStr === str.toLowerCase() ? true : false
};

isIsogram("SoAPy") // true
isIsogram("merCEDEs") // false