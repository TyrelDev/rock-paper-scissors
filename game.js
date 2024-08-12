// Variables to hold the score 
let computerScore = 0,
    playerScore = 0;

// Create a function for the computer choice

function getComputerChoice() {
    // Randomly generate a number for the computer choice
    compChoice = Math.floor(Math.random() * 3) ;
    
    // Create if to condition the computer's choice
    if (compChoice == 0){
        return "rock";
    }else if (compChoice == 1){
        return "paper";
    }else {
        return "scissors";
    }

}

// Create a function for the human choice 

function getPlayerChoice() {
    //Prompt player to select their choice
    playChoice = prompt('Please select a choice. Rock, Paper or Scissors', 'Rock');
    return playChoice.toLowerCase();
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

// Create the playround function 

function playRound(computerChoice, playerChoice) {
    if (computerChoice == 'rock' && playerChoice == 'rock' 
        || computerChoice == 'paper' && playerChoice == 'paper' 
        || computerChoice == 'scissors' && playerChoice == 'scissors')
        {
        console.log("It's a tie!");
    }else if (computerChoice == 'rock' && playerChoice == 'paper'
        || computerChoice == 'paper' && playerChoice == 'scissors'
        || computerChoice == 'scissors' && playerChoice == 'rock'
    ){
        playerScore++;
        console.log('You won, the computer lost!');
    }else if (computerChoice == 'rock' && playerChoice == 'scissors'
        || computerChoice == 'paper' && playerChoice == 'rock'
        || computerChoice == 'scissors' && playerChoice == 'paper'
    ){
        computerScore++;
        console.log('The computer won, you lost!');
    }
}

playRound(computerChoice, playerChoice);