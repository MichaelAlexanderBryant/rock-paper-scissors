// Initialize wins and games played.
let playerWins = 0;
let computerWins = 0;
let gamesPlayed = 0;

// Initialize player score to zero for UI.
const player = document.getElementById('player');
const pScore = document.createElement('div');
pScore.textContent = "0";
player.appendChild(pScore)

// Initialize computer score to zero for UI
const cpu = document.getElementById('cpu');
const cScore = document.createElement('div');
cScore.textContent = "0";
cpu.appendChild(cScore)

// For displaying round result.
const roundResult = document.querySelector('#round-result');
const content = document.createElement('div');

// For displaying game result.
const gameResult = document.querySelector('#final-result');
const finalResult = document.createElement('div')

// Generate computer choice.
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

// Determine round winner.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return ["draw", `both chose ${playerSelection}`];
    }
    let youWin = (playerSelection == "paper") && (computerSelection == "rock") || (playerSelection == "rock") && (computerSelection == "scissors") || (playerSelection == "scissors") && (computerSelection == "paper");
    if (youWin) {
        return ["win", `${playerSelection} beats ${computerSelection}`];
    }
    return ["lose", `${computerSelection} beats ${playerSelection}`];
};

// Connect to buttons.
const buttons = document.querySelectorAll('button');

// In the event a button is pressed, play a round.
buttons.forEach((button) => { button.addEventListener('click', () => {
    // Play round.
    let computerSelection = getComputerChoice();
    let playerSelection = button.id;
    let result = playRound(playerSelection, computerSelection);
    // If player wins, increment their score and display on UI.
    if (result[0] == "win") {
        playerWins++;
        pScore.textContent = playerWins.toString();
        player.appendChild(pScore);
    }
    // Else if computer wins, increment their score and display on UI.
    else if (result[0] == "lose") {
        computerWins++;
        cScore.textContent = computerWins.toString();
        cpu.appendChild(cScore);
    }
    // Round result to show after each round.
    content.textContent = result[1];
    roundResult.appendChild(content);

    // If games played is 5 then display the results of the game.
    gamesPlayed++;
    if (gamesPlayed == 5) {
        if (playerWins == computerWins) {
            finalResult.textContent = "Final result: it's a draw!";
            gameResult.appendChild(finalResult);
        }
        else if (playerWins > computerWins) {
            finalResult.textContent = "Final result: you won!";
            gameResult.appendChild(finalResult);
        }
        else {
            finalResult.textContent = "Final result: CPU wins!";
            gameResult.appendChild(finalResult);
        }

        // Disable buttons.
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;

        // Display message to refresh browser to play again.
        const choices = document.getElementById('choices');
        const refresh = document.createElement('div');
        refresh.textContent = "refresh browser to play again";
        choices.appendChild(refresh)
    }
  });
});