
//index.html

const newGameBtn = document.querySelector('.newGame');

newGameBtn.onclick = function () {
    newGameBtn.style.boxShadow = 'inset 25px 25px 50px #383838, inset -25px -25px 50px #4c4c4c';
    audio('btn');
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
 const btn = document.querySelector('#btn');

    if (choice === 'btn') {
        btn.play();
        btn.addEventListener('ended', function () {
        location.href = './pages/game.html';
        });
    }
}


//info popup
