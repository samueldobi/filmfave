import React from 'react';
import Card from 'react-bootstrap/Card';

const getPosterUrl = (backdrop_path) =>{
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`
}
const SeriesCard = ({name, overview, first_air_date, backdrop_path}) => {
  const overviewArray = overview.split("");
  const overCopy = overviewArray.splice(0, 200);
  return (
    <div>
         <Card className='movie-card'>
                    <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded' />
                    <Card.Body>
                        <Card.Title className='text-light'>{name}</Card.Title>
                        <Card.Text className='text-light'>
                        {overCopy}........
                        </Card.Text>
                        <Card.Text className='text-light'>
                        <p > release date: <span className='fw-bold'>{first_air_date}</span></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
    </div>
  )
}

export default SeriesCard