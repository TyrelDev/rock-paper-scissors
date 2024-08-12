// Variables to hold the score 
let computerScore = 0,
    playerScore = 0;

// Create a function for the computer choice

function getComputerChoice() {
    // Randomly generate a number for the computer choice
    computerChoice = Math.floor(Math.random() * 3) ;
    
    // Create if to condition the computer's choice
    if (computerChoice == 0){
        return "rock";
    }else if (computerChoice == 1){
        return "paper";
    }else {
        return "scissors";
    }

}

// Create a function for the human choice 

function getPlayerChoice() {
    //Prompt player to select their choice
    playerChoice = prompt('Please select a choice. Rock, Paper or Scissors', 'Rock');
    return playerChoice.toLowerCase();
}

// Create the playround function 

function playRound(computerChoice, playerChoice) {

}
console.log(getPlayerChoice());
console.log(getComputerChoice());