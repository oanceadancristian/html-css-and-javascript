let container = document.querySelector('.container');
let clickMessage = ['1', '2', '3'];
let clickCounter = 0;

function show() {
  let paragraph = document.createElement('p');

  paragraph.innerText = clickMessage[clickCounter];
  paragraph.style.textAlign = 'center';
  paragraph.style.margin = '10px';
  paragraph.style.fontSize = '20px';
  paragraph.style.color = 'darkgreen';

  container.appendChild(paragraph);

  clickCounter++;

  if (clickCounter == clickMessage.length) {
    clickCounter = 0;
  }
}
