let value1 = document.querySelector('#textBox-1');
let value2 = document.querySelector('#textBox-2');
let value3 = document.querySelector('#textBox-3');

function calcSum() {
  let number1 = value1.value;
  number1 = Number(number1);

  let number2 = value2.value;
  number2 = Number(number2);

  let sum = number1 + number2;

  value3.value = sum;
}
