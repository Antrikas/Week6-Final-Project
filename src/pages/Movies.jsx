import React, { useEffect, useState } from 'react'


const  Movies = () => {
const [moviesArray, setMoviesArray] = useState([])

useEffect(() => {
getMovies()
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

  return (
    <>
    <section id='Movies'>
   {Object.keys(moviesArray).length > 0 ? (
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