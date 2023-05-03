// Given a string of words separated by spaces, remove any words that have a single exclamation mark. 
// String can be any length and any amount of !'s.
// Example: Given the string "Hello! Hi!! Hey!" return "Hi!!"

function remove(string) {
  
    return string
            .split(" ")
            .filter(w => w.split("!").length != 2)
            .join(" ")
};

remove("Hey! There!! Hello!") // returns "There!!"