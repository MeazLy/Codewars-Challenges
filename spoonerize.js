// Given a string of two words, swap the first letters of each word with one another
// Passed string will always be two words
// Example: Given "burning trick" return "turning brick"

function spoonerize(words) {
    words = words.split(" ")
    
    const wordOne = words[1][0] + words[0].slice(1)
    const wordTwo = words[0][0] + words[1].slice(1)
    
    return `${wordOne} ${wordTwo}`
};

spoonerize("hello there") // "tello hhere"