//Create a function that randomly returns
//"Rock", "Paper" and "Scissors"
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10);
    if (computerChoice == 0 || computerChoice == 1 || computerChoice == 2 || computerChoice == 3) {
        return "rock";
    } else if (computerChoice == 4 || computerChoice == 5 || computerChoice == 6) {
        return "paper";
    } else if (computerChoice == 7 || computerChoice == 8 || computerChoice == 9) {
        return "scissors";
    } else {}
}

//Create a function that takes the user 
//choice and returns it.
function getHumanChoice() {
    let humanChoice = prompt("Choose one: Rock, Paper or Scissors", "");
    return humanChoice.toLowerCase();
}


// This is the function that calls playRound
// to play 5 round, track scores and
// declares a winner.
function playGame () {
    let humanScore = 0;
    let computerScore = 0;

// Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            console.log("ComputerScore = " + (computerScore += 1));
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You Win!")
            console.log("HumanScore = " + (humanScore += 1));
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You Win!");
            console.log("HumanScore = " + (humanScore += 1));
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose!, Scissors beats Paper");
            console.log("ComputerScore = " + (computerScore += 1));
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You Win!");
            console.log("HumanScore = " + (humanScore += 1));
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            console.log("ComputerScore = " + (computerScore += 1));
        } else if (humanChoice == computerChoice) {
            console.log("It's a draw");
        } else {
            console.log("Not part of the game");
        }
    }

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You are the winner");
    } else if (humanScore < computerScore) {
        console.log("Computer is the winner");
    } else {
        console.log("It's a draw");
    }
}

playGame();


