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
    const computer = getComputerChoice();
    if (player.toLowerCase() === computer.toLowerCase()) {
      return 'It\'s a tie!';
    }

    if (player.toLowerCase() === 'rock') {
      if (computer.toLowerCase() === 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors.';
      } 
      else {
        computerScore++;
        return 'You lose! Paper beats rock.';
      }
    }

    if (player.toLowerCase() === 'paper') {
      if (computer.toLowerCase() === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock.';
      } 
      else {
        computerScore++;
        return 'You lose! Scissors beats paper.';
      }
    }

    if (player.toLowerCase() === 'scissors') {
      if (computer.toLowerCase() === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper.';
      } 
      else {
        computerScore++;
        return 'You lose! Rock beats scissors.';
      }
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