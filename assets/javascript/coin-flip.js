(function(){ 
 

    let coinFlipper  = document.querySelector("#coinFlipper")
    
    coinFlipper.addEventListener("click", function(){
        if(Math.random() >.5){
            console.log("heads");
        }else{
            console.log("tails")
        }
    })
    })();