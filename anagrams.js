//Given two parameters as strings(test,original), return true if they are anagrams of each other.
//Strings will always be passed into the function and can be a mix of capital and lowercase letters.
//Example: Given ("Listen","Silent") return true.

function isAnagram(test, original) {
    return reverse(test) == reverse(original) ? true : false
};
function reverse(str){
    return str.toLowerCase().split("").sort().join("")
};

isAnagram("gainly","lAYINg") // return true