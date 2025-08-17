import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
// Get the url of the image from TMDB website
const  getPosterUrl = (backdrop_path) =>{
    return `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}
// This is the genre card main component
const GenreCard = ({title, overview, release_date, backdrop_path}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Truncate overview to 150 characters for better display
  const truncatedOverview = overview ? overview.substring(0, 150) + (overview.length > 150 ? '...' : '') : '';
  return (
  <div className="group">
      <div 
        className="relative bg-gray-900 border border-gray-800 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[2/3]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 border border-gray-600"></div>
            </div>
          )}
          <img
            className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} group-hover:scale-105`}
            src={getPosterUrl(backdrop_path)}
            alt={ title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full h-1 bg-blue-500/30 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-4/5 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-300 mt-2 tracking-wider">RATING</div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-light text-white tracking-wide leading-tight group-hover:text-blue-400 transition-colors duration-300">
            { title}
          </h3>

          {/* Overview */}
          <div className={`transition-all duration-300 ${isHovered ? 'max-h-32' : 'max-h-20'} overflow-hidden`}>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {truncatedOverview}
            </p>
          </div>

          {/* Release Date */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-800">
            <div className="text-xs text-gray-500 tracking-widest uppercase">
              {release_date}
            </div>
            <div className={`w-6 h-6 border border-gray-600 flex items-center justify-center transition-all duration-300 ${isHovered ? 'border-blue-500 bg-blue-500/10' : ''}`}>
              <div className={`w-2 h-2 bg-gray-600 transition-colors duration-300 ${isHovered ? 'bg-blue-500' : ''}`}></div>
            </div>
          </div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-gray-700 group-hover:border-blue-500/50 transition-colors duration-300"></div>
      </div>
    </div>
  )
}

export default GenreCard