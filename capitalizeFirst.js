//Given a string of words, capitalize the first letter of each word and return it
//String will always be a valid string type and will always be more than 2 words.
//Example: Given the string "hello this is my new challenge" return "Hello This Is My New Challenge"

function capitalizeFirstLetter(string){
    let newStr = string.split(" ").map((ele) =>{
    return ele[0].toUpperCase() + ele.slice(1)
})
    return newStr.join(" ")
};

capitalizeFirstLetter("this should be capitalized") // This Should Be Capitalized 