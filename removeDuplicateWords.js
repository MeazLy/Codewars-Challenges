// Given a string of words, remove any duplicate words that are consecutive
// Will always be a single string of words, no numbers. Words must be exactly the same as each other
// Example: Given ("This is a test test test string") return "This is a test string"


function removeConsecutiveDuplicates(s){
    s = s.split(" ")
    let nonDuplicatedArr = []
    for(let i = 0; i <= s.length; i++){
      if(s[i] !== s[i+1]){
        nonDuplicatedArr.push(s[i])
      }
    }return nonDuplicatedArr.join(" ")
};

removeConsecutiveDuplicates("Is this this string string correct correct correct") // returns "Is this string correct"