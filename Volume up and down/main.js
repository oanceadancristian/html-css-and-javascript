console.log('main.js is loaded');

let volume = document.querySelector('#volume');
let progress = document.querySelector('.progress');

let volumePercent = 0;

function volumeUp() {
  if (volumePercent == 100) {
    alert('Max volume!');
  }
  if (volumePercent < 100) {
    volumePercent++;
  }
  volume.innerText = volumePercent;

  progress.style.width = volumePercent + '%';
}

function volumeDown() {
  if (volumePercent == 0) {
    alert('Min volume!');
  }
  if (volumePercent > 0) {
    volumePercent--;
  }
  volume.innerText = volumePercent;

  progress.style.width = volumePercent + '%';
}
