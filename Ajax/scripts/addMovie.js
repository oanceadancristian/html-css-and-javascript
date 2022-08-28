const params = new URLSearchParams(location.search);
const movieId = params.get('movieId');

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
const addBtn = document.querySelector('#add-btn');

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

ratingMessage.innerHTML = `This movie has a default IMDb rating of <i class="fa-solid fa-star fa-xs"></i> ${movieRating.value}`;
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

const url = 'http://localhost:3000/movies';

const goToAddedMovie = async () => {
  fetch('http://localhost:3000/movies').then((res) => {
    let totalMovies = Number(res.headers.get('X-Total-Count'));
    location.href = `movieDetails.html?movieId=${totalMovies + 1}`;
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: movieTitle.value,
      year: movieTitle.value,
      poster: movieImage.value,
      genre: movieGenre.value,
      imdbrating: movieRating.value,
      runtime: movieRuntime.value,
      rated: movieRated.value,
      metascore: movieMetascore.value,
      actors: movieActors.value,
      director: movieDirector.value,
      writer: movieDirector.value,
      production: movieProduction.value,
      awards: movieAwards.value,
      plot: moviePlot.value,
    }),
  })
    .then((res) => res.json())
    .then(goToAddedMovie());
});
