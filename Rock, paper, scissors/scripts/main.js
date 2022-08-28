let buttons = document.querySelectorAll('[data-choose-button]');
let message = document.querySelector('[data-show-message]');
let reset = document.querySelector('.reset');

for (const button of buttons) {
  button.addEventListener('click', gameClick);
}

function gameClick(e) {
  let computer = Math.floor(Math.random() * 5) + 1;
  let player = e.target.dataset.chooseButton;

  switch (player) {
    case 'rock': {
      if (computer == 1) {
        computer = 'Rock';
        message.classList.add('draw');
        message.classList.remove('player-wins');
        message.classList.remove('computer-wins');
        message.innerText = `It's a draw! You both chose ${computer}.`;
      } else if (computer == 2) {
        computer = 'Paper';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else if (computer == 3) {
        computer = 'Scissors';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else if (computer == 4) {
        computer = 'Lizard';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else {
        computer = 'Spock';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      }
      break;
    }
    case 'paper': {
      if (computer == 1) {
        computer = 'Rock';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else if (computer == 2) {
        computer = 'Paper';
        message.classList.add('draw');
        message.classList.remove('computer-wins');
        message.classList.remove('player-wins');
        message.innerText = `It's a draw! You both chose ${computer}.`;
      } else if (computer == 3) {
        computer = 'Scissors';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else if (computer == 4) {
        computer = 'Lizard';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else {
        computer = 'Spock';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      }
      break;
    }
    case 'scissors': {
      if (computer == 1) {
        computer = 'Rock';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else if (computer == 2) {
        computer = 'Paper';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else if (computer == 3) {
        computer = 'Scissors';
        message.classList.add('draw');
        message.classList.remove('computer-wins');
        message.classList.remove('player-wins');
        message.innerText = `It's a draw! You both chose ${computer}.`;
      } else if (computer == 4) {
        computer = 'Lizard';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else {
        computer = 'Spock';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      }
      break;
    }
    case 'lizard': {
      if (computer == 1) {
        computer = 'Rock';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else if (computer == 2) {
        computer = 'Paper';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else if (computer == 3) {
        computer = 'Scissors';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else if (computer == 4) {
        computer = 'Lizard';
        message.classList.add('draw');
        message.classList.remove('computer-wins');
        message.classList.remove('player-wins');
        message.innerText = `It's a draw! You both chose ${computer}.`;
      } else {
        computer = 'Spock';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      }
      break;
    }
    case 'spock': {
      if (computer == 1) {
        computer = 'Rock';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else if (computer == 2) {
        computer = 'Paper';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else if (computer == 3) {
        computer = 'Scissors';
        message.classList.add('player-wins');
        message.classList.remove('computer-wins');
        message.classList.remove('draw');
        message.innerText = `Congratulations, you won! ${player} beats ${computer}.`;
      } else if (computer == 4) {
        computer = 'Lizard';
        message.classList.add('computer-wins');
        message.classList.remove('player-wins');
        message.classList.remove('draw');
        message.innerText = `Sorry, the computer won! ${computer} beats ${player}!`;
      } else {
        computer = 'Spock';
        message.classList.add('draw');
        message.classList.remove('computer-wins');
        message.classList.remove('player-wins');
        message.innerText = `It's a draw! You both chose ${computer}.`;
      }
      break;
    }
    default: {
      throw new Error('The game is NOT working!');
    }
  }
}

reset.addEventListener('click', clearMessage);

function clearMessage() {
  message.innerText = null;
}
