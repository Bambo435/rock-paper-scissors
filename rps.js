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

computerChoice();

// playRound function. A winner is decided depending on the input from player and computer.

function playRound() {
    var playerInput = (prompt('Rock, paper or scissors?')).toLowerCase();
    console.log(`You picked ${playerInput}.`)
    console.log(`Computer picked ${computerNumber}.`);
    playerWins = true;
    if (playerInput === computerNumber) {
        console.log("It's a draw!");
        playerWins = 0;
    } else if 
        (playerInput === 'rock' && computerNumber === 'paper') {
        console.log("You lose!"); 
        playerWins = false;   
    } else if 
        (playerInput === 'rock' && computerNumber === 'scissors') {
         console.log("You win!");   
         playerWins = true;
    } else if 
        (playerInput === 'paper' && computerNumber === 'rock') {
         console.log("You win!"); 
         playerWins = true;
    } else if 
        (playerInput === 'paper' && computerNumber === 'scissors') {
         console.log("You lose!"); 
         playerWins = false;
    } else if 
        (playerInput === 'scissors' && computerNumber === 'paper') {
         console.log("You win!"); 
         playerWins = true;
    } else {
         console.log("You lose!");     
         playerWins = false;
    }
};

//  game Function. This function will launch 5 instances of playRound in a loop and a score is tracked. The winner is announced at the end of the loop.

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
      playRound()  
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

game();