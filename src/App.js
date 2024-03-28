import  { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Nav from './Components/Nav';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchPage'element={<searchPage />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
