
//game.html
let computerScore = 0;
let playerScore = 0;
let playerSelection = '';
let round = 0;
let userComment = '';


const playerRock = document.getElementById("rock");

const playerPaper = document.getElementById("paper");

const playerScissors = document.getElementById("scissors");


function getComputerChoice() {
    const choice = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choice[randomChoice];
}

function game(playerSelection,computerSelection) {
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
     round +=1;


}

function imgEmbedPlayer(choice) {
    const selectionWindow = document.getElementById('playerCharacter');
    selectionWindow.innerHTML = ''; // Clear existing content
    const img = document.createElement('img');
    img.src = `../images/${choice}.png`;
    selectionWindow.appendChild(img);
}

function imgEmbedComputer(choice) {
    const selectionWindow = document.getElementById('computerCharacter');
    selectionWindow.innerHTML = ''; // Clear existing content
    const img = document.createElement('img');
    img.src = `../images/${choice}.png`;
    selectionWindow.appendChild(img);
}

function imgRemove() {
    const playerCharacter = document.getElementById('playerCharacter');
    const computerCharacter = document.getElementById('computerCharacter');
    
    while (playerCharacter.firstChild) {
        playerCharacter.removeChild(playerCharacter.firstChild);
    }
    
    while (computerCharacter.firstChild) {
        computerCharacter.removeChild(computerCharacter.firstChild);
    }
}

function click(){
    let computerSelection = getComputerChoice();
    userComment = computerSelection;
    imgRemove();
    imgEmbedPlayer(playerSelection); 
    imgEmbedComputer(computerSelection); 
    game(playerSelection, computerSelection);
    scoreRemove();
    score();
    console.log(computerSelection);
    console.log(round);

    if (computerScore === 5 || playerScore === 5)
        endScreen();
}

function scoreRemove() {
    const playerSide = document.getElementById('scoreContainer');
    const computerSide = document.getElementById('scoreContainer');
    const comments = document.getElementById('scoreComment');
    
    while (playerSide.firstChild) {
        playerSide.removeChild(playerSide.firstChild);
    }
    
    while (computerSide.firstChild) {
        computerSide.removeChild(computerSide.firstChild);
    }
    
    while (comments.firstChild) {
        comments.removeChild(comments.firstChild);
    }
   
}

function score() {
    const scoreWindow = document.getElementById('scoreContainer');


    
    const playerSide = document.createElement('p');
    playerSide.textContent = `${playerScore}`;
    scoreWindow.appendChild(playerSide);

    const slash = document.createElement('p');
    slash.textContent = '/';
    scoreWindow.appendChild(slash);

    const computerSide = document.createElement('p');
    computerSide.textContent = `${computerScore}`;
    scoreWindow.appendChild(computerSide);

    const commentContainer = document.getElementById('scoreComment');
    const scoreComment = document.createElement('p');
    
    if (playerSelection === userComment) {
        scoreComment.textContent = 'TIE';
        commentContainer.appendChild(scoreComment);
    } 

    // else if (playerScore > computerScore) {
    //     scoreComment.textContent = 'YOU WON'
    //     commentContainer.appendChild(scoreComment);
    // } else if (playerScore < computerScore) {
    //     scoreComment.textContent = 'COMPUTER WON'
    //     commentContainer.appendChild(scoreComment);
    // }


}




function endScreen() {
    const popupWrapperContainer = document.getElementById('popupWrapperContainer');
    const popupImg = document.getElementById('popupImg');

    const img = document.createElement('img');
    if (computerScore > playerScore) {
        audio('userDefeat');
        img.src = '../images/computerEndScreen.png';
    } else if (computerScore < playerScore) {
        audio('userWon');
        img.src = '../images/userEndScreen.png';
    }

    popupWrapperContainer.style.display = 'flex';

    popupImg.appendChild(img);


}

playerRock.addEventListener('click', function() {
    playerSelection = 'rock';
    imgEmbedPlayer('rock');
    click();
    audio('playerSelection');
});
playerPaper.addEventListener('click', function() {
    playerSelection = 'paper';
    imgEmbedPlayer('paper');
    click();
    audio('playerSelection');
});
playerScissors.addEventListener('click', function() {
    playerSelection = 'scissors';
    imgEmbedPlayer('scissors');
    click();
    audio('playerSelection');
});


//Popup's
const playAgainBtn = document.querySelector('#popupPlayAgain > a > button');

playAgainBtn.onclick = function () {
    playAgainBtn.style.boxShadow = 'inset 25px 25px 50px #383838, inset -25px -25px 50px #4c4c4c';
    audio('playAgain');
}

const mainMenuBtn = document.querySelector('#popupMenu > a > button');

mainMenuBtn.onclick = function () {
    mainMenuBtn.style.boxShadow = 'inset 25px 25px 50px #383838, inset -25px -25px 50px #4c4c4c';
    audio('mainMenu');
}

//Sound Mute/notMute Button
const sound = document.querySelector('.sound');
const soundImg = document.querySelector('.sound > img');

sound.onclick = function () {
    if (soundImg.alt === 'notMuted') {
        soundImg.src = '../images/volume-mute.png';
        soundImg.alt = 'muted';
    } else {          
        soundImg.src = '../images/volume.png';
        soundImg.alt = 'notMuted';
    }
}

//Sounds
function audio(choice) {
 const playerSelectionAudio = document.querySelector('#selection');
 const userWon = document.querySelector('#userWon');
 const userDefeat = document.querySelector('#userDefeat');
 const btn = document.querySelector('#btn');
 const soundImg = document.querySelector('.sound > img');

 
 if (soundImg.alt === 'notMuted') {
    if (choice === 'playerSelection') {
        if(!playerSelectionAudio) return;
        playerSelectionAudio.currentTime = 0;
        playerSelectionAudio.play()
    }

    if (choice === 'userWon') {
        if(!userWon) return;
        userWon.play();
    } else if (choice === 'userDefeat') {
        if(!userDefeat) return;
        userDefeat.play();
    }

    if (choice === 'playAgain') {
        btn.play();
        btn.addEventListener('ended', function () {
        location.href = './game.html';
        });
    } else if (choice === 'mainMenu') {
        btn.play();
        btn.addEventListener('ended', function () {
        location.href = '../index.html';
        });
    }
 }
}