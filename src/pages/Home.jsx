import React, { useState } from 'react'
import darkCinema  from '../Assets/movie-theater-business.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState("");

let navigate = useNavigate();
function searchMovieAndChangePage (event) {
  event.preventDefault();
  navigate(`/movies?q=${encodeURIComponent(query)}`);
}

  return (
    <>
    <section id='landing'>
      <header> <img className='cinema__image' src={darkCinema} alt="" /> </header>
      
    <h1 className='landing__title'>Find a Movie</h1>

    <form onSubmit={(event) => searchMovieAndChangePage(event)}>

    <input
    type='text'
    placeholder='Search for a movie'
    contentEditable="true"
    onKeyUp={(e) => {
      setQuery(e.target.value);
    }}
    />

    <button className='' type='submit'>
    search movie
    </button>
    </form>

    </section>
    
    </>
  )
}

export default Home