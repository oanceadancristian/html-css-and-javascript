let userNumber = document.querySelector('#number');

function sum() {
  let number = userNumber.value;

  let s = 0;

  let i = 1;
  while (i <= number) {
    s = s + i;
    i++;
  }
  alert(s);
}
