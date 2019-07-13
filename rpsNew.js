function game() {
    let userWins = 0;
    let computerWins = 0;
    let ties = 0;

    let roundCount = 5;

    let computerInput = null;
    let userInput = null;

    for (let i = 0; i < roundCount; i++) {
        userInput = null;
        while (userInput === null) {
            userInput = getUserInput();
        }
        computerInput = getComputerInput();

        let result = playRound(computerInput, userInput);
        if (result === "pWin") {
            userWins++;
            playerWinText(computerInput, userInput);
        }
        else if (result === "cWin") {
            computerWins++;
            computerWinText(computerInput, userInput);
        }
        else if (result === "tie") {
            ties++;
            tieText(computerInput, userInput);
        }
    }

    console.log(`Player wins: ${userWins}.`);
    console.log(`Computer wins: ${computerWins}.`);
    console.log(`Ties: ${ties}.`);
}

function playRound(computerInput, userInput) {
    //Case insensitive check against player input and computerplay results
    if (userInput === computerInput) {
        return "tie";
    }
    else if (userInput === "rock" && computerInput === "scissors"){
        return "pWin";
    }
    else if (userInput === "paper" && computerInput === "rock"){
        return "pWin";
    }
    else if (userInput === "scissors" && computerInput === "paper"){
        return "pWin";
    }
    else if (userInput === "rock" && computerInput === "scissors"){
        return "pWin";
    }
    else {
        return "cWin"
    }
}

function getComputerInput() {
    //randomly returns an RPS result
    let rand = Math.floor((Math.random() * 100));

    if (rand <= 33) {
        return "rock";
    }
    else if (rand <= 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playerWinText(computerInput, userInput) {
    console.log(`Congratulations, you win! ${userInput} beats ${computerInput}!`);
}

function computerWinText(computerInput, userInput) {
    console.log(`Unfortunate, you lose! ${computerInput} beats ${userInput}!`);
}

function tieText(computerInput, userInput) {
    console.log(`It's a tie! ${userInput} matches ${computerInput}!`);
}


//testbed stuff
//Not part of the RPS program
function primeCalc(max) {
    for (let i = 2; i < max; i++) {
        if (max % i === 0) {return "Is Not Prime";}
    }
    return "Is Prime";
}