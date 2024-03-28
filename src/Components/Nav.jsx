import React from 'react'
import movieLogo from "../Assets/movie.png"
import { Link } from "react-router-dom" 

const Nav = ()  =>{
  return (
    <>
    <nav className='nav'>
      <div className='movie__logo'>
        <Link to="/">
      <img src={movieLogo} className='logo'> 
      </img>
      </Link>
      </div>
    </nav>
    </>
  )
}

export default Nav