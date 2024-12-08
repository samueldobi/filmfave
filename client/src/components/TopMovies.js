import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './Movies/MovieCard';
import {Container,Row, Col} from 'react-bootstrap';


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
        <Container className='p-3'>
        <Row>
          {movies.map((movie, index) => (
            <Col key={index} xs={12} md={4} lg={4} className="mb-4">
              <MovieCard {...movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default TopMovies