import { useState, useEffect, useCallback } from 'react';
import { X, Play, Star } from 'lucide-react';
import { useMediaModal } from './MediaModalContext.jsx';
import { getMediaDetails } from '../../utilities/apiEndpoints.js';

const MediaModal = () => {
  const { mediaId, mediaType, closeMedia } = useMediaModal();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isOpen = mediaId !== null;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') closeMedia();
  }, [closeMedia]);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (!mediaId || !mediaType) return;
    setLoading(true);
    setError(null);
    setData(null);
    getMediaDetails(mediaType, mediaId)
      .then((res) => {
        if (res.success) setData(res.data);
        else setError('Failed to load details');
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [mediaId, mediaType]);

  if (!isOpen) return null;

  const title = data?.title || data?.name || '';
  const releaseDate = data?.release_date || data?.first_air_date || '';
  const year = releaseDate ? releaseDate.split('-')[0] : '';
  const runtime = data?.runtime || data?.episode_run_time?.[0] || '';
  const cast = data?.credits?.cast?.slice(0, 10) || [];
  const genres = data?.genres || [];
  const trailerUrl = data?.trailer
    ? `https://www.youtube.com/embed/${data.trailer.key}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={closeMedia}
    >
      <div
        className="relative w-full max-w-4xl min-h-[200px] bg-gray-900 border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeMedia}
          className="absolute top-4 right-4 z-10 w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-blue-500 transition-colors duration-300"
        >
          <X size={16} className="text-gray-400" />
        </button>

        {loading && (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && !loading && (
          <div className="flex items-center justify-center py-32">
            <p className="text-red-400 font-light">{error}</p>
          </div>
        )}

        {!loading && data && (
          <>
            <div className="relative max-h-[50vh] overflow-hidden">
              {data.backdrop_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
                  alt=""
                  className="w-full h-64 md:h-full object-cover opacity-40"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end gap-6">
                {data.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
                    alt={title}
                    className="w-24 md:w-32 rounded-lg shadow-lg hidden sm:block"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
                    {title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-400">
                    {year && <span>{year}</span>}
                    {runtime && <span>{runtime} min</span>}
                    {data.vote_average > 0 && (
                      <span className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" />
                        {data.vote_average.toFixed(1)}
                      </span>
                    )}
                    {data.number_of_seasons && (
                      <span>{data.number_of_seasons} seasons</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {genres.map((g) => (
                      <span
                        key={g.id}
                        className="px-3 py-1 text-xs border border-gray-700 text-gray-300 tracking-wider"
                      >
                        {g.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-8 overflow-y-auto max-h-[40vh]">
              {data.tagline && (
                <p className="text-gray-500 italic font-light">{data.tagline}</p>
              )}

              {data.overview && (
                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-2">OVERVIEW</h3>
                  <p className="text-gray-300 font-light leading-relaxed">{data.overview}</p>
                </div>
              )}

              {trailerUrl && (
                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                    <Play size={14} /> TRAILER
                  </h3>
                  <div className="aspect-video">
                    <iframe
                      src={trailerUrl}
                      title="Trailer"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {cast.length > 0 && (
                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-3">CAST</h3>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {cast.map((person) => (
                      <div key={person.id} className="flex-shrink-0 w-24 text-center">
                        {person.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                            alt={person.name}
                            className="w-20 h-20 object-cover rounded-full mx-auto mb-2"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full mx-auto mb-2 bg-gray-800 flex items-center justify-center">
                            <span className="text-gray-600 text-xs">{person.name?.[0]}</span>
                          </div>
                        )}
                        <p className="text-xs text-gray-300 truncate">{person.name}</p>
                        <p className="text-xs text-gray-500 truncate">{person.character}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MediaModal;
