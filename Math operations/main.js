let firstNumber = document.getElementById('first-number');
let secondNumber = document.getElementById('second-number');

function getUserNumbers() {
  let number1 = firstNumber.value;
  number1 = Number(number1);

  let number2 = secondNumber.value;
  number2 = Number(number2);

  return [number1, number2];
}

function add() {
  let userNumbers = getUserNumbers();

  let add = userNumbers[0] + userNumbers[1];
  alert(add);
}

function subtract() {
  let userNumbers = getUserNumbers();

  let subtract = userNumbers[0] - userNumbers[1];
  alert(subtract);
}

function multiply() {
  let userNumbers = getUserNumbers();

  let multiply = userNumbers[0] * userNumbers[1];
  alert(multiply);
}

function divide() {
  let userNumbers = getUserNumbers();

  let divide = userNumbers[0] / userNumbers[1];
  alert(divide);
}

function modulus() {
  let userNumbers = getUserNumbers();

  let modulus = userNumbers[0] % userNumbers[1];
  alert(modulus);
}
