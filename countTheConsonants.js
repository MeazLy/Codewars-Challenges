//Given a single string, return the count of how many consonants there are
//Will always be a string
//String can include upper and lower case, numbers and symbols
//Given "abecadtra" return 5, given "840327451" return 0 


function countTheConsonants(str){
    return str.replace(/[^a-z]/ig, "").replace(/[aeiou]/ig, "").length;
}

countTheConsonants("abecadtra12%1")