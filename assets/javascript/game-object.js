//==========================================
var wordOptions = ["acura", "audi", "bmw", "honda", "hyundai", "infiti", "toyota"]
var computerChoice = wordOptions[Math.floor(Math.random() * words.length)];
var wordChoosen = [];
var guessesLeft = 0;
var guessesLeftText = document.getElementsById("guessesleft-text");
var underscore = [];
var splitWord = [];
var isFirstPress = true;
var wrongGuesses =
var wins = 0;
var losses = 0;
//-------------------------------------------------------------------
var userGuessText = document.getElementsById("underscore-text");
var userGuessText = document.getElementsById("rightguess-text");
var userGuessText = document.getElementsById("guessesLeft-text");
var userGuessText = document.getElementsById("wincounter-text");
var userGuessText = document.getElementsById("losscounter-text");




var game = {
    wordOptions: ["acura", "audi", "bmw", "honda", "hyundai", "infiti", "toyota"]
    computerChoice: wordOptions[Math.floor(Math.random() * words.length)],
    wordChoosen: [],
    guessesLeft: 0,
    guessesLeftText: document.getElementsById("guessesleft-text"),
    underscore: [],
    splitWord: [],
    isFirstPress: true,
    wrongGuesses:
    wins: 0,
    losses: 0,
    initialization: () => {

}
}







function initialization() {
    var computerChoice = wordOptions[Math.floor(Math.random() * words.length)];
    splitWord = computerChoice.split("");
    linesArray = new Array(splitWord.length).fill("_");
    userGuessText.innerText = linesArray.join(" ");
    guessesLeftText.innerText = guessesLeft;
    winsText.innerText = wins;
    lossText.innerText = loses;
    wrongGuessesText = "";
    isFirstPress = false;
}

document.onkeyup() = function (event) {

    if (isFirstPress) {
        function initialization();
    } else {
        var userGuess = event.key.toLocaleLowerCare();
        var wrongGuessesSoFar = wrongGuessesText.innerText.split(",");

        if (splitWord.includes(userGuess)) {
            for (var i = 0; i < splitWord.length, i++) {
                if (splitWord[i] === userGuess) {
                    linesArray[i] = userGuess;
                }
            }
            userGuessText.innerText = linesArray.join(" ");

            if (computerChoice === linesArray.join(" ") {
                alert("You win");
                wins++;
                setTimeout(initialization, 2000);
            }

            initialization();
        }
    } else if (wrongGuessesSoFar.includes(userGuess) {
        return;

    } else
        guessesLeft--;   //aqui les quitamos vidas cada que no adivinan correctamente
    guessesLeftText.innerText = guessesLeft;
    wrongGuessesText.innerText += wordChoosen + ","; //concatenar

}
if (guessesLeft < 0);
losses++;
initialization();
    }
}



function validateCorrectInput(userGuess) {

}


function validateIncorrectInput(userGuess) {

}