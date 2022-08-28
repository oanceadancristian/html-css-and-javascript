let body = document.querySelector('body');
let span = document.querySelector('span');

function generateRandomColor() {
  let currentRandomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = '#' + currentRandomColor;
  span.innerText = '#' + currentRandomColor;
}
