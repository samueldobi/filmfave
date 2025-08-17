const axios = require('axios');
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