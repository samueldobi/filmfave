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

const PORT = process.env.PORT || 3000;

// start up the backend
app.listen('5000', ()=>{ 
    console.log('server started on port 5000')
})

 