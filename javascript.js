

function getComputerChoice() {
    const choice = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
}

for(i=100;i>=0;i--){
    console.log(getComputerChoice());
}

