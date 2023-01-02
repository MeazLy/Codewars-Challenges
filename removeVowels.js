// Given a single string remove all vowels present
// Convert all letters to lowercase
// Return string

// Given "Apple" return "ppl"
// Given "Watermelon" return "wtrmln"

function removeVowels(str){
    return str.toLowerCase().replace(/[aeiou]/g, "");
};

removeVowels("Apple");
removeVowels("Watermelon");