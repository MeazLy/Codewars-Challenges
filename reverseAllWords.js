// Given a string of words, reverse every word in the string and return it.
// String will always be valid and all words will be separated by a space. Must return the words in the same order.
// Given ("hello reverse me") return "olleh esrever em"


function reverseWords(str) {
    return str.split(" ").map(word => {
    return word.split("").reverse().join("")
  }).join(" ")
};

reverseWords("this is my reversed string") // returns "siht si ym desrever gnirts"