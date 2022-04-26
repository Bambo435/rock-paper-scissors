// Computer function. Generates a random number between 1 and 3 and converts to rock, paper or scissors to store into a variable.
let computerNumber;
function computerChoice() {
 computerNumber = Math.floor((Math.random()* 3) + 1);
    if (computerNumber === 1) {
        computerNumber = 'rock';
        return computerNumber;
    } else if (computerNumber === 2) {
        computerNumber = 'paper';
        return computerNumber;
    } else {
        computerNumber = 'scissors';
        return computerNumber;
    }
};



function roundAnnouncer(roundOutcome){
    if (roundOutcome === 'draw'){
    textMaker(`It's a draw. Number of player wins : ${playerCount}. Number of computer wins: ${computerCount}.` )
    } else if (roundOutcome === 'win') {
    textMaker(`You won this round. Number of player wins : ${playerCount}. Number of computer wins: ${computerCount}.`);
    } else {
    textMaker(`You lost this round. Number of player wins : ${playerCount}. Number of computer wins: ${computerCount}.`);    
    }
};
// playRound function. A winner is decided depending on the input from player and computer.

function playRound(playerInput) {
    var playerInput;
    computerChoice();
    if (playerInput === computerNumber) {
        roundAnnouncer('draw');
        gameCheck();
    } else if 
        (playerInput === 'rock' && computerNumber === 'paper') {
        computerCount += 1;    
        roundAnnouncer('lose');
        gameCheck();
    } else if 
        (playerInput === 'rock' && computerNumber === 'scissors') {
        playerCount += 1;    
        roundAnnouncer('win');
        gameCheck();
    } else if 
        (playerInput === 'paper' && computerNumber === 'rock') {
        playerCount += 1;    
        roundAnnouncer('win');
        gameCheck();
    } else if 
        (playerInput === 'paper' && computerNumber === 'scissors') {
        computerCount += 1;    
        roundAnnouncer('lose');
        gameCheck();
    } else if 
        (playerInput === 'scissors' && computerNumber === 'paper') {
        playerCount += 1;    
        roundAnnouncer('win');
        gameCheck();
    } else {
        computerCount += 1;    
        roundAnnouncer('lose');
        gameCheck();
    }
};


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', function() {
    playRound('rock')
});
paper.addEventListener('click', function() {
    playRound('paper') 
});
scissors.addEventListener('click', function() {
    playRound('scissors') 
});

function textMaker(textInput) {
    const container = document.querySelector('#container');
    const text = document.createElement('div');
    text.classList.add('content'); 
    text.textContent = textInput;
    container.appendChild(text); 
};


let playerCount = 0;
let computerCount = 0;


function gameCheck() {
if (playerCount === 5) {
    textMaker('You win the game!');
    playerCount = 0;
    computerCount = 0;
} else if (computerCount === 5 ) {
    textMaker('You lost the game!');
    playerCount = 0;
    computerCount = 0;
} else {
    textMaker('Player has ' + (5 - playerCount) + ' points left to score. Computer has ' + (5- computerCount) + ' points left to score.')
}
};



//  game Function. This function will launch 5 instances of playRound in a loop and a score is tracked. The winner is announced at the end of the loop.

/* function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
      textMaker('')
      if (playerWins === true) {
        playerCount += 1;
        console.log(`Player has won ${playerCount} times. Computer has won ${computerCount} times.`);
      } else if (playerWins === false) {
        computerCount += 1;  
        console.log(`Player has won ${playerCount} times. Computer has won ${computerCount} times.`);
      } else {
        console.log(`Player has won ${playerCount} times. Computer has won ${computerCount} times.`) ; 
      }
    }
    if (playerCount > computerCount) {
        console.log('You won the game!');
    } else if 
       (playerCount === computerCount) {
        console.log('The game is a draw');
    } else {
        console.log('You lost the game!');
    }
    }; 

game(); */