import React from 'react';
import Card from 'react-bootstrap/Card';
const getPosterUrl = (backdrop_path) =>{
    return `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}
const MovieCard = ({title, overview, release_date, backdrop_path}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={getPosterUrl(backdrop_path)} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {overview}
                </Card.Text>
                <Card.Text>
                <p > release date: <span className='fw-bold'>{release_date}</span></p>
                </Card.Text>
            </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard