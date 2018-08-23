// first create an array that houses all of the computer guesses.
// next create a blank array to house guesses that the user has made.
// create variables that will house wins/losses/how many turns you have left
// Have the computer guess a letter from the array before the function so the letter does not change every time the user presses a key.
// next create a function 
// create a userGuess variable that looks for what key the user is pressing
// then create a variable that will also look for what key the user is pressing
// create console logs that will read out what is happening in the function
// next create an if statement that lists all of the options the user could access
// create if/else statements to add numbers to the wins and losses as reset the turn count when the user has won or lost the game, also add the make sure to add the code for the random guess on the computers end so the computer will pick a new letter everytime the user wins or loses.
// also create an else statement at the end that will subtract one turn for every letter that is guessed
// create an innnerHTML that will display the current wins and losses count as well as a turn count and the guesses you have already made.


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userChoices = [ ];



var wins = 0;
var losses = 0;
var turns = 10;





var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var duplicateFlag;


document.onkeyup = function (event) {

    userGuess = event.key.toLowerCase();
    duplicateFlag = false;
    
    console.log(userGuess);
    console.log(computerGuess);
    console.log(wins);
    console.log(losses);
    console.log(userChoices);


    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        for (var i = 0; i < userChoices.length; i++) {
            if (userChoices[i] === userGuess) {
                duplicateFlag = true;
            }
        }

        if (!duplicateFlag) {
            // console.log("user chose a dupllicate letter");
            userChoices.push(userGuess[0]);

            if (userGuess === computerGuess) {
                alert("you win!");
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                wins++;
                turns = 10;
                userChoices = [];

            } else if (turns === 1) {
                alert("you lost!");
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                losses++;
                turns = 10;
                userChoices = [];
            } else {
                turns--;
            }
            
           
            // userChoices = [];
        }
    }





    var html = "<p> wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Turns: " + turns + "</p>" + "<p> Your Guess: </p>" + userChoices;
    document.querySelector("#game").innerHTML = html;



}