
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

function NavigationBar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile menu state

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (

     <nav className="relative z-50 px-6 py-4 flex justify-between items-center bg-black text-white">
      {/* Brand / Logo */}
      <div
        className={`text-3xl font-light tracking-widest transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <Link to="/">FILMFAVE</Link>
      </div>

      {/* Hamburger (mobile only) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex items-center space-x-8 transform transition-all duration-1000 delay-200 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <Link
          to="/topmovies"
          className="text-sm tracking-wider hover:text-blue-400 transition-colors duration-300"
        >
          TOP MOVIES
        </Link>

        <Link
          to="/topseries"
          className="text-sm tracking-wider hover:text-blue-400 transition-colors duration-300"
        >
          TOP SERIES
        </Link>
        <Link
          to="/moviefilter"
          className="text-sm tracking-wider hover:text-blue-400 transition-colors duration-300"
        >
          MOVIE FILTER
        </Link>

        {/* Genres Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowGenres(!showGenres)}
            className="text-sm tracking-wider hover:text-blue-400 transition-colors duration-300"
          >
            GENRES
          </button>

          {showGenres && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2">
              {[
                ["Action", "/genres/action/28"],
                ["Adventure", "/genres/adventure/12"],
                ["Animation", "/genres/animation/16"],
                ["Comedy", "/genres/comedy/35"],
                ["Crime", "/genres/crime/80"],
                ["Drama", "/genres/drama/18"],
                ["Family", "/genres/family/10751"],
                ["Fantasy", "/genres/fantasy/14"],
                ["Horror", "/genres/horror/27"],
                ["Mystery", "/genres/mystery/9648"],
                ["Romance", "/genres/romance/10749"],
                ["Science Fiction", "/genres/science-fiction/878"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="block px-4 py-2 text-sm hover:bg-gray-700"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav (collapsible) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col space-y-4 p-6 md:hidden">
          <Link
            to="/topmovies"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-wider hover:text-blue-400 transition-colors duration-300"
          >
            TOP MOVIES
          </Link>

          <Link
            to="/topseries"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-wider hover:text-blue-400 transition-colors duration-300"
          >
            TOP SERIES
          </Link>

          {/* Genres collapsible on mobile */}
          <div>
            <button
              onClick={() => setShowGenres(!showGenres)}
              className="text-sm tracking-wider hover:text-blue-400 transition-colors duration-300 w-full text-left"
            >
              GENRES
            </button>

            {showGenres && (
              <div className="mt-2 bg-gray-900 rounded-lg shadow-lg py-2">
                {[
                  ["Action", "/genres/action/28"],
                  ["Adventure", "/genres/adventure/12"],
                  ["Animation", "/genres/animation/16"],
                  ["Comedy", "/genres/comedy/35"],
                  ["Crime", "/genres/crime/80"],
                  ["Drama", "/genres/drama/18"],
                  ["Family", "/genres/family/10751"],
                  ["Fantasy", "/genres/fantasy/14"],
                  ["Horror", "/genres/horror/27"],
                  ["Mystery", "/genres/mystery/9648"],
                  ["Romance", "/genres/romance/10749"],
                  ["Science Fiction", "/genres/science-fiction/878"],
                ].map(([label, path]) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => {
                      setIsOpen(false);
                      setShowGenres(false);
                    }}
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;