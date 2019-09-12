(function(){

    /*
    Imagine we have a very versatile change machine. 
        Create a variable called amount stores a quantity of dollars, 
        and write some code that produces an array that indicates the 
        number of 1, 5, 10, and 20 bills that the change machine should return. 
        You want the change machine to return the smallest number of bills possible.

    After your code runs you should have a new array of the format [twenties, 
        tens, fives, ones]. For examklple, if amount = 47, you should print an 
        array after your code runs that looks like [2, 0, 1, 2] (two twenties, 
        0 tens, 1 five, 2 ones). */
    

let amount = 47;
let dollarBills = [0,0,0,0]
    console.log(Math.floor(amount/20));

// finding for 20s
dollarBills[0] = Math.floor(amount/20);

amount = amount-Math.floor(amount/20)*20
    console.log(amount)

//finding for 10s
dollarBills[1] = Math.floor(amount/10);
amount = amount-Math.floor(amount/10)*10
    console.log(amount)

        //finding for 5s
dollarBills[2] = Math.floor(amount/5);
amount = amount-Math.floor(amount/5)*5
    console.log(amount)

    console.log(dollarBills)

        //finding for 1s
dollarBills[3] = Math.floor(amount/1);
amount = amount-Math.floor(amount/1)*1
    console.log(amount)
        
    console.log(dollarBills)
})();