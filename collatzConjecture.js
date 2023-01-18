//Given a positive number, if it is even divide it by 2. If it's odd, multiply it by 3 and add 1. 
//Repeat until number is equal to 1
//Return the length of steps it took to reach 1
//Example for 20, returns 8 since sequence would be [20,10,5,16,8,4,2,1]

function collatzConjecture(num){
    let collatzCount = 1;
    while(num > 1){
        collatzCount += 1
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
    }return collatzCount
};

collatzConjecture(20)