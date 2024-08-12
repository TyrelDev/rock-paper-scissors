// Create a function for the computer choice

function getComputerChoice() {
    // Randomly generate a number for the computer choice
    computerChoice = Math.floor(Math.random() * 3) ;
    
    // Create if to condition the computer's choice
    if (computerChoice == 0){
        return "Rock";
    }else if (computerChoice == 1){
        return "Paper";
    }else {
        return "Scissors";
    }

}

// Create a function for the human choice 

function getPlayerChoice() {
    //Prompt player to select their choice
    playerChoice = prompt('Please Select a Number. Rock: 0 , Paper: 1, Scissors: 2', 0);
    return playerChoice;

}
console.log(getPlayerChoice());
console.log(getComputerChoice());