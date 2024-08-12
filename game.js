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
console.log(getComputerChoice());