// Give a number N, return an array that contains the number 1 to N, but replace the numbers with these conditions. "Fizz" if number is a multiple of 3, "Buzz" if the number is a multiple of 5, and "FizzBuzz" if number is a multiple of 3 and 5.
// Number will always be a positive and valid integer
// Example: Given (11) return [1,2,"Fizz",4,"Buzz"]


function fizzbuzz(n){
    let fizz = []
    for(let i = 1; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0)
      fizz.push('FizzBuzz')
    else if (i % 5 == 0)
      fizz.push('Buzz')
    else if (i % 3 == 0)
      fizz.push('Fizz')
    else
      fizz.push(i)
  }
  return fizz
};
  

fizzbuzz(15) // [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
  