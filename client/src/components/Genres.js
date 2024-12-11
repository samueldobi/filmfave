import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Genres = () => {
    const {genreName} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const genreName = 10749;
        fetch("/api/genres/${genreName}")
        .then(
            response => response.json
        )
        .then(
            data =>{
                console.log(data)
            }
        )
    })
  return (
    <div className='movie-page'>
        <h1 className="text-light text-center fw-bold m-3 p-3">
            Page Name :{genreName}
        </h1>
    </div>
  )
}

export default Genres