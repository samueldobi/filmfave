import React from 'react';
import Card from 'react-bootstrap/Card';

// Get the url of the image from TMDB website
const  getPosterUrl = (backdrop_path) =>{
    return `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${backdrop_path}`
}
const MovieFilterCard = ({title, overview, release_date, backdrop_path}) => {
  return (
    <div>
        {/* <Card className='movie-filter-card'>
            <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' />
            <Card.Body>
                <Card.Title className=''>{title}</Card.Title>
                <Card.Text className=''>
                {overview}
                </Card.Text>
                <Card.Text className=''>
                <p > release date: <span className='fw-bold'>{release_date}</span></p>
                </Card.Text>
            </Card.Body>
        </Card> */}
        <div
      href="#"
      className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition w-80" // Added w-80 for standard card width
    >
      <img
        className="w-full h-60 object-cover rounded-t-xl" // Added h-48 for a fixed image height
        src={getPosterUrl(backdrop_path)}
        alt="Series Image"
      />
      <div className="p-4 md:p-5 overflow-y-auto max-h-32 no-scrollbar">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-1 text-gray-500">
            {overview}
        </p>
        <p className="mt-1 text-black-500">
            Release Date: {release_date}
        </p>
      </div>
   </div>
    </div>
  )
}

export default MovieFilterCard