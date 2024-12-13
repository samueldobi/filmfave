import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const MovieBtn = () => {
  return (
    <div>
         <Link to ="/moviefilter">
          <Button variant="" className='movie-btn '>Get a Movie</Button>
         </Link>
        
    </div>
  )
}

export default MovieBtn