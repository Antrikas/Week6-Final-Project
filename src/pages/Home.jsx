import React, { useState } from 'react'
import darkCinema  from '../Assets/cinema.jpeg'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
  const [query, setQuery] = useState("");
 
  let navigate = useNavigate();
 
  function searchMovieAndChangePage (event) {
    event.preventDefault();
    navigate(`/movies?q=${query}`);
 }
 

return (
  
    <section id='landing' style={{ backgroundColor: '#899499'}}>
    <img className='cinema__image' src={darkCinema} alt='' />
      <div className="landing-content">
        <h1 className='landing__title'>Find Your Movie</h1>

        <form onSubmit={searchMovieAndChangePage} className='search-form'>
          <div className="input-container">
            <input 
              type='text'
              placeholder='Search for a movie'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className='search-button' type='submit'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Home;