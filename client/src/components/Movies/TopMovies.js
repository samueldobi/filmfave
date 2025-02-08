import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import {Container,Row, Col, Pagination} from 'react-bootstrap';



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
    // Handle Page Change
    const handlePageChange = (pageNumber) =>{
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }

    // Fetch the api data
    useEffect(()=>{
      fetch("/api/topmovies")
      .then(
        response => response.json()
      ).then(
        data =>{
            console.log(data.results)
          setMovies(data.results)
        }
      )
      window.scrollTo(0, 0);
    }, [])

  return (
    
    <div className='top-movies m-3 p-3'>
        <Container className='p-3'>
        <Row>
          {currentMovies.map((movie, index) => (
            <Col key={index} xs={12} md={4} lg={4} className="mb-4">
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