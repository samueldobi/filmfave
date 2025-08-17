export default async function handler(req, res){
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