var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

var computerGuess = Math.floor(Math.random()*computerChoices.length); 

document.onkeyup = function(event) {
    userGuess = event.key;
    console.log(userGuess);
    console.log(computerGuess);
    console.log(wins);
    console.log(losses);

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "c"));




    if (userGuess === computerGuess){
        wins++;
    }
    
    else if (userGuess !== computerGuess){
        losses++;
    };
    
    

}

