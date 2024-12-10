import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Genres = () => {
    const {genreName} = useParams();
    const [movies, setMovies] = useState([]);
  return (
    <div>
        <p className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui officia delectus sint omnis placeat optio eum deleniti laborum repellendus quae nisi sed ipsum sequi ullam saepe ipsam possimus provident explicabo amet, deserunt, assumenda eos quaerat architecto velit! Soluta odit aut et reiciendis exercitationem illo similique, omnis sit natus cum repudiandae quidem maiores iure. Eum quam, vero sed qui distinctio cupiditate. Assumenda molestias hic consequuntur eveniet blanditiis atque quod quaerat culpa ex. Ipsam, vitae dolore quas distinctio excepturi minus ex nulla voluptas nihil dolorum labore culpa totam? Ipsum quidem, magni necessitatibus omnis, a, laboriosam ullam velit corrupti ab voluptatibus quasi ducimus.</p>
    </div>
  )
}

export default Genres