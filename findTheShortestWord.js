//Given a string of words, find the shortest word and return it's length
//String will always have at least one word, will never be null or undefined

//Example: "For the shortest word what will this return?" // returns 3

function findTheShortestWord(str){
    return str.split(" ").sort((a,b) => a.length - b.length)[0].length;
};

findTheShortestWord("For the shortest word what will this return?");