const axios = require('axios');
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