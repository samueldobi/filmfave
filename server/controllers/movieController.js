const axios =  require('axios');
module.exports.popular_movies =  async (req, res) =>{
    const apiKey = process.env.TMDB_API_KEY; 
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        console.log("TMDB Key:", process.env.TMDB_API_KEY);
        console.log(response.data);
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
        const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`);
        console.log("TMDB Key:", process.env.TMDB_API_KEY);
        console.log(response.data);
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
        console.log("TMDB Key:", process.env.TMDB_API_KEY);
        console.log(response.data);
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