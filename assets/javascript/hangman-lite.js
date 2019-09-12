(function(){

    /*Create a variable called word that contains a hangman word, 
    and create a second variable called letter that indicates the 
    letter that the player guessed. Print out "Yeah, the letter x 
    exists y times in my word" if the letter exists (but substitute the 
    actual letter and the number of times). If the letter doesn't 
    exist, print out "Nope, that letter doesn't exist in my word." */
    
   let word = "Oceaniana";
   let letter = "s"

   let result = word.indexOf(letter)
    if (result == -1){console.log("Not Present")} 
    else {console.log("Present")}

   
})();