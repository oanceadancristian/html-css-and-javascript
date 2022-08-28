const movieTitle = document.querySelector('#title');
const movieYear = document.querySelector('#year');
const movieImage = document.querySelector('#image');
const movieGenre = document.querySelector('#genre');
let genreMessage = document.querySelector('#genre-message');
const movieRating = document.querySelector('#rating');
let ratingMessage = document.querySelector('#rating-message');
const movieRuntime = document.querySelector('#runtime');
const movieRated = document.querySelector('#rated');
const movieMetascore = document.querySelector('#metascore');
const movieActors = document.querySelector('#actors');
const movieDirector = document.querySelector('#director');
const movieWriter = document.querySelector('#writer');
const movieProduction = document.querySelector('#production');
const movieAwards = document.querySelector('#awards');
const moviePlot = document.querySelector('#plot');
const form = document.querySelector('form');
const saveBtn = document.querySelector('#save-btn');

const myDataString2 = localStorage.getItem('preselectedValues');
const myData2 = JSON.parse(myDataString2);

newUrl = myData2.newUrl;
movieTitle.value = myData2.title;
movieYear.value = myData2.year;
movieImage.value = myData2.poster;

let movieGenreArray = [];
movieGenreArray.push(myData2.genre);

if (myData2.genre.includes('Action') || myData2.genre.includes('action')) {
  movieGenre.options[0].selected = true;
}
if (
  myData2.genre.includes('Adventure') ||
  myData2.genre.includes('adventure')
) {
  movieGenre.options[1].selected = true;
}
if (
  myData2.genre.includes('Biography') ||
  myData2.genre.includes('biography')
) {
  movieGenre.options[2].selected = true;
}
if (myData2.genre.includes('Comedy') || myData2.genre.includes('comedy')) {
  movieGenre.options[3].selected = true;
}
if (myData2.genre.includes('Crime') || myData2.genre.includes('crime')) {
  movieGenre.options[4].selected = true;
}
if (myData2.genre.includes('Drama') || myData2.genre.includes('drama')) {
  movieGenre.options[5].selected = true;
}
if (myData2.genre.includes('Fantasy') || myData2.genre.includes('fantasy')) {
  movieGenre.options[6].selected = true;
}
if (myData2.genre.includes('History') || myData2.genre.includes('history')) {
  movieGenre.options[7].selected = true;
}
if (myData2.genre.includes('Horror') || myData2.genre.includes('horror')) {
  movieGenre.options[8].selected = true;
}
if (myData2.genre.includes('Mistery') || myData2.genre.includes('mistery')) {
  movieGenre.options[9].selected = true;
}
if (myData2.genre.includes('Romance') || myData2.genre.includes('romance')) {
  movieGenre.options[10].selected = true;
}
if (myData2.genre.includes('Sci-Fi') || myData2.genre.includes('sci-fi')) {
  movieGenre.options[11].selected = true;
}
if (myData2.genre.includes('Thriller') || myData2.genre.includes('thriller')) {
  movieGenre.options[12].selected = true;
}
if (myData2.genre.includes('Western') || myData2.genre.includes('western')) {
  movieGenre.options[13].selected = true;
}

movieRating.value = myData2.rating;
movieRuntime.value = myData2.runtime;
movieRated.value = myData2.rated;
movieMetascore.value = myData2.metascore;
movieActors.value = myData2.actors;
movieDirector.value = myData2.director;
movieWriter.value = myData2.writer;
movieProduction.value = myData2.production;
movieAwards.value = myData2.awards;
moviePlot.value = myData2.plot;

