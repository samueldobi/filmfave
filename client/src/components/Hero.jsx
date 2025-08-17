import React, { useState, useEffect } from 'react';
import MovieBtn from './MovieBtn.jsx';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../utilities/apiEndpoints.js';


const Hero = () => {
 
  const [isLoaded, setIsLoaded] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
useEffect(() => {
  setIsLoaded(true);
  const fetchPopularMovies = async () => {
    try {
      const response = await getPopularMovies();
      setPopularMovies(response.data.results);
      console.log("Popular Movies:", response);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };
  fetchPopularMovies(); 
}, []);

  return (
    <>
       <div >
      {/* Hero Section */}
      <div className="relative z-10 px-8 pt-16 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-7xl md:text-8xl font-thin leading-none mb-8 tracking-tight">
              DISCOVER {''}
              <span className="text-blue-400">CINEMA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
              Curated recommendations for the discerning film enthusiast
            </p>
          </div>

          {/* Search Bar */}
          <div className={`relative max-w-2xl transform transition-all duration-1500 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Link to="/moviefilter">
            <button
              placeholder=""
              className="w-full bg-gray-900/50 border border-gray-800 rounded-none px-8 py-6 text-lg focus:outline-none focus:border-blue-400 transition-all duration-300 backdrop-blur-sm" >
            <p> Filter by  years, keywords, genres...</p>
            </button>
            </Link>
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-8 border border-gray-600 flex items-center justify-center">
                <div className="w-4 h-4 border border-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Films Grid */}
      <div className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-2xl font-light tracking-widest mb-12 transform transition-all duration-1500 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            TRENDING MOVIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {popularMovies.map((film, index) => (
            <div 
              key={index}
              className={`group cursor-pointer transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-[2/3] mb-4 hover:bg-gray-800 transition-all duration-500">
                {/* Movie poster */}
                <img 
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                  alt={film.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-gray-600 group-hover:border-blue-400 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white group-hover:bg-blue-400 transition-colors duration-500"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-2xl font-light">{film.vote_average}</div>
                </div>
              </div>

              <h3 className="text-lg font-light tracking-wide group-hover:text-blue-400 transition-colors duration-300">{film.title}</h3>
              <p className="text-gray-500 text-sm tracking-wider">
                {film.release_date ? film.release_date.split('-')[0] : 'N/A'}
              </p>
            </div>
          ))}

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transform transition-all duration-1500 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <Link to ="/topmovies">
            <button className="px-12 py-4 border border-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 group">
              <span className="group-hover:tracking-wider transition-all duration-300">START EXPLORING</span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Geometric accent */}
      <div className="fixed bottom-8 right-8 w-16 h-16 border border-gray-800 rotate-45 opacity-20 z-0"></div>
      <div className="fixed top-1/4 left-8 w-8 h-8 border border-gray-800 opacity-20 z-0"></div>
    </div>
    </>
  )
}

export default Hero