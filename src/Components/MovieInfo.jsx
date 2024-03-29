import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const MovieInfo = ({}) => {
  const { id } = useParams();
  const [ movie, setMovie ] = useState ({})
  console.log (id)

  async function searchMovieById(id) {
  
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=34a5c5d4&i=${id}`);
        const data = await response.json();
        console.log (data)
        setMovie(data)
        console.log (movie)
        return data.Search || [];
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
  }

  useEffect(() => {
    searchMovieById (id)
  }, []);

  return (
    <div id="movies__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <button>
              <Link to="/movies" className="movie__link">
                Back to Movies
              </Link>
              </button>
              <h2 className="movie__selected--title">{movie.Title}</h2>
                <p className="movie__selected--year">{movie.Year}</p>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img className="movie__selected--img" src={movie.Poster} alt={movie.Title} />
              </figure>
              <div className="movie__selected--description">
              
                <p className="movie__selected--plot">{movie.Plot}</p>
                <p className="movie__selected--plot"> Director: {movie.Director}</p>
                <p className="movie__selected--plot">Writer: {movie.Writer}</p>
                <p className="movie__selected--plot">Actors: {movie.Actors}</p>
                <div className="movie__selected--ratings"> Ratings:
                  {movie.Ratings && movie.Ratings.map((rating, index) => (
                    <div key={index}>
                      <p><strong>{rating.Source}:</strong> {rating.Value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieInfo;