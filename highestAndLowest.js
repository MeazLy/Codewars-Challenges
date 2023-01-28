//Given a string of space separated numbers, return the highest and lowest number also as a string separated by a space.
//Numbers in the string can be negative or positive, string will always contain at least one number.
//Example: Given ("4 2 1 7 3") return "7 1"

function highAndLow(numbers){
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
};

highAndLow("3 1 9 3 2") // returns "9 1"