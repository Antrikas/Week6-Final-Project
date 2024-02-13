import React, { useEffect, useState, } from 'react'
import { useLocation } from 'react-router-dom'


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
    <>
    <section id='movies'>
   {moviesArray && Object.keys(moviesArray).length > 0 ? (
    moviesArray.map((movie) => (
      <div className="movies" key={movie.imdbID}>
                <figure className="movies__img--wrapper">
                    <img className="movies__img" 
                    src={movie.Poster} alt="">
                </img>
                </figure>
                <div className="movie__title">
                {movie.Title}
                </div>
                <div className="movie__year">
                    {movie.Year}
                </div>
            </div>
    ))
   ) : (<h2>loading</h2>) }
    </section>
    
    </>
  )
}

export default  Movies