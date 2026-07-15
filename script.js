//Create a function that randomly returns
//"Rock", "Paper" and "Scissors"
function getComputerChoice() {
    let any = Math.floor(Math.random() * 10);
    if (any == 0 || any == 1 || any == 2 || any == 3) {
        return "Rock";
    } else if (any == 4 || any == 5 || any == 6) {
        return "Paper";
    } else if (any == 7 || any == 8 || any == 9) {
        return "Scissors";
    } else {}
}
