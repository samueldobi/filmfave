import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Genres = () => {
    const {genreName, genreId} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
    
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1ae5981ff7d4f8f7646cc506eebc1c91&with_genres=${genreId}`)  
                   
                    const genreList = response.data.results
                    console.log(genreList)
                } catch (error) {
                    console.log('Error getting data', error)
                }
            } 
            fetchData()
    },[genreId])
  return (
    <div className=''>
        <h1 className="text-light text-center fw-bold m-3 p-3">
            Page Name :{genreName}
        </h1>
    </div>
  )
}

export default Genres