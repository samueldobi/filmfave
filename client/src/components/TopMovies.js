import React from 'react';
import {useState, useEffect} from 'react';

const TopMovies = () => {
    const [backendData, setBackendData] =  useState([]);

    useEffect(()=>{
      fetch("/api/topmovies")
      .then(
        response => response.json()
      ).then(
        data =>{
            console.log(data)
          setBackendData(data.names)
        }
      )
    }, [])
  return (
    <div className='top-movies m-3 p-3'>
        {backendData.length === 0 ?(
           <p className='text-light'>It is undefined..</p>
        ):( 
           backendData.map((user, i) =>{
           return  <p className='text-light' key={i}>{user}</p> 
           }) 
        )}
    </div>
  )
}

export default TopMovies