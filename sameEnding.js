//Given two strings, return true if the first parameter ends with the second parameter
//Given ("pasta", "sta") return true. Given ("pasta", "astad") return false
//Both parameters will always be strings

function solution(str, ending){
    return str.endsWith(ending) ? true : false;
}

solution("pasta", "sta")