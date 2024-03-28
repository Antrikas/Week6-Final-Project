import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MovieInfo = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => +movie.id === +id);

  return (
    <div id="movies__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                Back to Movies
              </Link>
              <h2 className="movie__selected--title--top">Movies</h2>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img className="movie__selected--img" src={movie.poster} alt={movie.title} />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">{movie.title}</h2>
                <p className="movie__selected--year">{movie.year}</p>
                <p className="movie__selected--plot">{movie.plot}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieInfo;