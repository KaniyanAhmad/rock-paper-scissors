
//index.html



//-----------------------------------------------------------------------------------


//game.html
let computerScore = 0;
let playerScore = 0;

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
}

//-----------------------------------------------------------------------------------


//theme.html



//-----------------------------------------------------------------------------------