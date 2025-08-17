const axios = require('axios');
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