const firstName = document.querySelector('[data-first-name]');
const lastName = document.querySelector('[data-last-name]');
const gender = document.querySelector('[data-gender]');
const male = document.querySelector('[data-male]');
const female = document.querySelector('[data-female]');
const message = document.querySelector('[data-message]');
const form = document.querySelector('form');

const banner = document.querySelector('[data-banner]');
const successMessage = document.querySelector('[data-success-message]');
const close = document.querySelector('[data-close]');

form.addEventListener('submit', validateForm);
function validateForm(e) {
  //validate first name
  if (firstName.value === '') {
    firstName.classList.add('red');
    e.preventDefault();
  } else {
    firstName.classList.remove('red');
  }

  //validate last name
  if (lastName.value === '') {
    lastName.classList.add('red');
    e.preventDefault();
  } else {
    lastName.classList.remove('red');
  }

  //validate gender
  if (male.checked === false && female.checked === false) {
    gender.classList.add('gender-red');
    e.preventDefault();
  } else {
    gender.classList.remove('gender-red');
  }

  //validate message
  if (message.value === 'Your message here...' || message.value === '') {
    message.classList.add('red');
    e.preventDefault();
    return false;
  }

  //show values
  if (
    firstName.value !== '' &&
    lastName.value !== '' &&
    (male.checked === true || female.checked === true) &&
    (message.value !== 'Your message here...' || message.value !== '')
  ) {
    banner.style.visibility = 'visible';
    successMessage.innerText = firstName.value;
    console.log('***** Form details *****');
    console.log('');
    console.log('First name: ' + firstName.value);
    console.log('Last name: ' + lastName.value);
    if (male.checked) {
      console.log('Gender: ' + male.value);
    }
    if (female.checked) {
      console.log('Gender: ' + female.value);
    }
    console.log('Message: ' + message.value);
    console.log('');
  }
  e.preventDefault();
}

//close success message
close.addEventListener('click', closeSuccessMessage);
function closeSuccessMessage() {
  banner.style.visibility = 'hidden';
  window.location.reload();
}

//validate static form
//validate static form first name
firstName.addEventListener('keyup', validateStaticFirstName);
function validateStaticFirstName() {
  if (firstName.value === '') {
    firstName.classList.add('red');
  }
  if (firstName.value !== '') {
    firstName.classList.remove('red');
  }
}

//validate static form last name
lastName.addEventListener('keyup', validateStaticLastName);
function validateStaticLastName() {
  if (lastName.value === '') {
    lastName.classList.add('red');
  }
  if (lastName.value !== '') {
    lastName.classList.remove('red');
  }
}

//validate static form gender
male.addEventListener('change', validateStaticGender);
female.addEventListener('change', validateStaticGender);
function validateStaticGender() {
  if (male.checked === true || female.checked === true) {
    gender.classList.remove('gender-red');
  }
}

//validate static form message
message.addEventListener('keyup', validateStaticMessage);
function validateStaticMessage() {
  if (message.value === 'Your message here...' || message.value === '') {
    message.classList.add('red');
  } else {
    message.classList.remove('red');
  }
}
