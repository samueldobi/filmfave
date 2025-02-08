import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import TopMovies from './components/Movies/TopMovies';
import TopSeries from './components/Series/TopSeries';
import Genres from './Genres/Genres';
import MovieFilter from './components/Moviefilter/MovieFilter';

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
          <Route path = '/moviefilter'  element = {<MovieFilter/>} />
          <Route path = '/genres/:genreName/:genreId'  element = {<Genres/>} />
      </Routes>
 
    </div>
    </div>
    </Router>
  )
}

export default App