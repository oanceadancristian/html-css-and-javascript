console.log('main.js is loaded');

let userFirstNumber = document.querySelector('#user-first-number');
let userSecondNumber = document.querySelector('#user-second-number');
let userThirdNumber = document.querySelector('#user-third-number');
let userDisplayError1 =  document.querySelector('#user-display-error-1');
let userDisplayError2 =  document.querySelector('#user-display-error-2');
let userDisplayError3 =  document.querySelector('#user-display-error-3');
let userDisplayResult = document.querySelector('#user-display-result');
let userDisplayWarning = document.querySelector('#user-display-warning');

function userCalculate(){
  let a = userFirstNumber.value;
  a = checkInteger(a);

  let b = userSecondNumber.value;
  b = checkInteger(b);

  let c = userThirdNumber.value;
  c = checkInteger(c);

  let operation = ((a * b) + (b * c)) / (a + b);

  if (a === false && b === false && c === false) {

    userDisplayError1.innerText = '* This value is invalid!';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = '* This value is invalid!';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = '* This value is invalid!';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: All three values are invalid!');
  }
  else if (a === false && b === false){
    userDisplayError1.innerText = '* This value is invalid!';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = '* This value is invalid!';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The first two values are invalid!');
  }
  else if (b === false && c === false){
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = '* This value is invalid!';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = '* This value is invalid!';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The second and third values are invalid!');
  }
  else if (a === false && c === false){
    userDisplayError1.innerText = '* This value is invalid!';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = '* This value is invalid!';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The first and third values are invalid!');
  }
  else if (a === false){
    userDisplayError1.innerText = '* This value is invalid!';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The first value is invalid!');
  }
  else if (b === false){
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = '* This value is invalid!';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The second value is invalid!');
  }
  else if ((a + b) == 0) {
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> ' + ' Division by 0 is not possible!';
    alert('ERROR: Division by 0 impossible!')
  }
  else if (c === false){
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = '* This value is invalid!';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The third value is invalid!');
  }
  else {
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The result is: ' + operation;
    userDisplayWarning.innerText = null;
    alert('The result is: ' + operation);
  }
}


function userReset(){
  userFirstNumber.value = null;
  userSecondNumber.value = null;
  userThirdNumber.value = null;
  userFirstNumber.style.borderColor = 'white';
  userSecondNumber.style.borderColor = 'white';
  userThirdNumber.style.borderColor = 'white';
  userDisplayError1.innerText = null;
  userDisplayError2.innerText = null;
  userDisplayError3.innerText = null;
  userDisplayResult.innerText = null;
  userDisplayWarning.innerText = null;
}
