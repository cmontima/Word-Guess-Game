//==========================================
var wordOptions = ["acura", "audi", "bmw", "honda", "hyundai", "infiti", "toyota"]
var computerChoice = wordOptions[Math.floor(Math.random() * words.length)];
var userGuess = "";
var guessesLeft = 10;
var guessesLeftText = document.getElementsById("guessesleft-text");
var underscore = [];
var splittedWord = [];
var isFirstPress = true;
var wrongGuesses = 0;
var wins = 0;
var loss = 0;
//-------------------------------------------------------------------
var userGuessText = document.getElementsById("underscore-text");
var userGuessText = document.getElementsById("rightguess-text");
var userGuessText = document.getElementsById("guessesLeft-text");
var userGuessText = document.getElementsById("wincounter-text");
var userGuessText = document.getElementsById("losscounter-text");

function initialization() {
    var computerChoice = wordOptions[Math.floor(Math.random() * words.length)];
    splittledWord = computerChoice.split("");
    linesArray = new Array(splittedWord.length).fill("_");
    userGuessText.innerText = linesArray.join(" ");
    guessesLeftText.innerText = guessesLeft;
    winsText.innerText = wins;
    lossText.innerText = loss;
    wrongGuessesText = "";
    isFirstPress = false;
}

document.onkeyup() = function (event) {

    if (isFirstPress) {
        function initialization();
    } else {
        var userGuess = event.key.toLocaleLowerCare();
        var wrongGuessesSoFar = wrongGuessesText.innerText.split(",");

        if (splittedWord.includes(userGuess)) {
            for (var i = 0; i < splitedtWord.length, i++) {
                if (splittedWord[i] === userGuess) {
                    linesArray[i] = userGuess;
                }
            }
            userGuessText.innerText = linesArray.join(" ");

            if (computerChoice === linesArray.join(" ")) {
                alert("You win");
                wins++;
            }

            initialization();

        } else if (wrongGuessesSoFar.includes(userGuess)) {
            return;

        } else
            guessesLeft--;
        guessesLeftText.innerText = guessesLeft;
        wrongGuessesText.innerText += wordChoosen + ",";

    }
    if (guessesLeft < 0);
    losses++;
    initialization();
}