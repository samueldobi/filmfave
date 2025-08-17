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
  