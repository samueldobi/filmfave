const axios =  require('axios');
module.exports.popular_movies =  async (req, res) =>{
    const apiKey = process.env.TMDB_API_KEY; 
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
            res.status(200).json({
            success: true,
            message: 'Popular movies fetched successfully',
            data: response.data,
    });
    }catch(err){
        console.log(err);
        res.status(500).json({succes:false, message:"Failed to fetch popular movies"});
    }
}
module.exports.top_movies =  async (req, res) =>{
    const apiKey = process.env.TMDB_API_KEY; 
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
            res.status(200).json({
            success: true,
            message: 'Top movies fetched successfully',
            data: response.data,
    });
    }catch(err){
        console.log(err);
        res.status(500).json({succes:false, message:"Failed to fetch popular movies"});
    }
}
module.exports.top_series =  async (req, res) =>{
    const apiKey = process.env.TMDB_API_KEY; 
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`);
            res.status(200).json({
            success: true,
            message: 'Top Series fetched successfully',
            data: response.data,
    });
    }catch(err){
        console.log(err);
        res.status(500).json({succes:false, message:"Failed to fetch popular movies"});
    }
}

module.exports.genre_by_id = async (req, res) => {
     const { id } = req.params; 
    const apiKey = process.env.TMDB_API_KEY; 
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`
    );
            res.status(200).json({
            success: true,
            message: 'Genre movies fetched successfully',
            data: response.data,
    });
  } catch (error) {
    console.error("Error fetching movies by genre:", error.message);
    res.status(500).json({ error: "Failed to fetch movies by genre" });
  }
}
module.exports.movie_filter = async (req, res) => {
    const { genres, keywords, year } = req.query;
      const apiKey = process.env.TMDB_API_KEY;

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: genres,
        with_keywords: keywords,
        primary_release_year: year
      }
    });

    res.status(200).json({
      success: true,
      data: response.data.results
    });
  } catch (error) {
    console.error("Error fetching filtered movies:", error.message);
     res.status(500).json({ success: false, message: "Failed to fetch movies" });}
};

module.exports.media_details = async (req, res) => {
  const { type, id } = req.params;
  const apiKey = process.env.TMDB_API_KEY;

  if (!['movie', 'tv'].includes(type)) {
    return res.status(400).json({ success: false, message: 'Type must be movie or tv' });
  }

  try {
    const [detailRes, creditsRes, videosRes] = await Promise.all([
      axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
        params: { api_key: apiKey, append_to_response: '' },
      }),
      axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
        params: { api_key: apiKey },
      }),
      axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
        params: { api_key: apiKey },
      }),
    ]);

    const trailer = (videosRes.data.results || []).find(
      (v) => v.type === 'Trailer' && v.site === 'YouTube'
    );

    res.status(200).json({
      success: true,
      data: {
        ...detailRes.data,
        credits: creditsRes.data,
        trailer: trailer || null,
      },
    });
  } catch (error) {
    console.error('Error fetching media details:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch details' });
  }
};

module.exports.ai_search = async (req, res) => {
  const { query } = req.body;
  if (!query || !query.trim()) {
    return res.status(400).json({ success: false, message: 'Query is required' });
  }

  const { interpretQuery } = require('../lib/llm');
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
};