// Given two params, (n,array) return the largest n elements of the array.
// N will always be positive integer, array will be in random order. Returned array must be in ascending order
// Example: Given (3, [7,1,2,4,9,3]) return [4,7,9]

function largestElements(n, array) {
    array = array.sort((a,b ) => b-a)
    let result = []
    for(let i = 0; i < n; i++){
      result.push(array[i])
    }
    return result.sort((a,b) => a-b)
};

largestElements(2, [1,5,9,2,7,5,8]) // return [8,9]