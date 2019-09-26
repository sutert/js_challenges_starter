(function(){

    let startingPopulation = 200;
    let birthRate = 0.1;
    let numberOfWeeks = 5;

    let x = (Math.floor(startingPopulation*(birthRate+1) ** numberOfWeeks))
    let y = numberOfWeeks

    console.log ("There will be " + x + " Cherokee Hares after " + y + " weeks")

})();
