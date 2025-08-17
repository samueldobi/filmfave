import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard.jsx';
import {Container,Row, Col, Pagination} from 'react-bootstrap';
import { getTopMovies } from '../../utilities/apiEndpoints.js';



const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  // Pagination
    const [currentPage, setCurrentPage] =  useState(1);
    const moviesPerPage = 3;
    // Calculate the total number of pages
    const totalPages = Math.ceil(movies.length / moviesPerPage)
    // Get the movie for the current page 
    const currentMovies = movies.slice(
      (currentPage - 1) * moviesPerPage,
      currentPage * moviesPerPage
    )
    // Function to Handle Page Change
    const handlePageChange = (pageNumber) =>{
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }

    // Fetch the api data
    useEffect(()=>{
        const fetchTopMovies = async () => {
          try {
            const response = await getTopMovies();
            setMovies(response.data.results);
            console.log("Popular Movies:", response);
          } catch (error) {
            console.error("Error fetching popular movies:", error);
          }
        };
        fetchTopMovies(); 
      window.scrollTo(0, 0);
    }, [])

  return (
    
    <div className='top-movies '>
        <Container className='p-3'>
        <h1 className="text-light text-center text-capitalize fw-bold m-3 p-3 fs-1 ">
            Top Rated Movies
        </h1>
        <Row className='object-center'>
          {currentMovies.map((movie, index) => (
            <Col key={index} xs={12} md={4} lg={4} className="mb-4 ">
              <MovieCard {...movie} />
            </Col>
          ))}
        </Row>
        <Pagination className="justify-content-center m-3 p-3 paginate-div">
          <Pagination.First  onClick={() => handlePageChange(1)} disabled={currentPage === 1}  />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages).keys()].map(pageNumber => (
            <Pagination.Item 
              key={pageNumber + 1}
              active={pageNumber + 1 === currentPage}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </Container>
    </div>
  )
}

export default TopMovies