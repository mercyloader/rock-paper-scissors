//Create a function that randomly returns
//"Rock", "Paper" and "Scissors"
function getComputerChoice() {
    let computer = Math.floor(Math.random() * 10);
    if (computer == 0 || computer == 1 || computer == 2 || computer == 3) {
        return "Rock";
    } else if (computer == 4 || computer == 5 || computer == 6) {
        return "Paper";
    } else if (computer == 7 || computer == 8 || computer == 9) {
        return "Scissors";
    } else {}
}

//Create a function that takes the user 
//choice and returns it.
function getHumanChoice() {
    let human = prompt("Choose one: Rock, Paper or Scissors", "");
    return human;
}

