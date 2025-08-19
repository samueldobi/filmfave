const axios = require('axios');
module.exports = async (req, res) =>{
    const apiKey = process.env.TMDB_API_KEY; 
    if(!apiKey){
        return res.status(500).json({success:false, message:"API key not found"});
    }
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