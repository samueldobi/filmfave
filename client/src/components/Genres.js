import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Genres = () => {
    const {genreName, genreId} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        
        axios.get(`/api/genres/${genreId}`)
        .then(
            response => response.json()
        )
        .then(
            data =>{
                console.log(data.results)
            }
        )
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