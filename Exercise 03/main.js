console.log('main.js is loaded');

let userFirstNumber = document.querySelector('#user-first-number');
let userSecondNumber = document.querySelector('#user-second-number');
let userDisplayError1 =  document.querySelector('#user-display-error-1');
let userDisplayError2 =  document.querySelector('#user-display-error-2');
let userDisplayResult = document.querySelector('#user-display-result');
let userDisplayWarning = document.querySelector('#user-display-warning');

function userCalculate() {
  let n = userFirstNumber.value;
  n = checkInteger(n);

  let m = userSecondNumber.value;
  m = checkInteger(m);

  if (n === false && m === false) {
    userDisplayError1.innerText = '* This value is invalid!';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = '* This value is invalid';
    userSecondNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: Both values are invalid!')
  }
  else if (n === false) {
    userDisplayError1.innerText = '* This value is invalid!';
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'white';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The first value is invalid!');
  }
  else if (m === false) {
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'white';
    userDisplayError2.innerText = '* This value is invalid';
    userSecondNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerText = null;
    alert('ERROR: The second value is invalid!');
  }
  else if (n == m) {
    userDisplayError1.innerText = null;
    userFirstNumber.style.borderColor = 'red';
    userDisplayError2.innerText = null;
    userSecondNumber.style.borderColor = 'red';
    userDisplayResult.innerText = null;
    userDisplayWarning.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> ' + ' The values can not be equal!';
    alert('ERROR: The values can not be equal!');
  }
  else if (n < m){
      let s = 0;
      let i = n;
      while (i <= m) {
        if (i % 2 == 0) {
          s = s + i;
        }
        i++;
      }
      userDisplayError1.innerText = null;
      userFirstNumber.style.borderColor = 'white';
      userDisplayError2.innerText = null;
      userSecondNumber.style.borderColor = 'white';
      userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The sum is: ' + s;
      userDisplayWarning.innerText = null;
      alert('The sum is: ' + s);
    }
    else {
      s = 0;
      i = m;
      while (i <= n) {
        if (i % 2 == 0) {
          s = s + i;
        }
        i++;
      }
      userDisplayError1.innerText = null;
      userFirstNumber.style.borderColor = 'white';
      userDisplayError2.innerText = null;
      userSecondNumber.style.borderColor = 'white';
      userDisplayResult.innerHTML = '<i class="fa-solid fa-check"></i> ' + ' The sum is: ' + s;
      userDisplayWarning.innerText = null;
      alert('The sum is: ' + s);
    }
  }


function userReset(){
  userFirstNumber.value = null;
  userSecondNumber.value = null;
  userFirstNumber.style.borderColor = 'white';
  userSecondNumber.style.borderColor = 'white';
  userDisplayError1.innerText = null;
  userDisplayError2.innerText = null;
  userDisplayResult.innerText = null;
  userDisplayWarning.innerText = null;
}
