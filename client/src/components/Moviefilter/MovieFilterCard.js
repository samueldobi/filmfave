import React from 'react';
import Card from 'react-bootstrap/Card';

// Get the url of the image from TMDB website
const  getPosterUrl = (backdrop_path) =>{
    return `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}
const MovieFilterCard = ({title, overview, release_date, backdrop_path}) => {
  return (
    <div>
        <Card className='movie-filter-card'>
            <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' />
            <Card.Body>
                <Card.Title className='text-light'>{title}</Card.Title>
                <Card.Text className='text-light'>
                {overview}
                </Card.Text>
                <Card.Text className='text-light'>
                <p > release date: <span className='fw-bold'>{release_date}</span></p>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default MovieFilterCard