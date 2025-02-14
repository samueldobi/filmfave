import React, { useEffect } from 'react';
import Select from "react-select";
import {Container,Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import MovieFilterCard from './MovieFilterCard.jsx';


const genres = [
  {value : 28, label: "Action"},
  {value : 12, label: "Adventure"},
  {value : 16, label: "Animation"},
  {value : 35, label: "Comedy"},
  {value : 80, label: "Crime"},
  {value : 18, label: "Drama"},
  {value : 10751, label: "Family"},
  {value : 14, label: "Fantasy"},
  {value : 36, label: "History"},
  {value : 9648, label: "Mystery"},
  {value : 10749, label: "Romance"},
  {value : 878, label: "Science Fiction"},
  {value : 53, label: "Thriller "},
  {value : 10752, label: "War "},
];
const keywords = [
  { value: 818, label: "Love" },
  { value: 9715, label: "Superhero" },
  { value: 33788, label: "Friendship" },
];
const years = Array.from({length: 45}, (_,i)=>{
  const year = 1980 + i;
  return {value :year , label: year}
})
const MovieFilter = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [movies, setMovies] = useState([]);

    useEffect(()=>{
      // If no changes are made, no api call is made
      if (selectedGenres.length === 0 && selectedKeywords.length === 0 && selectedYears.length === 0) return;

      const genreQuery = selectedGenres.map((g) => g.value).join("|");
      const keywordQuery = selectedKeywords.map((k) => k.value).join(",");
      const yearQuery = selectedYears.map((y) => y.value).join("|");
      const fetchData = async () =>{
        try {
           // apikey
          const apiKey = import.meta.env.VITE_API_KEY;
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreQuery}&with_keywords=${keywordQuery}&primary_release_year=${yearQuery}`)
          // const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1ae5981ff7d4f8f7646cc506eebc1c91&primary_release_year=2017&with_genres=35`)
          const movieData = response.data.results
          console.log(movieData)
          setMovies(movieData)
        } catch(error){
          console.log('Error getting data', error)
        }
      }
      fetchData();
    }, [selectedGenres, selectedKeywords, selectedYears])

  return (
    <div className=' movie-filter-body h-screen'>
      
      <h1 className="text-center p-4 m-4 text-lg text-white font-bold sm:text-lg lg:text-4xl lg:leading-tight dark:text-neutral-200">
      Find your next favorite movie - <span className="text-blue-500">filter by genre, rating, and more!</span>
      </h1>

      <Select
        options={genres}
        isMulti
        placeholder="Select Genres"
        onChange={setSelectedGenres}
        className='filter-select'
      />
      <Select
        options={keywords}
        isMulti
        placeholder="Select Keywords"
        onChange={setSelectedKeywords}
        className='filter-select'
      />
      <Select
        options={years}
        isMulti
        placeholder="Select Years"
        onChange={setSelectedYears}
        className='filter-select'
      />
      
      <h3 className='text-white text-center text-4xl t m-2 p-2 '>Results:</h3>
      <Container>
            <Row>
            { movies && movies.length > 0 ?(
               movies.map((movie, index) => (
                <Col key={index} xs={12} md={4} lg={4} className="mb-4">
                <MovieFilterCard {...movie} />
                </Col>
               ))
            ) :(
              <p className="text-white">No results for this input, try a different combination</p>
            )}
           
            </Row>
      </Container>

   
    </div>
  )
}

export default MovieFilter