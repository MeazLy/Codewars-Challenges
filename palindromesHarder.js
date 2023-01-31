// Given a string, return true if the string is a palindrome and false if not. Only alphanumeric characters should be included.
// String will be multiple words long and can contain symbols, punctuation and numbers. 
// Example: Given "A man, a plan, a canal: Panama" return true


function palindrome(string) {
    string = string.replace(/[^a-z0-9]/ig, "").toLowerCase()
    let reversedStr = string.replace(/[^a-z0-9]/ig, "").toLowerCase().split("").reverse().join("")
    
    return string == reversedStr ? true : false
};

palindrome("No 'x' in 'Nixon") // returns true