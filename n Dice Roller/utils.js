let span = document.querySelector('span');

function rollDice(number){
  let results = [];

  let i = 0;
  while (i < number) {
    results[i] = Math.floor(Math.random() * 6) + 1;
    i++;
    span.innerText = results;
    span.style.color = 'gold';
  }

  return results;
}
