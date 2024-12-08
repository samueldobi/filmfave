import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import TopMovies from './components/Movies/TopMovies';
import TopSeries from './components/Series/TopSeries';

function App() {
  return (
    <Router>
    <div className='app-body'>
    <NavigationBar/>
    <div className="content-body">
      <Routes>
          <Route path='/' element = {<Hero /> }/>
          <Route path = '/topmovies'  element = {<TopMovies/>} />
          <Route path = '/topseries'  element = {<TopSeries/>} />
      </Routes>
 
    </div>
    </div>
    </Router>
  )
}

export default App