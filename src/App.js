import  { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Home from './pages/Home';
import searchPage from './pages/searchPage';
import Movies from './pages/Movies';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searchPage'element={<searchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
