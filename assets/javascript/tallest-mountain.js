(function(){

    /*Create an array that contains a bunch of numbers representing 
    the heights of various mountains. Write some code that identifies 
    the height of the tallest of the available mountains and prints it out. */

   let mtHeights = [1600,20308,18009,17402];
    let largest=0;
    for (let i=0; i < mtHeights.length; i++) {
        if( largest <= mtHeights[i]){ 
            largest = mtHeights[i];
            
        }
        
    }

console.log(largest)

})();
