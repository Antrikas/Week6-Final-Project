import  { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Nav from './Components/Nav';
import "./App.css";
import MovieInfo from './Components/MovieInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchPage'element={<searchPage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
