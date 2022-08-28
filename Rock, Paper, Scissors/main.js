console.log('Hello game!');

const text = document.querySelector('[data-display-message]');
const buttons = document.querySelectorAll('[data-message-button]');

for (const button of buttons) {
  button.addEventListener('click', handleClick);
}

function computerChoice(min = 0, max = 2) {
  const choice = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return choice[randomNumber];
}

function handleClick(e) {
  const compChoice = computerChoice();
  switch (e.target.dataset.messageButton + compChoice) {
    case 'rockscissors':
    case 'scissorspaper':
    case 'paperrock': {
      text.innerText =
        'Congratulations, you won! ' +
        e.target.dataset.messageButton +
        ' beats ' +
        compChoice +
        '!';
      text.classList.add('win');
      text.classList.remove('lose');
      text.classList.remove('gray');
      break;
    }

    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors': {
      text.innerText =
        'Sorry, the computer won! ' +
        compChoice +
        ' beats ' +
        e.target.dataset.messageButton +
        '!';
      text.classList.add('lose');
      text.classList.remove('win');
      text.classList.remove('gray');
      break;
    }

    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper': {
      text.innerText =
        "It's a draw! You both chose " + e.target.dataset.messageButton + '.';
      text.classList.add('gray');
      text.classList.remove('win');
      text.classList.remove('lose');
      break;
    }
    default:
      console.log('There is an error!');
  }
}
