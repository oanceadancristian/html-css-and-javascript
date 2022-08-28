console.log('main.js is loaded');

let imgElem = document.querySelector('.container .carousel');

let imgList = [
    "url('img/back.jpg') center",
    "url('img/lateral1.jpg') center",
    "url('img/lateral2.jpg') center",
    "url('img/lateral3.jpg') center"
];

let currentImg = 0;
imgElem.style.background = imgList[currentImg];

function previousImg(){
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgList.length - 1;
    }

    // Method 2
    // currentImg = (currentImg - 1 + imgList.length) % imgList.length;

    imgElem.style.background = imgList[currentImg];

}

function nextImg(){
    currentImg++;
    if (currentImg == imgList.length) {
        currentImg = 0;
    }

    // Method 2
    // currentImg = (currentImg + 1) % imgList.length;

    imgElem.style.background = imgList[currentImg];

}