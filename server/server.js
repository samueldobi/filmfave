const express = require('express');
const app = express();
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');
const cors = require("cors");

dotenv.config();
// Middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://filmfave.vercel.app/"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));


// get the popular movies from TMDB API
app.use("/api", movieRoutes);
// Get the top movies data from TMDB API  
app.get("/api/topmovies", async (req, res) => {
  const apiKey = process.env.TMDB_API_KEY; // Ensure you have your API key in .env file
  try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
     res.json(response.data); // Send the response data back to the client
     console.log(response.data)
  } catch (err) {
      console.log(err); 
      res.status(500).send('Internal Server Error'); // Handle errors appropriately
  }
  
});

// Get the top series data from TMDB API
app.get("/api/topseries", async(req, res) =>{
  try{
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`);
    res.json(response.data);
  }catch(err){
    console.log(err);
    res.status(500).send('Internal Server Error ');
  }
}) 
// // trying to fix cors issue
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });


const PORT = process.env.PORT || 3000;

// start up the backend
app.listen('5000', ()=>{ 
    console.log('server started on port 5000')
})

 