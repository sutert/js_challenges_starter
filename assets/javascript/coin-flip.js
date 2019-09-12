  /* Create a script that has a random chance of printing out heads or tails. */
    
    //document.write("hello from coin-flip.js");

    let whatDoYouThink =prompt("heads or tails")
    let coinFlipperButton  = document.querySelector("#coinFlipper")
    
    coinFlipperButton.addEventListener("click", function(){
        if(Math.random() >.5){
            console.log("heads");
        }else{
            console.log("tails")
        }  
})();
