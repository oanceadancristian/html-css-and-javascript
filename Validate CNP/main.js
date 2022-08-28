function verify(){
  let cnp = document.querySelector('#cnp');
  let cnpValue = cnp.value;

  let day = document.querySelector('#day');
  let dayValue = day.value;

  let month = document.querySelector('#month');
  let monthValue = month.value;

  let year = document.querySelector('#year');
  let yearValue = year.value;

  if (
    cnpValue[1] == yearValue[2] && cnpValue[2] == yearValue[3] &&
    cnpValue[3] == monthValue[0] && cnpValue[4] == monthValue[1] &&
    cnpValue[5] == dayValue[0] && cnpValue[6] == dayValue[1]
  ) {
    alert('Date of birth matches the CNP');
  }
  else {
    alert("Date of birth does not match the CNP");
  }
}
