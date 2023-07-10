const rockButton = document.querySelector('.rockbutton');
const paperButton = document.querySelector('.paperbutton');
const scissorsButton = document.querySelector('.scissorsbutton');

rockButton.addEventListener('click', () => {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'Tie!';
  } else if (computerMove === 'paper') {
    result = 'You lose!';
  } else if (computerMove === 'scissors') {
    result = 'You win!';
  }

  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
});

paperButton.addEventListener('click', () => {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'You win!';
  } else if (computerMove === 'paper') {
    result = 'You tie!';
  } else if (computerMove === 'scissors') {
    result = 'You lose!';
  }

  alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
});

scissorsButton.addEventListener('click', () => {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (computerMove === 'rock') {
    result = 'You lose!';
  } else if (computerMove === 'paper') {
    result = 'You win!';
  } else if (computerMove === 'scissors') {
    result = 'You tie!';
  }

  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`);
})

