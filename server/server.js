const express = require('express');
const app = express();
const axios =  require('axios');
const apiKey = '1ae5981ff7d4f8f7646cc506eebc1c91';

// Get the top movies data from TMDB API  
app.get("/api/topmovies", async (req, res) => {
  try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
     res.json(response.data); // Send the response data back to the client
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


const PORT = process.env.PORT || 3000;

// start up the backend
app.listen('5000', ()=>{ 
    console.log('server started on port 5000')
})

 