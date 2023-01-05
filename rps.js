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
}

function game(){
    let playerSelection;
    let computerSelection;
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Select rock, paper, or scissors:");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result[0]=="win") {
            playerWins++;
        }
        else if (result[0]=="lose") {
            computerWins++;
        }
        console.log(result[1]);

    }

    if (playerWins == computerWins) {
        return "Final result: it's a draw!";
    }
    else if (playerWins > computerWins) {
        return "Final result: you won!";
    }
    else {
        return "Final result: you lost!";
    }
    
};

console.log(game())