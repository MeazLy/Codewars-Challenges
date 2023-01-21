// Given a string such as ("....... + ....") return the result of the length of dots operated by the given operator. 
// Operator will be separated by a space on each side. Possible operators are addition, subtraction, division and multiplication. Division in the string will be represented by // instead of /.
// Example: Given (".......... // .....") return 2 

function calculateDots(equation) {
    let [first,operator,second] = equation.split(" ")
    
    switch(operator){
        case "+":
        return ".".repeat(first.length + second.length)
        case "-":
        return ".".repeat(first.length - second.length)
        case "*":
        return ".".repeat(first.length * second.length)
        case "//":
        return ".".repeat(first.length / second.length)
    }
};

calculateDots("........ * ....") // returns 32