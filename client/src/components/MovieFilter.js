import React, { useEffect } from 'react';
import {Container,Row, Col, Card} from 'react-bootstrap';
import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import { Form } from 'react-bootstrap';
import axios from 'axios';


const MovieFilter = () => {
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startYear, endYear] = dateRange;
  // const [filters, setFilters] = useState({
  //   date:'2017',
  //   genres: 'romance',
  //   region: 'usa',
  //   rating: '7.0',
  //   language: 'en',
  //   keywords: 'soft'
  // })
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters({ ...filters, [name]: value });
  // };
    // const { date, genres, region, rating, language, keywords } = filters;
    // const fetchData = async()=>{
    //   const response = await  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1ae5981ff7d4f8f7646cc506eebc1c91&primary_release_year=${date}&with_genres=${genres}&region=${region}&vote_average.gte=${rating}&with_original_language=${language}&with_keywords=${keywords}`)
    //   try {
    //     const filterData = response.data.results;
    //     setFilters(filterData)
    //     console.log(filterData)
    //   } catch (error) {
    //     console.log('Error getting data', error)
    //   }
    // }
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   fetchData();
    // };
    const actionId = 28;
    const releaseYear= 2018;
    const genresSelect = 

    useEffect(()=>{
      const fetchData = async () =>{
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1ae5981ff7d4f8f7646cc506eebc1c91&with_keywords=818&with_genres=28|10749&primary_release_year=${releaseYear}`)
          // const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1ae5981ff7d4f8f7646cc506eebc1c91&primary_release_year=2017&with_genres=35`)
          const testData = response.data.results
          console.log(testData)
        } catch{}
      }
      fetchData();
    })
  return (
    <div>
     <p className="text-light  text-capitalize text-center m-3 p-3">
        Choose your preferences and let us do the rest
     </p>
     <Container>
        <Row className='d-flex justify-content-center'>
            <Col xs={12} md={10} lg={12} className="m-5 p-3">
            <Card className=''>
                    {/* <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' /> */}
                    {/* <Card.Body>
                        <Card.Title className='text-dark'>Year of release </Card.Title>
                            <Form.Group>
                  <Form.Label className=''>Select Year Range</Form.Label>
                  
                </Form.Group>
                    </Card.Body> */}
                </Card>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={10} lg={12} className="mt-5 p-3">
          <Card className=''>
                    {/* <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' /> */}
                    <Card.Body>
                        <Card.Title className='text-dark'>Choose different Genres </Card.Title>
                      </Card.Body> 
                </Card>
              </Col>            
        </Row>
        <Row className='d-flex justify-content-center'>
        {/* <form >
        <div>
          <label>Date:</label>
          <input type="number" name="date" value={filters.date}  onChange={handleChange}/>
        </div>
        <div>
          <label>Genres:</label>
          <input type="text" name="genres" value={filters.genres} onChange={handleChange} />
        </div>
        <div>
          <label>Region:</label>
          <input type="text" name="region" value={filters.region} onChange={handleChange}/>
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" step="0.1" name="rating" value={filters.rating} onChange={handleChange}/>
        </div>
        <div>
          <label>Language:</label>
          <input type="text" name="language" value={filters.language} onChange={handleChange}/>
        </div>
        <div>
          <label>Keywords:</label>
          <input type="text" name="keywords" value={filters.keywords} />
        </div>
        <button type="submit">Filter Movies</button>
      </form> */}
        </Row>
     </Container>
    </div>
  )
}

export default MovieFilter