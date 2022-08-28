console.log('main.js is loaded');

let userFirstNumber = document.querySelector('#user-first-number');
let userSecondNumber = document.querySelector('#user-second-number');
let userThirdNumber = document.querySelector('#user-third-number');
let userDisplayError1 =  document.querySelector('#user-display-error-1');
let userDisplayError2 =  document.querySelector('#user-display-error-2');
let userDisplayError3 =  document.querySelector('#user-display-error-3');
let userDisplayResult = document.querySelector('#user-display-result');

function userCalculate(){
  let a = userFirstNumber.value;
  a = checkInteger(a);

  let b = userSecondNumber.value;
  b = checkInteger(b);

  let c = userThirdNumber.value;
  c = checkInteger(c);

  let arr = [a, b, c];

if (a === false && b === false && c === false){
    let max = arr[0];

    let i = 0;
    while (i < arr.length) {
      if (arr[i] > max) {
        max = arr[i]
      }
      i++;
    }
    userDisplayError1.innerText = '* This value is invalid';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = '* This value is invalid';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = '* This value is invalid';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    alert('ERROR: All three values are invalid!');
  }
  else if (a === false && b === false){
    let max = c;
    userDisplayError1.innerText = '* This value is invalid';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = '* This value is invalid';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The first two values are invalid, however the maximum number is: ' + max;
    alert('The first two values are invalid, however the maximum number is: ' + max);
  }
  else if (b === false && c === false){
    max = a;
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = '* This value is invalid';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = '* This value is invalid';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The second and third values are invalid, however the maximum number is: ' + max;
    alert('The second and third values are invalid, however the maximum number is: ' + max);
  }
  else if (a === false && c === false){
    max = b;
    userDisplayError1.innerText = '* This value is invalid';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = '* This value is invalid';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The first and third values are invalid, however the maximum number is: ' + max;
    alert('The first and third values are invalid, however the maximum number is: ' + max);
  }
  else if (a === false){
    if (b > c) {
      max = b;
    }
    else {
      max = c;
    }
    userDisplayError1.innerText = '* This value is invalid';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The first value is invalid, however the maximum number is: ' + max;
    alert('The first value is invalid, however the maximum number is: ' + max);
  }
  else if (b === false){
    if (a > c) {
      max = a;
    }
    else {
      max = c;
    }
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = '* This value is invalid';
    userSecondNumber.style.borderColor = 'red';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The second value is invalid, however the maximum number is: ' + max;
    alert('The second value is invalid, however the maximum number is: ' + max);
  }
  else if (c === false){
    if (a > b) {
      max = a;
    }
    else {
      max = b
    }
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = '* This value is invalid';
    userThirdNumber.style.borderColor = 'red';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The third value is invalid, however the maximum number is: ' + max;
    alert('The third value is invalid, however the maximum number is: ' + max);
  }
  else {
    let max = arr[0];

    let i = 0;
    while (i < arr.length) {
      if (arr[i] > max) {
        max = arr[i]
      }
      i++;
    }
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayError3.innerText = null;
    userThirdNumber.style.borderColor = 'white';
    userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The maximum number is: ' + max;
    alert('The maximum number is: ' + max);
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
}
