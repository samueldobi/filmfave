const axios = require('axios');
const withCors = require('../lib/cors');
const { interpretQuery } = require('../lib/llm');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { query } = req.body;
  if (!query || !query.trim()) {
    return res.status(400).json({ success: false, message: 'Query is required' });
  }

  const apiKey = process.env.TMDB_API_KEY;

  try {
    const interpreted = await interpretQuery(query);

    const discoverParams = {
      api_key: apiKey,
      sort_by: 'popularity.desc',
    };

    if (interpreted.genres) {
      discoverParams.with_genres = interpreted.genres;
    }
    if (interpreted.yearStart) {
      discoverParams['primary_release_date.gte'] = `${interpreted.yearStart}-01-01`;
    }
    if (interpreted.yearEnd) {
      discoverParams['primary_release_date.lte'] = `${interpreted.yearEnd}-12-31`;
    }

    const [discoverRes, searchRes] = await Promise.all([
      axios.get('https://api.themoviedb.org/3/discover/movie', { params: discoverParams }),
      interpreted.searchQuery
        ? axios.get('https://api.themoviedb.org/3/search/movie', {
            params: { api_key: apiKey, query: interpreted.searchQuery },
          })
        : Promise.resolve(null),
    ]);

    const discoverMovies = discoverRes.data.results || [];
    const searchMovies = searchRes?.data?.results || [];

    const seen = new Set();
    const merged = [];

    for (const movie of discoverMovies) {
      if (!seen.has(movie.id)) {
        seen.add(movie.id);
        merged.push(movie);
      }
    }

    for (const movie of searchMovies) {
      if (!seen.has(movie.id) && merged.length < 40) {
        seen.add(movie.id);
        merged.push(movie);
      }
    }

    res.status(200).json({
      success: true,
      data: merged.slice(0, 40),
      interpretation: interpreted,
    });
  } catch (error) {
    console.error('AI search error:', error.message);
    res.status(500).json({ success: false, message: 'AI search failed', fallback: true });
  }
}

module.exports = withCors(handler);
