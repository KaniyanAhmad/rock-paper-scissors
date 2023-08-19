
//index.html

const newGameBtn = document.querySelector('.newGame');

newGameBtn.onclick = function () {
    newGameBtn.style.boxShadow = 'inset 25px 25px 50px #383838, inset -25px -25px 50px #4c4c4c';
    
    audio('newGame');
    btnAudio.addEventListener('ended', function () {
        gotoPage('game');
    });

    if (soundImg.alt === 'muted')
        gotoPage('game');
    
    
}

function gotoPage (choice) {
    if (choice === 'game')
        location.href = './pages/game.html'
}
//Sound Mute/notMute btn

const sound = document.querySelector('.sound');
const soundImg = document.querySelector('.sound > img');

sound.onclick = function () {
    if (soundImg.alt === 'notMuted') {
        soundImg.src = './images/volume-mute.png';
        soundImg.alt = 'muted';
    } else {          
        soundImg.src = './images/volume.png';
        soundImg.alt = 'notMuted';
    }
}

//audio 
function audio(choice) {
const btnAudio = document.querySelector('#btnAudio');

if (soundImg.alt === 'notMuted') {
    if (choice === 'newGame') {
        btnAudio.play();
        
    }
}
}

//info popup
const infoBtn = document.querySelector('.help');
const infoWrapperContainer = document.querySelector('#infoWrapperContainer');

infoBtn.addEventListener('mouseover', 
    function () {
        infoWrapperContainer.style.display = 'flex';
    }
);

infoBtn.addEventListener('mouseout', 
    function () {
        infoWrapperContainer.style.display = 'none';
    }
);