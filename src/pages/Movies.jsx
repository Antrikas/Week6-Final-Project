import React, { useEffect, useState, } from 'react'
import { Link, useLocation } from 'react-router-dom';



const  Movies = () => {
const [moviesArray, setMoviesArray] = useState([])
const location = useLocation ();

useEffect(() => {
const query = location.search.replace("?q=", "");
console.log (query);

if (query.length > 0) { 
  searchMovies(query.toLowerCase());
}
else {
  getMovies ();
}
}, []) 

useEffect(() => {
  console.log (moviesArray) 
  }, [moviesArray]) 

  async function getMovies() {
    try {
        const response = await fetch('https://www.omdbapi.com/?apikey=34a5c5d4&s=fast');
        const data = await response.json();
        console.log (data)
        setMoviesArray(data.Search)
        return data.Search || [];
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

async function searchMovies(query) {
  try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=34a5c5d4&s=${query}`);
      const data = await response.json();
      console.log (data)
      setMoviesArray(data.Search)
      return data.Search || [];
  } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
  }
}


return (
  <section id='movies' className="movie-container">
    {moviesArray.length > 0 ? (
      moviesArray.map((movie) => (
        <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID} className="movie-link">
          <div className="movie-card" key={movie.imdbID}>
            <figure className="movie__img--wrapper">
              <img className="movie__img" src={movie.Poster} alt="" />
            </figure>
            <div className="movie__title">{movie.Title}</div>
            <div className="movie__year">{movie.Year}</div>
          </div>
        </Link>
      ))
    ) : (
      <h2>Loading</h2>
    )}
  </section>
);
};

export default Movies;
