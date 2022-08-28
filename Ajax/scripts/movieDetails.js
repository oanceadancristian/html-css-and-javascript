const params = new URLSearchParams(location.search);
const movieId = params.get('movieId');

let pageNumber = Math.ceil(movieId / 20);

const title = document.querySelector('title');
let movieDetailsList = document.querySelector('.movie-details');
let outputMovieDetails = '';

const modal = document.querySelector('#my-modal');
const confirmCancelBtn = document.querySelector('#confirm-cancel-btn');
const confirmDeleteBtn = document.querySelector('#confirm-delete-btn');

if (movieId) {
  // Dynamic
  const urlDynamic = `http://localhost:3000/movies/${movieId}`;

  function showMovieDetails(movies) {
    title.innerText = `${movies.title} - Details`;
    outputMovieDetails += `
      <div class="movie-body">
        <div class="movie-image">
          <img src=${movies.poster} />
        </div>
        <div class="movie-content">
          <div class="movie-header">
            <div class="title">
              <i class="fa-solid fa-clapperboard fa-sm">
              </i>
              ${movies.title} (${movies.year})
            </div>
            <div class="genre-runtime-and-rating">
              <div class="genre">
                <span>
                  ${movies.genre} / ${movies.runtime} mins
                </span>
              </div>
              <div class="rating">
                <i class="fa-solid fa-star">
                </i>
                <span>
                  IMDb rating &nbsp;
                  ${movies.imdbrating} / 10
                </span>
              </div>
            </div>
            <div class="rated-and-metascore">
              <div class="rated">
                <span>
                  ${movies.rated}
                </span>
              </div>
              <div class="metascore">
                <span>
                  Metascore &nbsp;
                </span>
                <span class="metascore-number">
                  ${movies.metascore}
                </span>
              </div>
            </div>
          </div>
          <div class="movie-text">
            <div class="plot">
              ${movies.plot}
            </div>
          </div>
          <div class="movie-footer">
            <div class="actors">
              Actors &nbsp;&nbsp;
              <span>
                ${movies.actors}
              </span>
            </div>
            <hr>
            <div class="director">
              Director &nbsp;&nbsp;
              <span>
                ${movies.director}
              </span>
            </div>
            <hr>
            <div class="awards">
              Writer &nbsp;&nbsp;
              <span>
                ${movies.writer}
              </span>
            </div>
            <hr>
            <div class="production">
              Production &nbsp;&nbsp;
                <span>
                  ${movies.production}
                </span>
            </div>
            <hr>
            <div class="awards">
              Awards &nbsp;&nbsp;
                <span>
                  ${movies.awards}
                </span>
            </div>
            <hr>
            <div class="updated">
              Updated at: &nbsp;&nbsp;
                <span>
                  ${movies.updated_at}
                </span>
            </div>
          </div>
          <div class="buttons">
            <div class="edit">
              <a href="editMovie.html">
                <button id="edit-btn">
                  <i class="fa-solid fa-pen-to-square">
                  </i>
                  Edit
                </button>
              </a>
            </div>
            <div class="delete">
              <button id="delete-btn">
                <i class="fa-solid fa-trash">
                </i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    movieDetailsList.innerHTML = outputMovieDetails;

    const updated = document.querySelector('.updated');
    if (movies.updated_at == undefined) {
      updated.innerText = '';
    }

    const metascoreNumber = document.querySelector('.metascore-number');
    if (metascoreNumber.innerText >= 75) {
      metascoreNumber.style.backgroundColor = 'green';
      metascoreNumber.style.color = 'white';
    } else if (metascoreNumber.innerText >= 50) {
      metascoreNumber.style.backgroundColor = '#f5c518';
      metascoreNumber.style.color = '#121212';
    } else if (metascoreNumber.innerText < 50) {
      metascoreNumber.style.backgroundColor = '#b12121';
      metascoreNumber.style.color = 'white';
    }

    const deleteBtn = document.querySelector('#delete-btn');
    deleteBtn.addEventListener('click', displayModal);
    function displayModal() {
      modal.style.display = 'block';
    }

    const myData = {
      newUrl: `editMovie.html?movieId=${movieId}`,
      title: `${movies.title}`,
      year: `${movies.year}`,
      poster: `${movies.poster}`,
      genre: `${movies.genre}`,
      rating: `${movies.imdbrating}`,
      runtime: `${movies.runtime}`,
      rated: `${movies.rated}`,
      metascore: `${movies.metascore}`,
      actors: `${movies.actors}`,
      director: `${movies.director}`,
      writer: `${movies.writer}`,
      production: `${movies.production}`,
      awards: `${movies.awards}`,
      plot: `${movies.plot}`,
    };
    const myDataString = JSON.stringify(myData);
    localStorage.setItem('preselectedValues', myDataString);
  }

  fetch(urlDynamic)
    .then((res) => res.json())
    .then((data) => showMovieDetails(data));

  confirmDeleteBtn.addEventListener('click', handleConfirmDelete);

  function handleConfirmDelete(e) {
    fetch(urlDynamic, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((window.location.href = `index.html?page=${pageNumber}`));
  }
} else {
  // Static
  const urlStatic = 'http://localhost:3000/movies/96';

  const nextURL = `movieDetails.html?movieId=96`;
  const nextTitle = 'Pages index is on now';
  const nextState = { additionalInformation: 'Updated the URL with JS' };
  window.history.pushState(nextState, nextTitle, nextURL);

  function showMovieDetails(movie) {
    title.innerText = `${movie.title} - Details`;
    outputMovieDetails += `
    <div class="movie-body">
        <div class="movie-image">
          <img src=${movie.poster} />
        </div>
        <div class="movie-content">
          <div class="movie-header">
            <div class="title">
              <i class="fa-solid fa-clapperboard fa-sm">
              </i>
              ${movie.title} (${movie.year})
            </div>
            <div class="genre-runtime-and-rating">
              <div class="genre">
                <span>
                  ${movie.genre} / ${movie.runtime} mins
                </span>
              </div>
              <div class="rating">
                <i class="fa-solid fa-star">
                </i>
                <span>
                  IMDb rating &nbsp;
                  ${movie.imdbrating} / 10
                </span>
              </div>
            </div>
            <div class="rated-and-metascore">
              <div class="rated">
                <span>
                  ${movie.rated}
                </span>
              </div>
              <div class="metascore">
                <span>
                  Metascore &nbsp;
                </span>
                <span class="metascore-number">
                  ${movie.metascore}
                </span>
              </div>
            </div>
          </div>
          <div class="movie-text">
            <div class="plot">
              ${movie.plot}
            </div>
          </div>
          <div class="movie-footer">
            <div class="actors">
              Actors &nbsp;&nbsp;
              <span>
                ${movie.actors}
              </span>
            </div>
            <hr>
            <div class="director">
              Director &nbsp;&nbsp;
              <span>
                ${movie.director}
              </span>
            </div>
            <hr>
            <div class="awards">
              Writer &nbsp;&nbsp;
              <span>
                ${movie.writer}
              </span>
            </div>
            <hr>
            <div class="production">
              Production &nbsp;&nbsp;
                <span>
                  ${movie.production}
                </span>
            </div>
            <hr>
            <div class="awards">
              Awards &nbsp;&nbsp;
                <span>
                  ${movie.awards}
                </span>
            </div>
            <hr>
            <div class="updated">
              Updated at: &nbsp;&nbsp;
                <span>
                  ${movie.updated_at}
                </span>
            </div>
          </div>
          <div class="buttons">
            <div class="edit">
              <a href="editMovie.html">
                <button id="edit-btn">
                  <i class="fa-solid fa-pen-to-square">
                  </i>
                  Edit
                </button>
              </a>
            </div>
            <div class="delete">
              <button id="delete-btn">
                <i class="fa-solid fa-trash">
                </i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      `;
    movieDetailsList.innerHTML = outputMovieDetails;

    const updated = document.querySelector('.updated');
    if (movie.updated_at == undefined) {
      updated.innerText = '';
    }

    const metascoreNumber = document.querySelector('.metascore-number');
    if (metascoreNumber.innerText >= 75) {
      metascoreNumber.style.backgroundColor = 'green';
      metascoreNumber.style.color = 'white';
    } else if (metascoreNumber.innerText >= 50) {
      metascoreNumber.style.backgroundColor = '#f5c518';
      metascoreNumber.style.color = '#121212';
    } else if (metascoreNumber.innerText < 50) {
      metascoreNumber.style.backgroundColor = '#b12121';
      metascoreNumber.style.color = 'white';
    }

    const deleteBtn = document.querySelector('#delete-btn');
    deleteBtn.addEventListener('click', displayModal);
    function displayModal() {
      modal.style.display = 'block';
    }

    const myData = {
      newUrl: `editMovie.html?movieId=${movieId}`,
      title: `${movie.title}`,
      year: `${movie.year}`,
      poster: `${movie.poster}`,
      genre: `${movie.genre}`,
      rating: `${movie.imdbrating}`,
      runtime: `${movie.runtime}`,
      rated: `${movie.rated}`,
      metascore: `${movie.metascore}`,
      actors: `${movie.actors}`,
      director: `${movie.director}`,
      writer: `${movie.writer}`,
      production: `${movie.production}`,
      awards: `${movie.awards}`,
      plot: `${movie.plot}`,
    };
    const myDataString = JSON.stringify(myData);
    localStorage.setItem('preselectedValues', myDataString);
  }

  fetch(urlStatic)
    .then((res) => res.json())
    .then((data) => showMovieDetails(data));

  confirmDeleteBtn.addEventListener('click', handleConfirmDelete);

  function handleConfirmDelete(e) {
    fetch(urlStatic, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((window.location.href = `index.html?page=${pageNumber}`));
  }
}

window.addEventListener('click', closeModalWindow);
function closeModalWindow(e) {
  if (
    e.target.className == 'modal' ||
    e.target.id == 'close' ||
    e.target.id == 'confirm-cancel-btn'
  ) {
    modal.style.display = 'none';
  }
}
