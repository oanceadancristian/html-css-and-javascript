console.log('utils.js is loaded');


function checkInteger(nr){
  if (
    nr === null ||
    nr.length === 0 ||
    nr.indexOf(' ') >= 0 ||
    nr.indexOf('.') >= 0 ||
    (nr[0] === '0' && nr.length !== 1) ||
    isNaN(nr) === true
  ) {
    return false;
  }

  nr = Number(nr)
  return nr;
}
