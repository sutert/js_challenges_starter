(function(){

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