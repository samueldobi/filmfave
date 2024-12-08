const express = require('express');
const app = express();
const axios =  require('axios');

//Set up route for the app
// app.get("/api", (req, res) =>{
//     res.json({users:["userOne", "userTwo", "userThree"]});
    
// })
// Get top movies data from TMDB API 
app.get("/api/topmovies", async (req,res) =>{
    // External Api url
    const url = 'https://api.themoviedb.org/3/movie/changes?page=1&api_key=1ae5981ff7d4f8f7646cc506eebc1c91';
    // Options for the fetch api
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWU1OTgxZmY3ZDRmOGY3NjQ2Y2M1MDZlZWJjMWM5MSIsIm5iZiI6MTczMjk2NDA0NC4wNDMsInN1YiI6IjY3NGFlZWNjMGRjMmZkYjA1MjNlZmZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0y93_jNI5ZJSISIXwJUy2dRjorv8_TF4NcIOpW_VrBQ'
        }
      };
      try{
        // fetch the data from the api
        const response = await axios.get(url, options);
        // Parse the json response
        const data = res.json(response.results);
        console.log('kk');
      }catch(error){
        console.error("Error fetching data:", error);
        res.status(500).send('Something went wrong!');
      }
})
// start up the backend
app.listen('5000', ()=>{ 
    console.log('server started on port 5000')
})

 