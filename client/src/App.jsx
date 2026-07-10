import React from 'react';
import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from './components/NavigationBar.jsx';
import Hero from './components/Hero.jsx';
import TopMovies from './components/Movies/TopMovies.jsx';
import TopSeries from './components/Series/TopSeries.jsx';
import Genres from './Genres/Genres.jsx';
import MovieFilter from './components/Moviefilter/MovieFilter.jsx';
import AiSearch from './components/AiSearch/AiSearch.jsx';
import { MediaModalProvider } from './components/MediaModal/MediaModalContext.jsx';
import MediaModal from './components/MediaModal/MediaModal.jsx';


function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
    <MediaModalProvider>
    <div className='min-h-screen bg-black text-white overflow-hidden relative' >
         {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
       {/* Mouse follower */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)'
        }}
      />
    <NavigationBar/>
    <div className="content-body">
      <Routes>
          <Route path='/' element = {<Hero /> }/>
          <Route path = '/topmovies'  element = {<TopMovies/>} />
          <Route path = '/topseries'  element = {<TopSeries/>} />
          <Route path = '/moviefilter'  element = {<MovieFilter/>} />
          <Route path = '/aisearch'  element = {<AiSearch/>} />
          <Route path = '/genres/:genreName/:genreId'  element = {<Genres/>} />
      </Routes>
  
    </div>
    </div>
    <MediaModal />
    </MediaModalProvider>
    </Router>
  )
}

export default App