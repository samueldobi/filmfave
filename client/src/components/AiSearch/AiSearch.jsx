import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Search } from 'lucide-react';
import MovieFilterCard from '../Moviefilter/MovieFilterCard.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import usePagination from '../../hooks/usePagination.js';
import { aiSearch } from '../../utilities/apiEndpoints.js';

const AiSearch = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [interpretation, setInterpretation] = useState(null);
  const [error, setError] = useState(null);
  const { currentPage, totalPages, currentItems: currentMovies, handlePageChange, setCurrentPage } = usePagination(movies);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setSearched(false);

    try {
      const response = await aiSearch(input);
      if (response.success) {
        setMovies(response.data || []);
        setInterpretation(response.interpretation);
        setSearched(true);
        setCurrentPage(1);
      } else {
        setError(response.message);
      }
    } catch (err) {
      if (err.response?.data?.fallback) {
        navigate('/moviefilter');
        return;
      }
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 py-12 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-thin text-white mb-4 tracking-tight">
          AI <span className="text-blue-400">Search</span>
        </h1>
        <p className="text-gray-400 text-lg font-light mb-10">
          Tell us what you're in the mood for, and we'll find the perfect movie.
        </p>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. I want to watch a movie where a strong man saves a damsel in distress"
              className="w-full bg-gray-900/50 border border-gray-800 rounded-none px-8 py-6 text-lg text-white focus:outline-none focus:border-blue-400 transition-all duration-300 backdrop-blur-sm pr-32"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-4 bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border border-blue-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Search size={16} />
                  <span className="text-sm tracking-wider">SEARCH</span>
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {loading && (
          <div className="text-center py-20">
            <Sparkles className="inline-block text-blue-400 animate-pulse mb-4" size={32} />
            <p className="text-gray-400 font-light">Consulting the AI...</p>
          </div>
        )}

        {interpretation && !loading && (
          <div className="mb-8 p-4 bg-gray-900/30 border border-gray-800">
            <p className="text-sm text-gray-500 font-light">
              AI interpreted your request as:{' '}
              <span className="text-blue-400">
                {interpretation.searchQuery}
                {interpretation.genres ? ` (genres: ${interpretation.genres})` : ''}
                {interpretation.yearStart ? ` | ${interpretation.yearStart}-${interpretation.yearEnd || 'present'}` : ''}
              </span>
            </p>
          </div>
        )}

        {searched && !loading && movies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-light text-lg">
              No movies found for that description. Try something different.
            </p>
          </div>
        )}

        {currentMovies.length > 0 && !loading && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMovies.map((movie) => (
                <MovieFilterCard key={movie.id} {...movie} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiSearch;
