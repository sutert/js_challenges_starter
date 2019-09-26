(function () {

    /*Create a variable called word that stores a word we want 
    to test as a palindrome. Write some code that prints out 
    "true" if word is a palindrome, or "false" if its not. */


    let word = "cramer";

    let reverseWord = word.split("").reverse().join("")

    if (word === reverseWord) {

        console.log( word + " is a palindrome" );
    } else {
        console.log( word + " is NOT a palindrome" );
    }

})();