//Given an array of array pairs, with the first number of each pair representing people getting on a bus, and the second number representing the people getting off return the number of people on the bus at the end of the array.
//Will always start the count at 0 since bus would be empty
//Parameters will always be positive numbers
//Example: Given ([[10,0],[3,5],[5,8]]) return 5. 

function peopleOnBus(busStops){
    let peopleOnBus = 0;
    busStops.forEach(stop =>{
      peopleOnBus += stop[0]
      peopleOnBus -= stop[1]
    })
    return peopleOnBus
}
peopleOnBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) // returned 17