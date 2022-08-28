const getAll = async () => {
  let moviesList = document.querySelector('.movies');
  let outputMovies = '';

  fetch('http://localhost:3000/movies').then((res) => {
    let totalMovies = res.headers.get('X-Total-Count');
    const moviesPerPage = 20;
    let totalPages = Math.ceil(totalMovies / moviesPerPage);

    const params = new URLSearchParams(location.search);
    let currentPage = params.get('page');

    if (currentPage == null) {
      currentPage = 1;

      const nextURL = 'index.html?page=1';
      const nextTitle = 'Pages index is on now';
      const nextState = { additionalInformation: 'Updated the URL with JS' };
      window.history.pushState(nextState, nextTitle, nextURL);
    }

    currentPage = Number(currentPage);

    function createPaginationMenu() {
      const paginationFirst = document.querySelector('.pagination-first');
      const paginationPrevious = document.querySelector('.pagination-previous');
      const paginationBody = document.querySelector('.pagination-body');
      const paginationNext = document.querySelector('.pagination-next');
      const paginationLast = document.querySelector('.pagination-last');

      const firstBtn = document.createElement('a');
      firstBtn.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
      firstBtn.style.cursor = 'pointer';
      paginationFirst.append(firstBtn);

      if (currentPage == 1) {
        firstBtn.style.cursor = 'not-allowed';
      } else {
        firstBtn.href = 'index.html?page=1';
      }

      const lastBtn = document.createElement('a');
      lastBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
      lastBtn.style.cursor = 'pointer';
      paginationLast.append(lastBtn);

      if (currentPage == totalPages) {
        lastBtn.style.cursor = 'not-allowed';
      } else {
        lastBtn.href = `index.html?page=${totalPages}`;
      }

      const previousBtn = document.createElement('a');
      previousBtn.innerHTML = '<i class="fa-solid fa-angle-left fa-xs"></i>';
      previousBtn.style.cursor = 'not-allowed';
      paginationPrevious.append(previousBtn);

      if (currentPage > 1) {
        previousBtn.style.cursor = 'pointer';
      }

      const nextBtn = document.createElement('a');
      nextBtn.innerHTML = '<i class="fa-solid fa-angle-right fa-xs"></i>';
      nextBtn.style.cursor = 'pointer';
      paginationNext.append(nextBtn);

      if (currentPage >= totalPages) {
        nextBtn.style.cursor = 'not-allowed';
      }

      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i <= 0) {
          continue;
        }

        if (i > totalPages) {
          break;
        }

        if (currentPage > 1) {
          previousBtn.addEventListener('click', () => {
            location.href = 'index.html?page=' + (i - 3);
          });
        }

        if (currentPage < totalPages) {
          nextBtn.addEventListener('click', () => {
            location.href = 'index.html?page=' + (i - 1);
          });
        }

        if (currentPage + 1 == totalPages) {
          nextBtn.addEventListener('click', () => {
            location.href = 'index.html?page=' + i;
          });
        }

        function createPaginationButton(i) {
          const paginationButton = document.createElement('a');
          paginationButton.href = 'index.html?page=' + i;
          paginationButton.innerText = i;

          if (currentPage == paginationButton.innerText) {
            paginationButton.style.backgroundColor = '#d3d3d3';
            paginationButton.style.border = '0.1em solid #d3d3d3';
            paginationButton.style.color = 'black';
          }

          paginationBody.append(paginationButton);
        }

        createPaginationButton(i);
      }
    }

    createPaginationMenu();

    const url = 'http://localhost:3000/movies?_page=' + currentPage;

    function showMovies(movies) {
      movies.forEach((movie) => {
        outputMovies += `
        <div class="movie-body">
          <a href="movieDetails.html?movieId=${movie.id}">
            <img src=${movie.poster} />
          </a>
          <div class="title">
            <a href="movieDetails.html?movieId=${movie.id}">
              ${movie.title} (${movie.year})
            </a>
          </div>
          <div class="runtime-and-genre">
            ${movie.genre} / ${movie.runtime} mins
          </div>
          <div class="rating">
            <i class="fa-solid fa-star fa-xs">
            </i>
            ${movie.imdbrating}
          </div>
        </div>
        `;
      });
      moviesList.innerHTML = outputMovies;

      if (outputMovies == '') {
        moviesList.style.display = 'block';

        let h1 = document.createElement('h1');
        h1.innerHTML = `
        <h3>Ooops... Page not found!</h3>
        <h3>You will be redirected to the homepage soon.</h3>
        `;
        h1.style.margin = '17.5%';
        h1.style.textAlign = 'center';
        moviesList.append(h1);

        const pagination = document.querySelector('.pagination');
        pagination.style.display = 'none';

        function goToLastPage() {
          location.href = 'index.html?page=1';
        }

        setTimeout(goToLastPage, 5000);

        const nextURL = `index.html?page=page-not-found`;
        const nextTitle = 'Pages index is on now';
        const nextState = { additionalInformation: 'Updated the URL with JS' };
        window.history.pushState(nextState, nextTitle, nextURL);
      }
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showMovies(data);
      });
  });
};

getAll();
