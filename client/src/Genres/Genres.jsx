import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GenreCard from './GenreCard.jsx';
import {Container,Row, Col} from 'react-bootstrap';
import { getGenreById } from '../utilities/apiEndpoints.js';
import Pagination from '../components/Pagination/Pagination.jsx';

const Genres = () => {
    const {genreName, genreId} = useParams();
    const [genres, setGenres] = useState([]);
    // Pagination
    const [currentPage, setCurrentPage] =  useState(1);
    const genresPerPage = 3;
    // Calculate the total number of pages
    const totalPages = Math.ceil(genres.length / genresPerPage)
    // Get the movie for the current page
    const currentGenres = genres.slice(
      (currentPage - 1) * genresPerPage,
      currentPage * genresPerPage
    )
    // Handle Page Change
    const handlePageChange = (pageNumber) =>{
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
   

    useEffect(()=>{
    
            const fetchMoviesByGenre = async () => {
                try {
                   const response = await getGenreById(genreId);
                   console.log("Genre List:", response);
                   setGenres(response.data.results);
                } catch (error) {
                    console.log('Error getting data', error)
                }
            } 
              if (genreId) {
                fetchMoviesByGenre();
                window.scrollTo(0, 0);
              }
            window.scrollTo(0, 0);
    },[genreId])
  return (
    <div className='p-3 m-3'>
        <h1 className="text-light text-center text-capitalize fw-bold m-3 p-3 fs-1 ">
            {genreName}
        </h1>
        <Container>
            <Row className='object-center'>
            {currentGenres.map((genre, index) => (
                <Col key={index} xs={12} md={4} lg={4} className="mb-4 ">
                <GenreCard {...genre} />
                </Col>
               ))}
            </Row>
            {/* <Pagination className="justify-content-center m-3 p-3 paginate-div">
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
        </Pagination> */}
                  <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
        </Container>
    </div>
  )
}

export default Genres