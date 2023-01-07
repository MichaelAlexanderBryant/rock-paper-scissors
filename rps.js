let playerWins = 0;
let computerWins = 0;
let gamesPlayed = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "rock";
    }
    else if (choice == 1){
        return "paper";
    }
    return "scissors";
};

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
        return ["draw", "Draw!"];
    }

    let youWin = (playerSelection == "paper") && (computerSelection == "rock") || (playerSelection == "rock") && (computerSelection == "scissors") || (playerSelection == "scissors") && (computerSelection == "paper");

    if (youWin) {
        return ["win", `You win: ${playerSelection} beats ${computerSelection}!`];
    }

    return ["lose", `You lose: ${computerSelection} beats ${playerSelection}!`];
};

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => { button.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = button.id;
    let result = playRound(playerSelection, computerSelection);
    console.log(result[1]);
    if (result[0] == "win") {
        playerWins++;
    }
    else if (result[0] == "lose") {
        computerWins++;
    }
    gamesPlayed++;
    if (gamesPlayed == 5) {
        if (playerWins == computerWins) {
            console.log("Final result: it's a draw!")
        }
        else if (playerWins > computerWins) {
            console.log("Final result: you won!")
        }
        else {
            console.log("Final result: you lost!")
        }
        playerWins = 0;
        computerWins = 0;
        gamesPlayed = 0;
    }
  });
});