const axios = require('axios');
const withCors = require('../lib/cors');
export default async function handler(req, res){
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
module.exports = withCors(handler);