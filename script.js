 function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  }

  function playRound(player) {
    const computer = getComputerChoice().toLowerCase();
    const playerChoice = player.toLowerCase();
    if (playerChoice === computer) {
      return 'It\'s a tie!';
    }
    if (
        (playerChoice === 'rock' && computer === 'scissors') || 
        (playerChoice === 'paper' && computer === 'rock') ||
        (playerChoice === 'scissors' && computer === 'paper')){
        playerScore++;
        return 'You win!';
    } 
    if (
        (playerChoice === 'rock' && computer === 'paper') ||
        (playerChoice === 'paper' && computer === 'scissors') ||
        (playerChoice === 'scissors' && computer === 'rock')){
        computerScore++;
        return 'You lose!';
    }
  }

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
btnRock.addEventListener('click', () => getClick('rock'));
btnPaper.addEventListener('click', () => getClick('paper'));
btnScissors.addEventListener('click', () => getClick('scissors'));
let playerScore = 0;
let computerScore = 0;

function getClick(value){
    const result = playRound(value);
    console.log(result);
    if (endGame()){
        displayResult();
    }
}

function endGame(){
    return playerScore === 5 || computerScore === 5;
}

function displayResult(){
    return playerScore > computerScore 
    ? alert(`You win!: ${playerScore}`) 
    : alert(`You lose!: ${computerScore}`);
}