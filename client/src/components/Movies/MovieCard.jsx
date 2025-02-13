import React from 'react';
import Card from 'react-bootstrap/Card';

// Get the url of the  image from tmdb website
const getPosterUrl = (backdrop_path) =>{
    return `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}
// This is the movie card main component
const MovieCard = ({title, overview, release_date, backdrop_path}) => {
  const overviewArray = overview.split("");
  const overCopy = overviewArray.splice(0, 200);

  return (
    <div>
                <Card className='movie-card'>
                    <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' />
                    <Card.Body>
                        <Card.Title className='text-light'>{title}</Card.Title>
                        <Card.Text className='text-light'>
                        {overCopy}........
                        </Card.Text>
                        <Card.Text className='text-light'>
                        <p > release date: <span className='fw-bold'>{release_date}</span></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
    </div>
  )
}


export default MovieCard