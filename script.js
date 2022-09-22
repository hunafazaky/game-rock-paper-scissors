const computerSelection = function() {
    const random = Math.ceil(Math.random() * (3 - 0) + 0);
    if (random == 1) return 'rock';
    if (random == 2) return 'paper';
    if (random == 3) return 'scissor';
}

const match = function (computerWeapon, playerWeapon) {
    if (computerWeapon == playerWeapon ) return 'SERI!!';
    else if (playerWeapon == 'paper') return (computerWeapon == 'rock') ? 'WIN!!' : 'LOSE!!';
    else if (playerWeapon == 'scissor') return (computerWeapon == 'paper') ? 'WIN!!' : 'LOSE!!';
    else return (computerWeapon == 'scissor') ? 'WIN!!' : 'LOSE!!';
}

const board = document.querySelector('aside .scores .result');

const textOnBoard = document.createElement('h2');
board.appendChild(textOnBoard);

const playerSelection = document.querySelectorAll('.player li img');

const computer = document.querySelectorAll('.enemy li img');

var playerScores = 0;
var computerScores = 0;
const playerScoresOnBoard = document.querySelector('aside .scores .playerScores h2');
const computerScoresOnBoard = document.querySelector('aside .scores .computerScores h2');

const scoresOnBoard = function(playerScores, computerScores) {
    playerScoresOnBoard.innerHTML = playerScores +' : PLAYER';
    computerScoresOnBoard.innerHTML = 'computer : '+ computerScores;
}

playerSelection.forEach(function(pilih) {
    pilih.addEventListener('click', function() {
        const playerWeapon = pilih.id;
        for (let i = 0; i < playerSelection.length; i++) {
            playerSelection[i].classList.remove('selected');
        }
        pilih.classList.add('selected');
        const computerWeapon = computerSelection();
        for (let i = 0; i < computer.length; i++) {
            computer[i].classList.remove('selected2');
        }
        const computerFixed = document.querySelector('.enemy li img.'+computerWeapon+'');
        computerFixed.classList.add('selected2');
        textOnBoard.innerHTML = match(computerWeapon, playerWeapon);
        
        if (textOnBoard.innerHTML == 'WIN!!') {
            playerScores += 1;
        } else if (textOnBoard.innerHTML == 'LOSE!!'){
            computerScores += 1;
        }
        scoresOnBoard(playerScores, computerScores);
        console.log('PLAYER '+playerScores+' : '+computerScores+' computer');
    });
});