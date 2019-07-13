
//------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------Game functions actually trigger below this point----------------------------------------
//------------------------------------------------------------------------------------------------------------------------------

let userWins = 0;
let computerWins = 0;
let ties = 0;
let roundCount = 5;

function game(userInput) {
    console.log(userInput);
    let computerInput = getComputerInput();

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

    updateScreen(result, computerInput, userInput);
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

function updateScreen(condition, computerHand, userHand) {
    updateScores(condition);
    updateImages(computerHand, userHand);
}

function updateScores(condition) {
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let tieScore = document.querySelector("#tie-score");
    let playerWinLoseTieText = document.querySelector("#win-lose-text");

    playerScore.textContent = userWins.toString();
    computerScore.textContent = computerWins.toString();
    tieScore.textContent = ties.toString();

    if (condition === "pWin") {
        playerWinLoseTieText.style.color = "lightgreen";
        playerWinLoseTieText.textContent = "Winner!";
    }
    else if (condition === "cWin") {
        playerWinLoseTieText.style.color = "red";
        playerWinLoseTieText.textContent = "Loser!";
    }
    else if (condition === "tie") {
        playerWinLoseTieText.style.color = "lightblue";
        playerWinLoseTieText.textContent = "Tie!";
    }
    else {
        playerWinLoseTieText.textContent = "ERROR WOOPS";
    }
}

function updateImages(computerHand, userHand) {
    let playerHandImage = document.querySelector("#player-choice-image");
    let computerHandImage = document.querySelector("#computer-choice-image");

    //This looks like it's a bad idea
    //But bravery is a great thing
    playerHandImage.setAttribute("src", `img/${userHand}.png`);
    computerHandImage.setAttribute("src", `img/${computerHand}.png`);
    //it works :)
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


//--------------------Document Setup----------------------
//Document selection and event listener setup

let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));













//testbed stuff
//Not part of the RPS program
function primeCalc(max) {
    for (let i = 2; i < max; i++) {
        if (max % i === 0) {return "Is Not Prime";}
    }
    return "Is Prime";
}