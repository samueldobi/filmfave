import React, { useEffect } from 'react';
import Select from "react-select";
import {Container,Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import MovieFilterCard from './MovieFilterCard';


const genres = [
  {value : 28, label: "Action"},
  {value : 35, label: "Comedy"},
  {value : 10749, label: "Romance"}
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
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1ae5981ff7d4f8f7646cc506eebc1c91&with_genres=${genreQuery}&with_keywords=${keywordQuery}&primary_release_year=${yearQuery}`)
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
    <div>
   
      <h2>Filter Movies</h2>
      <Select
        options={genres}
        isMulti
        placeholder="Select Genres"
        onChange={setSelectedGenres}
      />
      <Select
        options={keywords}
        isMulti
        placeholder="Select Keywords"
        onChange={setSelectedKeywords}
      />
      <Select
        options={years}
        isMulti
        placeholder="Select Years"
        onChange={setSelectedYears}
      />
      
      <h3 className='text-white '>Results:</h3>
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