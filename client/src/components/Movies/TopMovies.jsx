import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard.jsx';
import { getTopMovies } from '../../utilities/apiEndpoints.js';
import Pagination from '../Pagination/Pagination.jsx';


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
        <div className='p-3'>
        <h1 className="text-light text-center text-capitalize fw-bold m-3 p-3 fs-1 ">
            Top Rated Movies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentMovies.map((movie, index) => (
            <div key={index} xs={12} md={4} lg={4} className="mb-4 ">
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
     
     {/* Pagination */}

       <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default TopMovies