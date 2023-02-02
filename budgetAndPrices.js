// Given two params, the first a value which will be the budget, and the second an array of items you need. 
// Return a string of which items you can afford based on the given budget and sort them. 
// Example: Given (3, [6, 1, 2, 9, 2]) return "1,2,2"

function budgetAndPrices(budget, prices) {

    return prices.sort((a,b) => a-b).filter((price =>{
      return price <= budget
    })).toString()
};

budgetAndPrices(14, [7, 3, 23, 9, 14, 20, 7]) // returns "3,7,7,9,14"