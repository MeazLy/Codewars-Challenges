// Given three params (str,loc,num) use the loc to find the corresponding word in the string. The first word represented by 0. Then multiply the string by the third parameter num, return the final string joined by a "-" between each word.
//String will always be valid and can be any length.
//Example: Given ("hello this is my string", 2,5) return "is-is-is-is-is"

function multiplyAndJoin(str,loc,num) {
    let arrOfWords = str.split(" ")
    let word = arrOfWords[loc]
    let arr =[]
    for(let i = 0; i < num; i++){
      arr.push(word)
    }
    
    return arr.join("-")
}; 