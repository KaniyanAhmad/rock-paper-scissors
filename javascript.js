
let computerScore = 0;
let playerScore = 0;
let winner;


function getComputerChoice() {
    const choice = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
}

function playround(playerSelection,computerSelection) {
    if(playerSelection == computerSelection){
        console.log("Draw! Play Again");
        
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        console.log(`"Computer: ${computerScore} \nPlayer: ${playerScore}"`);
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        console.log(`"Computer: ${computerScore} \nPlayer: ${playerScore}"`);
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        console.log(`"Computer: ${computerScore} \nPlayer: ${playerScore}"`);
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        console.log(`"Computer: ${computerScore} \nPlayer: ${playerScore}"`);
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        console.log(`"Computer: ${computerScore} \nPlayer: ${playerScore}"`);
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        console.log(`"Computer: ${computerScore} \nPlayer: ${playerScore}"`);
    }

    
    if(computerScore > playerScore){
        winner = 1;
    }else if(playerScore > computerScore){ 
        winner = 2;
    } else{
        winner = 0;
    }

    return winner;
}

function game() {
    const playerSelection = prompt("Enter Your Choice: \nRock, Paper, or Scrissors").toLowerCase();
    const computerSelection = getComputerChoice();
    
    
        winner = playround(playerSelection,computerSelection);
        

    
}

   for(i=0;i<=5;i++){
        game();
   }
   
    if(winner == 1){
        console.log("Computer Won!");
    }else if(winner == 2){ 
        console.log("You Won!");
    } else if(winner == 0){
        console.log("Tie");
    }