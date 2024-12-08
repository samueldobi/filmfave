import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './Movies/MovieCard';

const TopMovies = () => {
    // const [backendData, setBackendData] =  useState([]);
    const [movies, setMovies] = useState([]);
    // const [movieTitle, setMovieTitle] = useState([]);
    // const [movieImage, setMovieImage] = useState('');

    useEffect(()=>{
      fetch("/api/topmovies")
      .then(
        response => response.json()
      ).then(
        data =>{
            console.log(data.results)
          setMovies(data.results)
        }
      )
    }, [])
  return (
    <div className='top-movies m-3 p-3'>
      {/* Card holder for the movies */}
       { 
        movies.map((movie,index) =>{
          return <MovieCard key={index} {...movie}/>
        })
       }
      {/* Card holder for the movies */}
      <p className='text-light'></p>
    </div>
  )
}

export default TopMovies