// Validate inputs
movieTitle.addEventListener('keyup', validateTitle);
function validateTitle() {
  if (!movieTitle.value.trim()) {
    movieTitle.style.borderBottom = '0.1em solid red';
  } else {
    movieTitle.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieYear.addEventListener('change', validateYear);
function validateYear() {
  if (!movieYear.value.trim()) {
    movieYear.style.borderBottom = '0.1em solid red';
  } else {
    movieYear.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieImage.addEventListener('keyup', validateImage);
function validateImage() {
  if (!movieImage.value.trim()) {
    movieImage.style.borderBottom = '0.1em solid red';
  } else {
    movieImage.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieRuntime.addEventListener('change', validateRuntime);
function validateRuntime() {
  if (!movieRuntime.value.trim()) {
    movieRuntime.style.borderBottom = '0.1em solid red';
  } else {
    movieRuntime.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieGenre.addEventListener('change', validateGenre);
function validateGenre() {
  if (movieGenre.value === '') {
    genreMessage.innerText = 'Please select at least one genre!';
    genreMessage.classList.remove('success-message');
    genreMessage.classList.add('danger-message');
  } else {
    genreMessage.classList.remove('danger-message');
    genreMessage.classList.add('success-message');
  }
}

movieRating.addEventListener('change', validateRating);
function validateRating() {
  if (movieRating.value == 0) {
    ratingMessage.innerText = 'Please choose a valid IMDb rating!';
    ratingMessage.classList.remove('success-message');
    ratingMessage.classList.add('danger-message');
  } else {
    ratingMessage.innerHTML = `The chosen IMDb rating is <i class="fa-solid fa-star fa-xs"></i> ${movieRating.value}`;
    ratingMessage.classList.remove('danger-message');
    ratingMessage.classList.add('success-message');
  }
}

ratingMessage.innerHTML = `This movie has an IMDb rating of <i class="fa-solid fa-star fa-xs"></i> ${movieRating.value}`;
ratingMessage.style.textAlign = 'center';
ratingMessage.style.fontSize = '0.9em';

movieRated.addEventListener('keyup', validateRated);
function validateRated() {
  if (!movieRated.value.trim()) {
    movieRated.style.borderBottom = '0.1em solid red';
  } else {
    movieRated.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieMetascore.addEventListener('change', validateMetascore);
function validateMetascore() {
  if (!movieMetascore.value.trim()) {
    movieMetascore.style.borderBottom = '0.1em solid red';
  } else {
    movieMetascore.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieActors.addEventListener('keyup', validateActors);
function validateActors() {
  if (!movieActors.value.trim()) {
    movieActors.style.borderBottom = '0.1em solid red';
  } else {
    movieActors.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieDirector.addEventListener('keyup', validateDirector);
function validateDirector() {
  if (!movieDirector.value.trim()) {
    movieDirector.style.borderBottom = '0.1em solid red';
  } else {
    movieDirector.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieWriter.addEventListener('keyup', validateWriter);
function validateWriter() {
  if (!movieWriter.value.trim()) {
    movieWriter.style.borderBottom = '0.1em solid red';
  } else {
    movieWriter.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieProduction.addEventListener('keyup', validateProduction);
function validateProduction() {
  if (!movieProduction.value.trim()) {
    movieProduction.style.borderBottom = '0.1em solid red';
  } else {
    movieProduction.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieAwards.addEventListener('keyup', validateAwards);
function validateAwards() {
  if (!movieAwards.value.trim()) {
    movieAwards.style.borderBottom = '0.1em solid red';
  } else {
    movieAwards.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

movieMetascore.addEventListener('keyup', validateMetascore);
function validateMetascore() {
  if (!movieMetascore.value.trim()) {
    movieMetascore.style.borderBottom = '0.1em solid red';
  } else {
    movieMetascore.style.borderBottom = '0.1em solid #f5f5f5';
  }
}

moviePlot.addEventListener('keyup', validatePlot);
function validatePlot() {
  if (!moviePlot.value.trim()) {
    moviePlot.style.border = '0.1em solid red';
  } else {
    moviePlot.style.border = '0.1em solid #f5f5f5';
  }
}

const nextURL = newUrl;
const nextTitle = 'Pages index is on now';
const nextState = { additionalInformation: 'Updated the URL with JS' };
window.history.pushState(nextState, nextTitle, nextURL);

const params = new URLSearchParams(location.search);
const movieId = params.get('movieId');

const url = 'http://localhost:3000/movies';

form.addEventListener('submit', handleSave);

function handleSave(e) {
  e.preventDefault();

  let movieGenreChecked = document.querySelectorAll('#genre :checked');
  let movieGenreSelected = [...movieGenreChecked].map((option) => option.value);

  for (let i = 0; i < movieGenreSelected.length; i++) {
    movieGenreSelected[i] =
      movieGenreSelected[i].charAt(0).toUpperCase() +
      movieGenreSelected[i].slice(1);
  }
  const movieGenreSelectedText = movieGenreSelected.join(', ');

  function getTime() {
    let today = new Date();
    let day = today.getDate() + '';
    let month = today.getMonth() + 1 + '';
    let year = today.getFullYear() + '';
    let hour = today.getHours() + '';
    let minutes = today.getMinutes() + '';
    let seconds = today.getSeconds() + '';

    function checkZero(data) {
      if (data.length == 1) {
        data = '0' + data;
      }
      return data;
    }

    day = checkZero(day);
    month = checkZero(month);
    year = checkZero(year);
    hour = checkZero(hour);
    minutes = checkZero(minutes);
    seconds = checkZero(seconds);

    let date =
      day +
      '/' +
      month +
      '/' +
      year +
      ' ' +
      hour +
      ':' +
      minutes +
      ':' +
      seconds;
    return date;
  }

  fetch(`${url}/${movieId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: movieTitle.value,
      year: movieYear.value,
      poster: movieImage.value,
      genre: movieGenreSelectedText,
      imdbrating: movieRating.value,
      runtime: movieRuntime.value,
      rated: movieRated.value,
      metascore: movieMetascore.value,
      actors: movieActors.value,
      director: movieDirector.value,
      writer: movieWriter.value,
      production: movieProduction.value,
      awards: movieAwards.value,
      plot: moviePlot.value,
      updated_at: getTime(),
    }),
  })
    .then((res) => res.json())
    .then((location.href = `movieDetails.html?movieId=${movieId}`));

  localStorage.clear();
}
