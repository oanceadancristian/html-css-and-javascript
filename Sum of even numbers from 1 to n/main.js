let userNumber = document.querySelector('#number');


function sumEven(){
  let number = userNumber.value;
  number = Number(number);

  let s = 0;

  let i = 1;
  while (i <= number) {
    if (i % 2 == 0) {
      s = s + i;
    }
    i++
  }
  alert(s);
}
