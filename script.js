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

  function playRound(player, computer) {
    if (player.toLowerCase() === computer.toLowerCase()) {
      return 'It\'s a tie!';
    }

    if (player.toLowerCase() === 'rock') {
      if (computer.toLowerCase() === 'scissors') {
        return 'You win! Rock beats scissors.';
      } 
      else {
        return 'You lose! Paper beats rock.';
      }
    }

    if (player.toLowerCase() === 'paper') {
      if (computer.toLowerCase() === 'rock') {
        return 'You win! Paper beats rock.';
      } 
      else {
        return 'You lose! Scissors beats paper.';
      }
    }

    if (player.toLowerCase() === 'scissors') {
      if (computer.toLowerCase() === 'paper') {
        return 'You win! Scissors beats paper.';
      } 
      else {
        return 'You lose! Rock beats scissors.';
      }
    }
  }

  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      const player = prompt('Enter rock, paper, or scissors: ');
      const computer = getComputerChoice();
      const result = playRound(player, computer);
      console.log(result);
      if (result.includes('win')) {
        playerScore++;
      } 
      else if (result.includes('lose')) {
        computerScore++;
      }
    }
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } 
    else if (playerScore < computerScore) {
      console.log('You lose the game!');
    } 
    else {
      console.log('The game is a tie!');
    }
  }

  playGame();