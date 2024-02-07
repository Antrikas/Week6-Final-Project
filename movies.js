let movies = []; 

async function getMovies() {
    try {
        const response = await fetch('https://www.omdbapi.com/?apikey=34a5c5d4&s=fast');
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

async function renderMovies(filter) {
    try {
        const moviesWrapper = document.querySelector("#movies__main .feature__container");
        moviesWrapper.innerHTML = '<i class="fas fa-spinner movies__loading--spinner"></i>';

        if (!movies.length) {
            movies = await getMovies();
        }

        if (filter === 'NEW_TO_OLD') {
            movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        } else if (filter === 'OLD_TO_NEW') {
            movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        }

        const moviesHtml = movies.map((movie) => {
            return `<div class="movies">
                <figure class="movies__img--wrapper">
                    <img class="movies__img" src="${movie.Poster}" alt="">
                </figure>
                <div class="movie__title">
                    ${movie.Title}
                </div>
                <div class="movie__year">
                    ${movie.Year}
                </div>
            </div>`;
        }).join("");

        moviesWrapper.innerHTML = moviesHtml;
    } catch (error) {
        console.error('Error rendering movies:', error);
    }
}

function filterMovies(event) {
    renderMovies(event.target.value);
}
async function searchMovies(event) {
    event.preventDefault(); 

    try {
        const query = document.getElementById('movie').value;
        const response = await fetch(`https://www.omdbapi.com/?apikey=34a5c5d4&s=${query}`);
        const data = await response.json();

        movies = data.Search || [];
        renderMovies('');
    } catch (error) {
        console.error('Error searching movies:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMovies(''); 
document.getElementById('movieSearchForm').addEventListener('submit', searchMovies);
});

setTimeout(()=> {
    renderMovies();
  });
  


